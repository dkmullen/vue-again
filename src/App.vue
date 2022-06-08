<template>
  <div id="app-wrapper">
    <NavBar />
    <div class="ui segment main-segment"><router-view /></div>
  </div>
  <footer></footer>
</template>
<script>
import { onMounted } from '@vue/runtime-core';

import NavBar from './components/NavBar.vue';
export default {
  components: { NavBar },
  setup() {
    onMounted(() => {
      document.title = 'My Blue Matrix';
    });
  },
};
</script>

<style lang="scss">
$primary: #0000a8;
$accent: #00a0a8;

html {
  font-size: 16px !important;
}
body {
  height: 90%;
}
#app-wrapper {
  max-width: 1100px;
  margin: auto;
  margin-top: 2rem;
  padding: 2%;
}
#app {
  .center-text {
    text-align: center;
  }
  .page {
    text-align: center;
    margin-top: 1rem;
    padding-bottom: 3rem;
  }
  .btn-primary {
    color: white;
    background-color: $primary;
  }
  .btn-accent {
    background-color: $accent;
    color: white;
  }
  .menu .active.item {
    background-color: $primary;
    border-color: $primary;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: white;
  }
  .main-segment {
    min-height: 70vh;
  }
  footer {
    height: 70px;
    background-color: $primary;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .align-left {
    text-align: left;
  }
  .spinner {
    color: $accent;
    opacity: 1;
  }
}
</style>
