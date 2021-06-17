<template>
  <div class="container mt-5">
    <Form class="row justify-content-center" v-slot="{ errors }" @submit="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>

        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <Field
            type="email"
            id="email"
            name="信箱"
            class="form-control"
            placeholder="Email address"
            v-model="user.username"
            autofocus
            :class="{ 'is-invalid': errors['信箱'] }"
            rules="email|required"
          />
          <error-message name="信箱" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <Field
            type="password"
            id="inputPassword"
            name="密碼"
            class="form-control"
            v-model="user.password"
            placeholder="Password"
            :class="{ 'is-invalid': errors['密碼'] }"
            rules="required"
          />
          <error-message name="密碼" class="invalid-feedback"></error-message>
        </div>

        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http.post(api, this.user).then((response) => {
        if (response.data.success) {
          const { token, expired } = response.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          this.$router.push('/admin/products');
        } else {
          alert(response.data.message);
        }
      });
    },
  },
};
</script>
