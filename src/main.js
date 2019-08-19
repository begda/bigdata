import Vue from "vue";
import ElementUI from 'element-ui';
import App from "./App.vue";
import router from "./router";
import store from "./store";


import './assets/css.less';
import '../theme/index.css';
// import begdaEcharts from './components/echarts'
// import begdaPanel from './components/panel'
// import aaa from './components/函数组件/abc'

import beadf from './components/index'

// Vue.component("hszj",aaa)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false;
// Vue.use(begdaEcharts)
Vue.use(beadf)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
