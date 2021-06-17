<template>
  <div class="container text-center">
    <h1 class="m-5">This is an coupons page</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">日期</th>
          <th scope="col">優惠項目</th>
          <th scope="col">折數</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ dateParse(item.due_date) }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="coupons">目前無優惠券</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      coupons: {},
    };
  },
  methods: {
    getCoupons(page = 1) {
      this.axios
        .get(`${this.apiUrl}/api/${this.apiPath}/admin/coupons?page=${page}`)
        .then((response) => {
          if (response.data.success) {
            // console.log(response.data.products);
            this.coupons = response.data.coupons;
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getCoupons();
  },
};
</script>
