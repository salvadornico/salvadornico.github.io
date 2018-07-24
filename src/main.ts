import router from "@/router"
import store from "@/store/index"
import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue()

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app")
