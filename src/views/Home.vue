<template>
  <navComponent ref="abc"></navComponent>
  <router-view></router-view>
</template>

<style lang="scss">
@import 'bootstrap';
</style>

<script>
import navComponent from '../components/Nav.vue';

export default {
  components: { navComponent },
  mounted() {},
};
</script>
