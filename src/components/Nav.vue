<template>
  <nav ref="nav" class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <h2 class="navbar-brand">
        購物列表
      </h2>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/cart">購物車</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">後台</router-link>
          </li>
          <li class="nav-item">
            <span class="nav-link" @click="test" tabindex="-1" aria-disabled="true"
              >emitter測試</span
            >
          </li>
        </ul>
      </div>
      <i class=" position-relative">
        <b-icon-cart2
          class="navbar-brand fs-1 navbar-expand"
          onclick="location.href = '#/cart'"
          style="cursor: pointer;"
        ></b-icon-cart2
        ><span
          class="bg-danger position-absolute top-20 start-50
            translate-middle fs-7 d-inline-block badge rounded-pill"
          v-if="cartsLength != ''"
          >{{ cartsLength }}</span
        >
      </i>
    </div>
  </nav>
</template>

<style lang="scss">
.rem2 {
  width: 1.5rem;
}

.top-20 {
  top: 20%;
}

.fs-7 {
  font-size: 0.5rem;
}
</style>

<script>
export default {
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      carts: {},
      cartsLength: '',
    };
  },
  methods: {
    getCart() {
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/cart`)
        .then((response) => {
          if (response.data.success) {
            this.carts = response.data.data;
            this.cartsLength = this.carts.carts.length;
            this.sendData();
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => console.log(error));
    },
    getLength(length) {
      this.cartsLength = length;
    },
    test() {
      console.log(this.emitter);
      console.log(this.$refs);
    },
    sendData() {
      this.emitter.emit('cartsGetData', this.carts);
      // console.log(this.cartsLength);
    },
  },
  created() {
    // this.emitter.on('getLength', (length) => this.getLength(length));
    this.emitter.on('navGetCart', () => this.getCart());
    this.emitter.on('navSendData', () => this.sendData());
  },
  mounted() {
    this.getCart();
  },
};
</script>
