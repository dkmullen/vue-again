<template>
  <div>
    <div class="ui secondary pointing menu main-menu">
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
    <div class="ui secondary vertical menu mobile-menu" v-if="showMobileMenu">
      <a
        v-for="(i, index) in menuItems"
        :key="index"
        :class="i.navClass"
        class="item"
        @click="go(i.label)"
      >
        {{ i.label }}
      </a>
    </div>
    <div id="overlay" v-if="showMobileMenu" @click="toggleMobileMenu"></div>
    <button class="ui icon button menu-button" @click="toggleMobileMenu">
      <i class="bars icon"></i>
    </button>
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

    let showMobileMenu = ref(false);
    function go(location) {
      menuItems.value.forEach((item) => {
        item.navClass = item.label === location ? 'active' : '';
      });
      router.push({ name: location.toLowerCase() });
      showMobileMenu.value = false;
    }
    function toggleMobileMenu() {
      showMobileMenu.value = !showMobileMenu.value;
    }

    return {
      go,
      menuItems,
      showMobileMenu,
      toggleMobileMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-button {
  display: none;
  position: fixed;
  right: 10px;
  top: 10px;
  background-color: rgba(0, 0, 0, 0.01);

  i.icon {
    font-size: 2rem;
    position: relative;
    top: 4px;
  }
}
.mobile-menu {
  position: absolute;
  right: 20px;
  top: 50px;
  background-color: white !important;
  z-index: 3;
  border: 1px solid lightgray !important;
  display: none !important;
  width: 300px;
  font-size: large;
}
#overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.2); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}

@media (max-width: 600px) {
  .main-menu {
    display: none;
  }
  .menu-button {
    display: block;
  }
  .mobile-menu,
  #overlay {
    display: block !important;
  }
}
</style>
