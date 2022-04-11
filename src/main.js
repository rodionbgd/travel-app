import { createApp } from "vue";
import App from "@/App.vue";
import AppLink from "@/components/AppLink.vue";

import router from "@/router";

const app = createApp(App);

app.use(router).component("AppLink", AppLink).mount("#app");
