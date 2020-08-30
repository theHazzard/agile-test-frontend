import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import panZoom from "vue-panzoom";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;
Vue.use(panZoom);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: "../dots.gif",
  attempt: 1
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
