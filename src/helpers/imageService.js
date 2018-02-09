const baseUrl =
	"https://res.cloudinary.com/salvadornico/image/upload/v1507347645/Portfolio"
const baseThumbUrl =
	"http://res.cloudinary.com/salvadornico/image/upload/c_fill,g_north,h_200,w_200/v1507347618/Portfolio"

const getPath = (file, path = "") => (path ? `/${path}/${file}` : `/${file}`)

export default {
	get: (file, path = "") => baseUrl + getPath(file, path),
	getThumb: (file, path = "") => baseThumbUrl + getPath(file, path),
}
