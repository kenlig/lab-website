import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueToast, { position: "top-right" })
  .mount("#app");
