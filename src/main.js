import { createApp } from "vue";
import App from "./App.vue";
import "./styles/main.css";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount("#app");
AOS.init({
  duration: 600,
});
