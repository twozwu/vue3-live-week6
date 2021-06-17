import { createApp } from 'vue';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
// 匯入 vee-validate 主套件
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// 匯入 vee-validate 相關規則
import AllRules from '@vee-validate/rules';
// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n';
// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import mitt from './methods/mitt';
import date from './methods/functions';
import App from './App.vue';
import router from './router';

// 匯入全部規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');

// fontAwesome
library.add(faSpinner, faUserSecret);

const app = createApp(App);
app.use(router);
app.use(BootstrapIconsPlugin);
app.use(VueAxios, axios);

app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.config.globalProperties.emitter = mitt;
app.config.globalProperties.dateParse = date;
app.component('font-awesome-icon', FontAwesomeIcon);
app.config.productionTip = true;
app.mount('#app');
