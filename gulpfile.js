import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'
// Импорт задач
import { copy } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { scss } from './gulp/tasks/scss.js'
import { js, vuejs } from './gulp/tasks/js.js'
import { images } from './gulp/tasks/images.js'
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js'
import { svgSprite } from './gulp/tasks/svgSprite.js'
import { server } from './gulp/tasks/server.js'
import { zip } from './gulp/tasks/zip.js'
import { ftp } from './gulp/tasks/ftp.js'

global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path,
	gulp,
	plugins,
}

// Наблюдатель за проектом
function watcher(params) {
	gulp.watch(path.watch.files, copy)
	gulp.watch(path.watch.html, html)
	gulp.watch(path.watch.scss, scss)
	gulp.watch(path.watch.js, js)
	gulp.watch(path.watch.js, vuejs)
	gulp.watch(path.watch.images, images)
}

export { svgSprite }

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

const mainTasks = gulp.series(
	fonts,
	gulp.parallel(copy, html, scss, js, vuejs, images),
)

// Построение сценариев
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZIP = gulp.series(reset, mainTasks, zip)
const deployFTP = gulp.series(reset, mainTasks, ftp)

export { dev }
export { build }
export { deployZIP }
export { deployFTP }

// Сценарий по умолчанию
gulp.task('default', dev)
