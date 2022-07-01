import * as flsFunctions from './modules/webp-supports.js'
import * as header from './modules/header.js'
import sliders from './modules/sliders.js'
import timeline from './modules/timeline.js'
// import runningLine from './modules/runningLine.js'
import subPageSlider from './modules/sub-page.js'

flsFunctions.isWebp()
header.collapse()
sliders()
// runningLine()

try {
	timeline()
} catch (error) {
	console.warn()
}

try {
	subPageSlider()
} catch (error) {
	console.warn()
}
