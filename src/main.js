import { createApp } from "vue";
import App from "./App.vue";
import "./styles/main.css";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount("#app");
