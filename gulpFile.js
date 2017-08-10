var gulp = require('gulp')
var browserSync = require('browser-sync')
var pug = require('gulp-pug')
var useref = require('gulp-useref')
var uglify = require('gulp-uglify')
var gulpIf = require('gulp-if')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var imagemin = require('gulp-imagemin')
var cache = require('gulp-cache')
var del = require('del')
var runSequence = require('run-sequence')
var stylus = require('gulp-stylus')
var prettify = require('gulp-prettify')
var htmlmin = require('gulp-htmlmin')

gulp.task('watch', ['browserSync', 'styles-dev', 'views-dev'], function() {
	gulp.watch('src/views/**/*.pug', ['views-dev'])
	gulp.watch('src/*.html', browserSync.reload)
	gulp.watch('src/styles/**/*.styl', ['styles-dev'])
	gulp.watch('src/styles/*.css', browserSync.reload)
	gulp.watch('src/js/*.js', browserSync.reload)
})

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	})
})

gulp.task('views-dev', function() {
	return gulp.src('src/views/*.pug')
	.pipe(pug())
	.pipe(prettify({
		indent_inner_html: true,
		indent_size: 4
	}))
	.pipe(gulp.dest('src'))
})

gulp.task('styles-dev', function() {
  return gulp.src('src/styles/styles.styl')
    .pipe(stylus())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('src/css'))
})


gulp.task('build', function(callback) {
	runSequence(
		'clean-dist',
		['styles-dist','views-dist', 'images', 'video', 'files'],
		['clean-src', 'views-minify'],
		callback
	)
})

gulp.task('clean-dist', function() {
	return del.sync('dist')
})

gulp.task('styles-dist', function() {
	return gulp.src('src/styles/*.styl')
	.pipe(stylus({
		compress: true
	}))
	.pipe(postcss([ autoprefixer() ]))
	.pipe(gulp.dest('dist/styles'))
})

gulp.task('views-dist', function() {
	return gulp.src('src/views/*.pug')
	.pipe(pug())
	.pipe(prettify())
	.pipe(useref())
	.pipe(gulpIf('*.js', uglify()))
	.pipe(gulp.dest('dist'))
})

gulp.task('views-minify', function() {
	return gulp.src('dist/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist'))
})

gulp.task('images', function() {
	return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
	.pipe(cache(imagemin({
		interlaced: true
	})))
	.pipe(gulp.dest('dist/images'))
})

gulp.task('video', function() {
	return gulp.src('src/images/*.mp4')
	.pipe(gulp.dest('dist/images'))
})

gulp.task('files', function() {
	return gulp.src('src/files/**/*')
	.pipe(gulp.dest('dist/files'))
})

gulp.task('clean-src', function() {
	return del.sync(['src/*.html', 'src/styles/*.css'])
})