import Vue from "vue"
import Router from "vue-router"
import Body from "@/components/Body"
import Portfolio from "@/components/body-sections/Portfolio"

Vue.use(Router)

export default new Router({
	routes: [{
		path: "/",
		component: Body
	},
	{
		path: "/portfolio",
		component: Portfolio
	}
	]
})
