// var gulp = require('gulp'),
//   concat = require('gulp-concat'),
//   uglify = require('gulp-uglify'),
//   react = require('gulp-react'),
//   htmlreplace = require('gulp-html-replace');

// var path = {
//   HTML: 'src/index.html',
//   ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
//   JS: ['src/js/*.js', 'src/js/**/*.js'],
//   MINIFIED_OUT: 'build.min.js',
//   DEST_SRC: 'dist/src',
//   DEST_BUILD: 'dist/build',
//   DEST: 'dist'
// };

// console.log('here i am');

// gulp.task('transform', function() {
//   gulp.src(path.JS)
//     .pipe(react())
//     .pipe(gulp.dest(path.DEST_SRC));
// });

// gulp.task('copy', function() {
//   gulp.src(path.HTML)
//     .pipe(gulp.dest(path.DEST));
// });

// gulp.task('watch', function() {
//   gulp.watch(path.ALL, ['transform', 'copy']);
// });

// gulp.task('default', ['watch']);