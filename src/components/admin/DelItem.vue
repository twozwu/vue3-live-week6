<template>
  <div
    id="delProductModal"
    ref="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ product.title }}</strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delItem">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      modal: '',
      product: {},
    };
  },
  methods: {
    delItem() {
      this.axios
        .delete(`${this.apiUrl}/api/${this.apiPath}/admin/product/${this.product.id}`)
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message);
            this.$emit('update');
            // this.products = {};    props裡的資料不能更改
          } else {
            console.log(res.data.message);
            alert(res.data.message);
          }
          this.hideModal();
        })
        .catch((error) => console.log(error));
    },
    openModal(product) {
      this.product = product;
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.delProductModal);
  },
};
</script>
