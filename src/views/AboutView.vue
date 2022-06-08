<template>
  <div class="about page">
    <h1>This is an about page</h1>
    <button class="ui button btn-primary">Follow</button>
    <button class="ui button btn-accent" @click="doSearch">Search</button>
    <div class="ui icon input">
      <input type="text" placeholder="Search..." />
      <i class="search icon" v-if="!loading"></i>
      <i class="spinner notched circle loading icon" v-if="loading"></i>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    let loading = ref(false);

    function doSearch() {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    }

    return {
      loading,
      doSearch,
    };
  },
};
</script>

<style lang="scss" scoped></style>
