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
#app {
  max-width: 1100px;
  margin: auto;
  margin-top: 2rem;

  .center-text {
    text-align: center;
  }
  .page {
    text-align: center;
    margin-top: 1rem;
  }
}
</style>
