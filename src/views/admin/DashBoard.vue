<template>
  <div class="container text-center">
    <h1>你現在在後台頁面</h1>
    <div id="nav">
      <router-link to="/">回到前台</router-link> |
      <router-link to="/admin/products">後台產品列表</router-link> |
      <router-link to="/admin/orders">後台訂單</router-link> |
      <router-link to="/admin/coupons">優惠券列表</router-link> |
      <a href="#" @click.prevent="signout">登出</a>
    </div>
  </div>
  <router-view v-if="checkSuccess"></router-view>
</template>

<script>
export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        this.axios.defaults.headers.common.Authorization = `${token}`;

        const api = `${process.env.VUE_APP_API}/api/user/check`;
        this.axios.post(api, { api_token: this.token }).then((res) => {
          if (res.data.success) {
            this.checkSuccess = true;
          } else {
            this.checkSuccess = false;
            this.$router.push('/login');
          }
        });
      } else {
        alert('您尚未登入，請重新登入');
        this.$router.push('/login');
      }
    },
    signout() {
      document.cookie = 'hexToken=;expires=;';
      alert('token 已清除');
      this.$router.push('/login');
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
