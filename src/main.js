// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"

Vue.config.productionTip = false

Vue.prototype.$cloudinaryLink =
	"https://res.cloudinary.com/salvadornico/image/upload/v1507347645/Portfolio"
Vue.prototype.$eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: {
		App
	}
})
