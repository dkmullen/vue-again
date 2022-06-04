<template>
  <div>
    <div class="ui secondary pointing menu">
      <a
        v-for="(i, index) in menuItems"
        :key="index"
        :class="i.navClass"
        class="item"
        @click="go(i.label)"
      >
        {{ i.label }}
      </a>
      <div class="right menu">
        <a class="ui item"> Logout </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import router from '@/router';

export default {
  setup() {
    const menuItems = ref([
      { label: 'Home', navClass: 'active' },
      { label: 'About', navClass: '' },
      { label: 'Friends', navClass: '' },
      { label: 'Messages', navClass: '' },
      { label: 'Favorites', navClass: '' },
    ]);
    function go(location) {
      menuItems.value.forEach((item) => {
        item.navClass = item.label === location ? 'active' : '';
      });
      router.push({ name: location.toLowerCase() });
    }
    return {
      go,
      menuItems,
    };
  },
};
</script>

<style></style>
