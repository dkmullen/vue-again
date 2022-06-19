<template>
  <div class="about page">
    <h1>This is an about page</h1>
    <button class="ui button btn-primary" @click="signIn">Sign In</button>
    <button class="ui button btn-accent" @click="checkApi">Check Api</button>
    <button class="ui button btn-accent" @click="doSearch">Search</button>
    <div class="ui icon input">
      <input type="text" placeholder="Search..." />
      <i class="search icon" v-if="!loading"></i>
      <i class="spinner notched circle loading icon" v-if="loading"></i>
    </div>
    <form class="ui form">
      <BaseInput icon="coffee icon" label="Name" id="name" />
      <BaseInput icon="coffee icon" label="Email" id="email" type="email" />
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import * as auth from '../services/authService';
import BaseInput from '../components/baseComponents/BaseInput.vue';

export default {
  components: { BaseInput },
  setup() {
    let loading = ref(false);
    let token = ref(
      'eyJraWQiOiJ1WXd6MUpmRGhMa0h0Vkk2dXNCWEIySHpSVDU0UHFqXC9icVA1MGxMZXNWZz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmYzVjNmJlMi03ZmZlLTQzZGMtYjhhOC1lMDJmYTMyMDU5MzAiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfaElrS0VSTThWIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6ImNvd2JveSIsIm9yaWdpbl9qdGkiOiJhNzZlZjRiYS1kOGExLTQ0ODQtOTZlMy03MTJiNGE3NjU5ZDIiLCJhdWQiOiJscmcyZ2g2ZnR2c3QwYzc5YzIwc2g2YXM2IiwiZXZlbnRfaWQiOiJhMWNjZGE0Ny1iMGQzLTRhODAtYjE3My04NzJiNTU2NDNlN2MiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY1NDk2NDgzNiwicGhvbmVfbnVtYmVyIjoiKzE4NjU4OTgzMDkzIiwiZXhwIjoxNjU0OTY4NDM2LCJpYXQiOjE2NTQ5NjQ4MzYsImp0aSI6IjFiMTQxMjYxLWNmN2EtNGY3Yy1iOGNjLTgwNjg0OTc5MzNlMyIsImVtYWlsIjoiZGttdWxsZW5AZ21haWwuY29tIn0.s5Lv-OAycNZ6U-svFqnybRF4MFRIGll3OxLOt4IS4OniK5Zsp0tcCoyT3ZiWMGyMZ5BF3w0865GaJ0-_OZ2Cs7jPodUf8Sj6lIBbaSpmac3NLSl4d8iuBUqxoHjCem--rJKii_vQID1_AkvshKloRBUa58iNkKg_tTIDxDwA4rn_CB4PJO9LvGQWj0w5RvNnugqms5jwDTfSXRopBcTO3Dgo_8mGPO-fi3cvytAuDVl_1URyljzbX3bRT3UqRgGIpw9ZJp1_21VXsmM12Z2XfyOsgOFgqAFWuKB9OZc9mRLTLFZ1Uk-ufPl57AwV4DSA3Lwsrz5gJef1mgfhKCz0Lg'
    );

    function doSearch() {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    }
    function signIn() {
      console.log('Here we go');
      auth.signIn({ username: 'cowboy', password: 'Yadayada8*' });
    }
    function checkApi() {
      fetch('https://43dqjuh4td.execute-api.us-east-2.amazonaws.com/dev', {
        method: 'put',
        headers: new Headers({ Authorization: 'Bearer ' + token.value }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    return {
      loading,
      token,
      doSearch,
      signIn,
      checkApi,
    };
  },
};
</script>

<style lang="scss" scoped></style>
