import Vue from "vue"
import Router from "vue-router"
import Body from "@/components/Body"
import Portfolio from "@/components/body-sections/portfolio/Portfolio"
import Skills from "@/components/body-sections/Skills"

Vue.use(Router)

export default new Router({
	routes: [{
		path: "/",
		component: Body
	},
	{
		path: "/portfolio",
		component: Portfolio
	},
	{
		path: "/skills",
		component: Skills
	}
	]
})
