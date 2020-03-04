<template>
  <div class="home">
    <LoginComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from '@/components/LoginComponent.vue';

export default {
  name: 'Login',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LoginComponent,
  },
};
</script>
