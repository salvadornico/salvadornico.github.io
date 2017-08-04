var gulp = require('gulp')
var browserSync = require('browser-sync')
var useref = require('gulp-useref')
var uglify = require('gulp-uglify')
var gulpIf = require('gulp-if')
var cssnano = require('gulp-cssnano')
var postcss = require('gulp-postcss')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('autoprefixer')
var imagemin = require('gulp-imagemin')
var cache = require('gulp-cache')
var del = require('del')
var runSequence = require('run-sequence')
var stylus = require('gulp-stylus')

gulp.task('watch', ['browserSync', 'styles-dev'], function() {
	gulp.watch('src/*.html', browserSync.reload)
	gulp.watch('src/css/*.styl', ['styles-dev'])
	gulp.watch('src/css/*.css', browserSync.reload)
	gulp.watch('src/js/*.js', browserSync.reload)
})

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	})
})

gulp.task('styles-dev', function () {
  return gulp.src('src/css/styles.styl')
    .pipe(stylus())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('src/css'))
})


gulp.task('build', function(callback) {
	runSequence(
		'clean:dist',
		'styles-dist',
		['useref', 'images', 'video', 'files'],
		callback
	)
})

gulp.task('clean:dist', function() {
	return del.sync('dist')
})

gulp.task('styles-dist', function() {
	return gulp.src('src/css/styles.styl')
		.pipe(sourcemaps.init())
    	.pipe(stylus({
      		compress: true
    	}))
		.pipe(postcss([ autoprefixer() ]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'))
})

gulp.task('useref', function() {
	return gulp.src('src/*.html')
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
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