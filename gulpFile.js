var gulp = require('gulp')
var browserSync = require('browser-sync')
var useref = require('gulp-useref')
var uglify = require('gulp-uglify')
var gulpIf = require('gulp-if')
var cssnano = require('gulp-cssnano')
var imagemin = require('gulp-imagemin')
var cache = require('gulp-cache')
var del = require('del')
var runSequence = require('run-sequence')

gulp.task('watch', ['browserSync'], function() {
	gulp.watch('app/*.html', browserSync.reload)
	gulp.watch('app/css/*.css', browserSync.reload)
	gulp.watch('app/js/*.js', browserSync.reload)
})

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	})
})


gulp.task('build', function(callback) {
	runSequence('clean:dist',
		['useref', 'images', 'video', 'files'],
		'autoprefixer',
		callback
	)
})

gulp.task('useref', function() {
	return gulp.src('app/*.html')
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'))
})

gulp.task('autoprefixer', function() {
	var postcss = require('gulp-postcss')
	var sourcemaps = require('gulp-sourcemaps')
	var autoprefixer = require('autoprefixer')

	return gulp.src('dist/css/*.css')
		.pipe(sourcemaps.init())
		.pipe(postcss([ autoprefixer() ]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'))
})

gulp.task('images', function() {
	return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
		.pipe(cache(imagemin({
			interlaced: true
		})))
		.pipe(gulp.dest('dist/images'))
})

gulp.task('video', function() {
	return gulp.src('app/images/*.mp4')
		.pipe(gulp.dest('dist/images'))
})

gulp.task('files', function() {
	return gulp.src('app/files/**/*')
		.pipe(gulp.dest('dist/files'))
})

gulp.task('clean:dist', function() {
	return del.sync('dist')
})