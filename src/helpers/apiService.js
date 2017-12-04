import _ from "lodash"

const apiLink = "http://127.0.0.1:5000"

function flashErrorToast(error) {
	console.warn(error)
	Materialize.toast("Unable to reach server, try again", 3000)
}

export default {
	getSkills() {
		return fetch(`${apiLink}/skills`)
			.then(response => response.json())
			.then(data => {
				return _.groupBy(data.result, item => item.category)
			})
			.catch(error => {
				flashErrorToast(error)
			})
	},

	getThings() {
		return fetch(`${apiLink}/things`)
			.then(response => response.json())
			.then(data => data.result)
			.catch(error => {
				flashErrorToast(error)
			})
	}
}
