import router from "@/router"
import store from "@/store/index"
import Vue from "vue"
import VueAnalytics from "vue-analytics"
import App from "./App.vue"
import config from "./config"

Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue()

Vue.use(VueAnalytics, {
	id: config.analyticsId,
	router,
	debug: {
		sendHitTask: process.env.NODE_ENV === "production",
	},
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app")
