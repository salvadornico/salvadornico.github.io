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

const paths = {
	views: {
		srcIn: 'src/views',
		srcOut: 'src',
		dist: 'dist',
	},
	styles: {
		src: 'src/styles',
		dist: 'dist/styles',
	},
	scripts: {
		srcIn: 'src/js/src',
		srcOut: 'src/js',
		dist: 'dist/js',
	}
}

gulp.task('watch', ['browserSync', 'styles-dev', 'views-dev', 'scripts-dev'], () => {
	gulp.watch(`${paths.views.srcIn}/**/*.pug`, ['views-dev'])
	gulp.watch(`${paths.views.srcOut}/*.html`, browserSync.reload)
	gulp.watch(`${paths.styles.src}/**/*.styl`, ['styles-dev'])
	gulp.watch(`${paths.styles.src}/*.css`, browserSync.reload)
	gulp.watch(`${paths.scripts.srcIn}/*.js`, ['scripts-dev'])
	gulp.watch(`${paths.scripts.srcOut}/*.js`, browserSync.reload)
})

gulp.task('browserSync', () => {
	browserSync.init({
		server: {
			baseDir: paths.views.srcOut
		}
	})
})

gulp.task('views-dev', () => {
	return gulp.src(`${paths.views.srcIn}/*.pug`)
		.pipe(pug())
		.pipe(prettify({
			indent_inner_html: true,
			indent_size: 4
		}))
		.pipe(gulp.dest(paths.views.srcOut))
})

gulp.task('styles-dev', () => {
	return gulp.src(`${paths.styles.src}/styles.styl`)
		.pipe(stylus())
		.pipe(postcss([ autoprefixer() ]))
		.pipe(gulp.dest(paths.styles.src))
})

gulp.task('scripts-dev', () => {
	return gulp.src(`${paths.scripts.srcIn}/*.js`)
		.pipe(babel())
		.pipe(concat('all.js'))
		.pipe(gulp.dest(paths.scripts.srcOut))
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
		paths.views.dist,
		`${paths.views.srcOut}/*.html`,
		`${paths.styles.src}/*.css`,
		`${paths.scripts.srcOut}/*.js`
	])
})

gulp.task('styles-dist', () => {
	return gulp.src(`${paths.styles.src}/*.styl`)
	.pipe(stylus({
		compress: true
	}))
	.pipe(postcss([ autoprefixer() ]))
	.pipe(gulp.dest(paths.styles.dist))
})

gulp.task('views-dist', () => {
	return gulp.src(`${paths.views.srcIn}/*.pug`)
	.pipe(pug())
	.pipe(gulp.dest(paths.views.dist))
})

gulp.task('scripts-dist', () => {
	return gulp.src(`${paths.scripts.srcIn}/*.js`)
		.pipe(babel())
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths.scripts.dist))
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
