<template>
  <div class="field">
    <label for="id" class="formfield-label"
      >{{ label }} <span v-if="required">*</span>
    </label>
    <div :class="classObject">
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :v-bind="$attrs"
        @input="updateValue"
        @blur="check"
      />
      <!-- <i :class="icon" v-if="icon"></i> -->
      <i class="close link icon" @click="clear()" v-if="currentValue"></i>
    </div>
    <div class="error-message-container">
      <span v-if="classObject.error" class="error-message">{{
        errorMessage
      }}</span>
    </div>
  </div>
</template>

<script>
import { formFieldMixin } from '../../mixins/formFieldMixin';

export default {
  mixins: [formFieldMixin],

  props: {
    type: { type: String, default: 'text' },
    icon: String,
    id: String,
    placeholder: String,
  },
  data: () => ({
    classObject: {
      ui: true,
      icon: true,
      input: true,
      error: false,
    },
    currentValue: '',
    errorMessage: '',
  }),
  computed: {
    listeners() {
      return {
        input: this.updateValue,
      };
    },
  },
  methods: {
    updateValue(event) {
      // this.classObject.error = false;
      this.$emit('input', event);
      this.currentValue = event.target.value;
    },
    check() {
      if (this.required && !this.currentValue) {
        this.classObject.error = true;
        this.errorMessage = 'This field is required.';
      } else {
        this.classObject.error = false;
        this.errorMessage = '';
      }
    },
    clear() {
      document.getElementById(this.id).value = '';
      this.currentValue = '';
      this.check();
    },
  },
};
</script>

<style lang="scss" scoped>
.error-message-container {
  height: 1rem;

  .error-message {
    color: red;
    font-size: small;
  }
}
</style>
