var gulp = require('gulp'),
    useref = require('gulp-useref');
//inlcude browsersynv plugin
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');


//Set up the server
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('src/styles'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
})

//Set up the concatination plugin
gulp.task('useref', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('src/scss/**/*.scss', ['sass']); 
  // Other watchers
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('src/*.html', browserSync.reload); 
  gulp.watch('src/scripts/**/*.js', browserSync.reload); 
});