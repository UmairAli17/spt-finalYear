var gulp = require('gulp'),
    useref = require('gulp-useref');
var sass = require('gulp-sass');
//inlcude browsersynv plugin
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var runSequence = require('run-sequence');


//Set up the server
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss') // Gets all files ending with .scss in src/scss
    .pipe(sass())
    .pipe(gulp.dest('src/styles'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
})

//Set up the concatination plugin
gulp.task('useref', function(){
  return gulp.src('src/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.scripts', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});


gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('src/scss/**/*.scss', ['sass']); 
  // Other watchers
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('src/*.html', browserSync.reload); 
  gulp.watch('src/scripts/**/*.scripts', browserSync.reload); 
});

//the following will run all the below tasks in the order they are written. items in [] will run in parallel
gulp.task('build', function (callback) {
  runSequence(['sass', 'fonts', /*'images',*/ 'useref'],
    callback
  )
})

//The following will run the tasks of compiling the sass, running the server and then running the watch tasks when you run "gulp" in the cli
gulp.task('default', function (callback) {
  runSequence('build', ['browserSync', 'watch'],
    callback
  )
})
