import Vue from "vue"
import Vuex from "vuex"
import defaultState from "./defaultState"
import { githubService } from "../helpers/githubService"

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		...defaultState,
		repos: [],
	},
	getters: {
		projects: state => state.projects,
		skills: state => state.skills,
		inspirations: state => state.inspirations,
		things: state => state.things,
		repos: state => state.repos,
	},
	mutations: {
		fetchRepos: (state, repos) => {
			state.repos = repos
		},
	},
	actions: {
		fetchRepos: async context => {
			context.commit("fetchRepos", await githubService.get())
		},
	},
})
