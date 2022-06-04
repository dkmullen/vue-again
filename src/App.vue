<template>
  <NavBar />
  <router-view />
</template>
<script>
// eslint-disable-next-line prettier/prettier
import NavBar from './components/NavBar.vue';
export default {
  components: { NavBar },
};
</script>

<style lang="scss">
$primary: #0f3a4b;
$accent: #518c8c;

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
    color: $accent;
    border-color: $accent;
  }
}
</style>
