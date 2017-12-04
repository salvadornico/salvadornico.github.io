import _ from "lodash"

const apiLink = "http://127.0.0.1:5000"

export default {
	getSkills() {
		const data = fetch(`${apiLink}/skills`)
			.then(response => response.json())
			.then(data => {
				return _.groupBy(data.result, item => item.category)
			})
		return data
	},

	getThings() {
		const data = fetch(`${apiLink}/things`)
			.then(response => response.json())
			.then(data => {
				return data.result
			})
		return data
	}
}
