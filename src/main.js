import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import style from "./style.css";

createApp(App).use(store).use(router).use(style).mount("#app");
