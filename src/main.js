import * as Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueTailwind from "vue-cli-plugin-tailwind";

// Import our custom CSS
import "./assets/tailwind.css";

axios.defaults.baseURL = "http://localhost:5045/api/v1";

const user = {
  name: localStorage.getItem("name"),
  email: localStorage.getItem("email"),
  token: localStorage.getItem("token"),
  isAdmin: localStorage.getItem("isAdmin")
};
if (user.email && user.token) {
  store.commit("setUser", user);
}

const app = Vue.createApp(App);
app.use(createPinia());
app.use(VueAxios, axios);
app.use(router);
app.use(store);
app.use(VueTailwind);
app.mount("#app");
