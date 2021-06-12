import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import installElementPlus from "./plugins/element";//引入element
import installFontAwesome from "./plugins/fontAwesome"//引入图标库

// //引入图标库
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)

const app = createApp(App);
// app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store).use(router).use(installElementPlus).use(installFontAwesome).mount("#app");