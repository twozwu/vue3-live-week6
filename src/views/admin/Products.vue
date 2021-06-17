<template>
  <div class="container">
    <div class="text-end mt-4">
      <button type="button" class="btn btn-primary" @click="openModal('newItem')">
        建立新的產品
      </button>
    </div>
    <table class="table shadow mt-4 bg-light">
      <thead class="table mt-4 bg-info">
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120" class="text-end pe-5">
            原價
          </th>
          <th width="120" class="text-end pe-5">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-end pe-5">{{ product.origin_price }}</td>
          <td class="text-end pe-5">{{ product.price }}</td>
          <td>
            <span class="text-success" v-if="product.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('editItem', product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delItem', product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 分頁元件 -->
    <div class="d-flex justify-content-center">
      <pagination :pages="pagination" @emit-page="getData"></pagination>
    </div>
  </div>
  <!-- Modal -->
  <product-modal ref="productModal" @update="getData"></product-modal>

  <del-product-modal ref="delProductModal" @update="getData"></del-product-modal>
  <!-- Modal -->
</template>

<script>
import pagination from '../../components/admin/Pagination.vue';
import delProductModal from '../../components/admin/DelItem.vue';
import productModal from '../../components/admin/ProductModal.vue';

export default {
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      isNew: false,
      title: '',
      products: [],
      tempProducts: {
        imagesUrl: [],
      },
      pagination: {},
    };
  },
  components: { pagination, productModal, delProductModal },
  methods: {
    getData(page = 1) {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.axios.defaults.headers.common.Authorization = `${token}`;
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/admin/products?page=${page}`)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          } else {
            // alert(res.data.message);
            console.log(res.data);
          }
        })
        .catch((error) => console.log(error));
    },
    openModal(action, item) {
      if (action === 'newItem') {
        const title = '新增產品';
        this.$refs.productModal.openModal(action, title);
      } else if (action === 'editItem') {
        const title = '編輯產品';
        this.$refs.productModal.openModal(item, title);
      } else {
        this.$refs.delProductModal.openModal(item);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
