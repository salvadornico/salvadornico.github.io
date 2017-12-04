const cloudinaryLink =
	"https://res.cloudinary.com/salvadornico/image/upload/v1507347645/Portfolio"

export default {
	get(file, path = "") {
		return path
			? `${cloudinaryLink}/${path}/${file}`
			: `${cloudinaryLink}/${file}`
	}
}
