<template>
  <div ref="cart" class="container">
    <!-- 購物車列表 -->
    <div class="text-end mt-5">
      <button
        class="btn btn-outline-danger"
        type="button"
        @click="clearCart"
        :disabled="!cartsLength"
      >
        <font-awesome-icon
          icon="spinner"
          pulse
          class="fas fa-spinner fa-pulse"
          v-if="loadingStatus == 'clear'"
        ></font-awesome-icon
        >清空購物車
      </button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th class="text-end">單價</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="carts.carts != 0">
          <tr v-for="item in carts.carts" :key="item.id">
            <td>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="delItem(item.id)">
                <font-awesome-icon
                  icon="spinner"
                  pulse
                  class="fas fa-spinner fa-pulse"
                  v-if="loadingStatus == item.id"
                ></font-awesome-icon>
                x
              </button>
            </td>
            <td>
              {{ item.product.title }}
              <div class="text-success" v-if="item.coupon">
                已套用優惠券
              </div>
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group mb-3">
                  <input
                    min="1"
                    type="number"
                    class="form-control"
                    v-model.number="item.qty"
                    :disabled="loadingStatus == item.id"
                    @blur="updateCart(item)"
                  />
                  <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
                </div>
              </div>
            </td>
            <td class="text-end">
              <small class="text-success">折扣價：{{ item.product.price }}</small>
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot v-if="carts.total != 0">
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ carts.total }}</td>
        </tr>
        <tr>
          <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">{{ carts.final_total }}</td>
        </tr>
      </tfoot>
    </table>
    <div v-if="carts.total == 0" class="text-center">
      <p>購物車為空</p>
    </div>
    <div class="my-5 row justify-content-center">
      <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required|min:8|max:10"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger" :disabled="!cartsLength">
            <font-awesome-icon
              icon="spinner"
              pulse
              class="fas fa-spinner fa-pulse"
              v-if="loadingStatus == 'submit'"
            ></font-awesome-icon
            >送出訂單
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiUrl: process.env.VUE_APP_API,
      apiPath: process.env.VUE_APP_PATH,
      carts: {},
      qty: 1,
      loadingStatus: '',
      cartsLength: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    getCart() {
      this.emitter.emit('navGetCart');
    },
    updateCart(data) {
      this.loadingStatus = data.id;
      const cart = {
        product_id: data.product_id,
        qty: data.qty,
      };
      const url = `${this.apiUrl}/api/${this.apiPath}/cart/${data.id}`;
      this.axios
        .put(url, { data: cart })
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message);
            this.loadingStatus = '';
            this.getCart();
          } else {
            alert(response.data.message);
            this.loadingStatus = '';
          }
        })
        .catch((error) => console.log(error));
    },
    clearCart() {
      this.loadingStatus = 'clear';
      const url = `${this.apiUrl}/api/${this.apiPath}/carts`;
      this.axios
        .delete(url)
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message);
            this.getCart();
            this.loadingStatus = '';
          } else {
            alert(response.data.message);
            this.loadingStatus = '';
          }
        })
        .catch((error) => console.log(error));
    },
    delItem(id) {
      this.loadingStatus = id;
      const url = `${this.apiUrl}/api/${this.apiPath}/cart/${id}`;
      this.axios
        .delete(url)
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message);
            this.loadingStatus = '';
            this.getCart();
          } else {
            alert(response.data.message);
            this.loadingStatus = '';
          }
        })
        .catch((error) => console.log(error));
    },
    createOrder() {
      this.loadingStatus = 'submit';
      if (this.cartsLength <= 0) {
        alert('購物車為空，請下單完再送出唷');
        return;
      }
      const url = `${this.apiUrl}/api/${this.apiPath}/order`;
      const order = this.form;
      this.axios
        .post(url, { data: order })
        .then((response) => {
          if (response.data.success) {
            alert(`${response.data.message}，謝謝惠顧。`);
            this.$refs.form.resetForm();
            this.loadingStatus = '';
            this.getCart();
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.emitter.on('cartsGetData', (carts) => {
      if (carts) {
        this.carts = carts;
        this.cartsLength = carts.carts.length;
      }
    });
  },
  mounted() {
    this.getCart();
  },
};
</script>
