<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{ title }}</span>
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
            <div class="col-sm-4">
              <div class="form-group">
                <label for="imageUrl">主要圖片</label>
                <input
                  id="imageUrl"
                  v-model="products.imageUrl"
                  type="text"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                />
                <input
                  type="file"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                  ref="file"
                  @change="tempImg"
                />
                <img class="img-fluid" :src="products.imageUrl" />
              </div>
              <div class="mb-1">多圖新增</div>
              <div v-if="products.imagesUrl.length > 0">
                <div class="mb-1" v-for="(img, key) in products.imagesUrl" :key="key">
                  <div class="form-group">
                    <label for="imagesUrl">輸入圖片網址</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                      v-model="products.imagesUrl[key]"
                    />
                    <input type="file" class="form-control" ref="file" @change="tempImg" />
                    <!-- (2). 依序綁定(1)開出來的資料欄位 -->
                    <img class="img-fluid" :src="img" alt="" />
                  </div>
                </div>
                <div
                  v-if="
                    !products.imagesUrl.length || products.imagesUrl[products.imagesUrl.length - 1]
                  "
                >
                  <!--
                      1. !tempProducts.imagesUrl.length：長度為0是false的話讓他變成true
                      2. tempProducts.imagesUrl[tempProducts.imagesUrl.length - 1]：
                      抓陣列最後一個值，有值為true，沒值為false

                    -->
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="products.imagesUrl.push('')"
                  >
                    <!-- (1). push：本來沒有欄位，push一個空字串產生欄位 -->
                    新增圖片(in多圖)
                  </button>
                </div>
                <div v-else>
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="uploadImg"
                  >
                    上傳圖片(in多圖)
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="multiple"
                  >
                    自動產生圖片(in多圖)
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="products.imagesUrl.pop()"
                  >
                    刪除圖片
                  </button>
                </div>
              </div>
              <div v-else>
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="uploadImg('main')"
                >
                  上傳圖片(in主要圖片)
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="autoImg"
                >
                  自動產生圖片(in主要圖片)
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="addImg"
                >
                  新增圖片(in主要圖片)
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="products.title"
                />
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="products.category"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="products.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="products.origin_price"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="products.price"
                  />
                </div>
              </div>
              <hr />

              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="products.description"
                >
                </textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="products.content"
                >
                </textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    true-value="1"
                    false-value="0"
                    v-model="products.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="addItem">
            確認
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
      temp: {},
      modal: '',
      products: {
        imageUrl: '',
        imagesUrl: [],
        uploadImg: [],
      },
      title: '',
      isNew: false,
    };
  },
  methods: {
    addItem() {
      let api = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
      let http = 'post';

      if (!this.isNew) {
        api = `${this.apiUrl}/api/${this.apiPath}/admin/product/${this.products.id}`;
        http = 'put';
      }

      this.axios[http](api, { data: this.products })
        .then((res) => {
          // console.log(res);
          if (res.data.success) {
            alert(res.data.message);
            this.$emit('update');
            this.hideModal();
          } else {
            console.log(res.data.message);
            alert(res.data.message);
          }
        })
        .catch((error) => console.log(error));
    },
    addImg() {
      this.products.imagesUrl.push('');
    },
    autoImg() {
      this.products.imageUrl = 'https://picsum.photos/400';
      this.products.imagesUrl.push('');
      // console.log(this.products.imagesUrl.length);
    },
    multiple() {
      const key = this.products.imagesUrl.length - 1;
      //   console.log(key);
      if (this.products.imagesUrl[key] === '') {
        this.products.imagesUrl[key] = `https://picsum.photos/40${this.products.imagesUrl.length}`;
        this.products.imagesUrl.push('');
      } else {
        this.products.imagesUrl.push(`https://picsum.photos/40${this.products.imagesUrl.length}`);
      }
    },
    tempImg(e) {
      // 上傳前
      const { temp } = e.target.files[0];
      this.temp = temp;
    },
    clearFile() {
      this.$refs.file.value = null;
    },
    uploadImg() {
      let key = '';
      this.axios({
        method: 'POST',
        url: 'https://api.imgur.com/3/image',
        data: this.temp,
        headers: {
          Authorization: 'Client-ID d442039f04fbe67',
        },
        mimeType: 'multipart/form-data',
      })
        .then((res) => {
          if (res.data.success) {
            // console.log(res.data.data.link);
            if (key === 'main') {
              this.products.imageUrl = res.data.data.link;
              this.products.imagesUrl.push('');
            } else {
              key = this.products.imagesUrl.length - 1;
              this.products.imagesUrl[key] = res.data.data.link;
              this.products.imagesUrl.push('');
            }
            alert('上傳圖片成功');
            this.temp = {};
          } else {
            alert(res.data.data.error);
          }
        })
        .catch((e) => {
          alert(e.data.data.error);
        });
    },
    openModal(products, title) {
      if (products === 'newItem') {
        this.products = { imagesUrl: [] };
        this.title = title;
        this.isNew = true;
      } else {
        this.products = products;
        this.title = title;
        this.isNew = false;
      }
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.productModal);
  },
};
</script>
