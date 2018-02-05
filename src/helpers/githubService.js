import { getJson } from "./utils"

export const githubService = {
	get() {
		return getJson(
			"https://api.github.com/users/salvadornico/repos?sort=pushed&page=1&per_page=5"
		)
	},
}
