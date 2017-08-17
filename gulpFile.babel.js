'use strict'

import gulp from 'gulp'
import browserSync from 'browser-sync'
import pug from 'gulp-pug'
import prettify from 'gulp-prettify'
import stylus from 'gulp-stylus'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import runSequence from 'run-sequence'
import del from 'del'
import imagemin from 'gulp-imagemin'
import cache from 'gulp-cache'

const viewPaths = {
	srcIn: 'src/views',
	srcOut: 'src',
	dist: 'dist',
}
const stylePaths = {
	src: 'src/styles',
	dist: 'dist/styles',
}
const scriptPaths = {
	srcIn: 'src/js/src',
	srcOut: 'src/js',
	dist: 'dist/js',
}

gulp.task('watch', ['browserSync', 'styles-dev', 'views-dev', 'scripts-dev'], () => {
	gulp.watch(`${viewPaths.srcIn}/**/*.pug`, ['views-dev'])
	gulp.watch(`${viewPaths.srcOut}/*.html`, browserSync.reload)
	gulp.watch(`${stylePaths.src}/**/*.styl`, ['styles-dev'])
	gulp.watch(`${stylePaths.src}/*.css`, browserSync.reload)
	gulp.watch(`${scriptPaths.srcIn}/*.js`, ['scripts-dev'])
	gulp.watch(`${scriptPaths.srcOut}/*.js`, browserSync.reload)
})

gulp.task('browserSync', () => {
	browserSync.init({
		server: {
			baseDir: viewPaths.srcOut
		}
	})
})

gulp.task('views-dev', () => {
	return gulp.src(`${viewPaths.srcIn}/*.pug`)
		.pipe(pug())
		.pipe(prettify({
			indent_inner_html: true,
			indent_size: 4
		}))
		.pipe(gulp.dest(viewPaths.srcOut))
})

gulp.task('styles-dev', () => {
	return gulp.src(`${stylePaths.src}/styles.styl`)
		.pipe(stylus())
		.pipe(postcss([ autoprefixer() ]))
		.pipe(gulp.dest(stylePaths.src))
})

gulp.task('scripts-dev', () => {
	return gulp.src(`${scriptPaths.srcIn}/*.js`)
		.pipe(babel())
		.pipe(concat('all.js'))
		.pipe(gulp.dest(scriptPaths.srcOut))
})


gulp.task('build', (callback) => {
	runSequence(
		['cleanup'],
		['styles-dist','views-dist', 'scripts-dist', 'images', 'video', 'files'],
		callback
	)
})

gulp.task('cleanup', () => {
	return del.sync([
		viewPaths.dist,
		`${viewPaths.srcOut}/*.html`,
		`${stylePaths.src}/*.css`,
		`${scriptPaths.srcOut}/*.js`
	])
})

gulp.task('styles-dist', () => {
	return gulp.src(`${stylePaths.src}/*.styl`)
	.pipe(stylus({
		compress: true
	}))
	.pipe(postcss([ autoprefixer() ]))
	.pipe(gulp.dest(stylePaths.dist))
})

gulp.task('views-dist', () => {
	return gulp.src(`${viewPaths.srcIn}/*.pug`)
	.pipe(pug())
	.pipe(gulp.dest(viewPaths.dist))
})

gulp.task('scripts-dist', () => {
	return gulp.src(`${scriptPaths.srcIn}/*.js`)
		.pipe(babel())
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest(scriptPaths.dist))
})

gulp.task('images', () => {
	return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
	.pipe(cache(imagemin({
		interlaced: true
	})))
	.pipe(gulp.dest('dist/images'))
})

gulp.task('video', () => {
	return gulp.src('src/images/*.mp4')
	.pipe(gulp.dest('dist/images'))
})

gulp.task('files', () => {
	return gulp.src('src/files/**/*')
	.pipe(gulp.dest('dist/files'))
})
