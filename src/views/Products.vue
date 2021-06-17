<template>
  <div class="container-xxl">
    <div class="row">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td style="width: 200px;">
              <div
                style="
                      height: 100px;
                      background-size: cover;
                      background-position: center;
                    "
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
              ></div>
            </td>
            <td>
              {{ item.title }}
            </td>
            <td>
              <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
              <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
              <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="openModal('detail', item)"
                >
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="$refs.detail.addToCart(item.id)"
                >
                  <font-awesome-icon
                    icon="spinner"
                    pulse
                    class="fas fa-spinner fa-pulse"
                    v-if="$refs.detail.loadingStatus == item.id"
                  ></font-awesome-icon>
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <detailComponent ref="detail" :product="tempProducts"></detailComponent>
    </div>
  </div>
</template>

<style lang="scss">
@import 'bootstrap';
</style>

<script>
import detailComponent from './Product.vue';

export default {
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      products: {},
      tempProducts: {},
      loadingStatus: '',
    };
  },
  methods: {
    getData() {
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/products`)
        .then((response) => {
          if (response.data.success) {
            // console.log(response.data.products);
            this.products = response.data.products;
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => console.log(error));
    },
    openModal(action, item) {
      if (action === 'detail') {
        this.tempProducts = { ...item };
        this.$refs.detail.openModal();
      }
    },
  },
  mounted() {
    this.getData();
  },
  components: { detailComponent },
};
</script>
