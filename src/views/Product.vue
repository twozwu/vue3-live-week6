<template>
  <div
    class="modal fade"
    id="detailComponent"
    tabindex="-1"
    role="dialog"
    aria-labelledby="detailComponentLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>{{ product.title }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <img class="img-fluid" :src="product.imageUrl" alt="" />
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill">{{ product.category }}</span>
              <p>商品描述：{{ product.description }}</p>
              <p>商品內容：{{ product.content }}</p>
              <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
              <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
              <div>
                <div class="input-group d-flex align-items-center">
                  <label for="qty" class="">數量：</label
                  ><input
                    type="number"
                    class="form-control"
                    id="qty"
                    v-model.number="qty"
                    min="1"
                    placeholder="數量"
                  />
                  <button type="button" class="btn btn-primary" @click="addToCart(product.id, qty)">
                    <font-awesome-icon
                      icon="spinner"
                      pulse
                      class="fas fa-spinner fa-pulse"
                      v-if="loadingStatus == product.id"
                    ></font-awesome-icon
                    >加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['product'],
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      qty: 1,
      loadingStatus: '',
      modal: '',
    };
  },
  methods: {
    addToCart(id, qty = 1) {
      // console.log(id);
      this.loadingStatus = id;
      const cart = {
        product_id: id,
        qty,
      };
      const url = `${this.apiUrl}/api/${this.apiPath}/cart`;
      this.axios
        .post(url, { data: cart })
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message);
            this.loadingStatus = '';
            this.emitter.emit('navGetCart'); // 呼叫cart的getCart方法
          } else {
            alert(response.data.message);
            this.loadingStatus = '';
          }
        })
        .catch((error) => console.log(error));
    },
    openModal() {
      this.qty = 1;
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal, {
      keyboard: true,
      backdrop: true,
    });
  },
};
</script>
