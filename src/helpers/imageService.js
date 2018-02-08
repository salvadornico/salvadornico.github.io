export default {
	get: (file, path = "", thumb = false) => {
		const baseUrl = thumb
			? "http://res.cloudinary.com/salvadornico/image/upload/c_fill,g_north,h_200,w_200/v1507347618/Portfolio"
			: "https://res.cloudinary.com/salvadornico/image/upload/v1507347645/Portfolio"

		return path ? `${baseUrl}/${path}/${file}` : `${baseUrl}/${file}`
	},
}
