<template>
  <div class="container">
    <table class="table shadow mt-4 bg-light text-center">
      <thead>
        <tr>
          <td>訂單時間</td>
          <td>留言</td>
          <td>是否付款</td>
          <td>購買商品</td>
          <td>購買金額</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orderList" :key="item.id">
          <td>
            {{ dateParse(item.create_at) }}
          </td>
          <td>{{ item.message }}</td>
          <td>{{ item.is_paid ? '是' : '否' }}</td>
          <td>
            <p v-for="product in item.products" :key="product.id">
              {{ product.product.title }}*{{ product.qty }}
            </p>
          </td>
          <td>{{ item.total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      orderList: {},
      pagination: {},
    };
  },
  methods: {
    getList(page = 1) {
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/admin/orders?page=${page}`)
        .then((res) => {
          if (res.data.success) {
            this.orderList = res.data.orders;
            this.pagination = res.data.pagination;
          } else {
            // alert(res.data.message);
            console.log(res.data);
          }
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
