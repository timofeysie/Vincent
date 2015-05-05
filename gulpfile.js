var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var todo = require('gulp-todo');

// base folders
var src = './app/';
var dest = 'build/';

// This came with the ngMaterial seed
gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});

// create the min.js file
gulp.task('scripts', function() {
    return gulp.src(src+'**/*.js')
      .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
      	.pipe(gulp.dest(dest+'js'));
});

// add scss to the mix
var sass = require('gulp-ruby-sass');
 gulp.task('sass', function() {
    return sass(src+'assets/scss/style.scss', {style: 'compressed'})
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(dest+'css'));
});

 // reduce imgae size (don't really need this...)
 var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
 gulp.task('images', function() {
  return gulp.src(src+'assts/png/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('build/img'));
});

// The Watch
gulp.task('watch', function() {
  gulp.watch(src+'**/*.js', ['scripts']);
  gulp.watch(src+'assets/scss/style.scss', ['sass']);
  gulp.watch(src+'assts/png/**/*', ['images']);
 });

// generate a todo.md from javascript files 
// TODO: <-- in this format, not @TODO
gulp.task('todo', function() {
    gulp.src(src+'**/*.js')
        .pipe(todo())
        .pipe(gulp.dest('./'));
        //  will output TODO.md
});


// Default Task
gulp.task('default', ['scripts', 'sass', 'images', 'watch', 'todo']);

