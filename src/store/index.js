import Vue from "vue"
import Vuex from "vuex"
import defaultState from "./defaultState"

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: defaultState,
	getters: {
		projects: state => state.projects,
		skills: state => state.skills,
		inspirations: state => state.inspirations,
		things: state => state.things,
	},
})
