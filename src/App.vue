<template>
  <NavBar />
  <div class="ui segment main-segment"><router-view /></div>
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

#app {
  max-width: 1100px;
  margin: auto;
  margin-top: 2rem;
  padding: 2%;

  .center-text {
    text-align: center;
  }
  .page {
    text-align: center;
    margin-top: 1rem;
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
}
</style>
