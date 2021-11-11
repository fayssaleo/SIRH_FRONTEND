import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from "bootstrap-vue";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import VCalendar from "v-calendar";
import VueTheMask from "vue-the-mask";

import "@/scss/main.scss";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//const VueUploadComponent = require("vue-upload-component");
library.add(faUserSecret);

//Vue.component("file-upload", VueUploadComponent);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: "vc",
});
Vue.use(VueTheMask);

new Vue({
  router,
  store,
  vuetify,
  VCalendar,
  render: (h) => h(App),
}).$mount("#app");
