import Vue from "vue"
import Router from "vue-router"
import Profile from "@/components/profile/Profile"
import Body from "@/components/profile/body-sections/Body"
import Portfolio from "@/components/profile/body-sections/portfolio/Portfolio"
import Skills from "@/components/profile/body-sections/Skills"

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			component: Profile,
			children: [
				{
					path: "/",
					component: Body,
				},
				{
					path: "/portfolio",
					component: Portfolio,
				},
				{
					path: "/skills",
					component: Skills,
				},
			],
		},
	],
})
