import * as flsFunctions from './modules/webp-supports.js'
import * as header from './modules/header.js'
import sliders from './modules/sliders.js'
import timeline from './modules/timeline.js'
import meetTeam from './modules/meetTeam.js'
import subPageSlider from './modules/sub-page.js'
import { dropdawnTranslateFrom } from './modules/getquote.js'

flsFunctions.isWebp()
header.collapse()
sliders()

try {
	timeline()
} catch (error) {
	console.warn()
}

try {
	meetTeam()
} catch (error) {
	console.warn()
}

try {
	subPageSlider()
} catch (error) {
	console.warn()
}

dropdawnTranslateFrom()
