import Vue from "vue"
import Component from "vue-class-component"

const getPath = (file: string, path = ""): string =>
	path ? `/${path}/${file}` : `/${file}`

enum ImageSize {
	Regular = "reg",
	Thumb = "thumb",
}

namespace ImageSize {
	const urls = {
		[ImageSize.Regular]:
			"https://res.cloudinary.com/salvadornico/image/upload/v1507347645/Portfolio",
		[ImageSize.Thumb]:
			"http://res.cloudinary.com/salvadornico/image/upload/c_fill,g_north,h_200,w_200/v1507347618/Portfolio",
	}

	export const getUrl = (size: ImageSize): string => urls[size]
}

@Component
export class ImageService extends Vue {
	mixinValue = "Hello"

	imgLink(
		file: string,
		path: string = "",
		size: ImageSize = ImageSize.Regular,
	): string {
		let url = ImageSize.getUrl(size)

		return url + getPath(file, path)
	}
}
