<template>
  <div class="home page">
    <img id="logo" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>
<style lang="scss" scoped>
#logo {
  width: 100%;
  max-width: 300px;
  height: auto;
}
</style>
