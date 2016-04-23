var gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  react = require('gulp-react');
  gutil = require('gulp-util'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  es6ify = require('es6ify'),
  reactify = require('reactify');

var path = {
  HTML: 'src/index.html',
  ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
  JS: ['reactfiles/*.js', 'reactfiles/**/*.js'],
  MINIFIED_OUT: 'build.min.js',
  DEST_SRC: 'output',
  DEST_BUILD: 'dist/build',
  DEST: 'dist'
};

// gulp.task('transform', function() {
//   console.log('here')
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
// gulp.task('browserify', bundle);

// var bundler = browserify({
//       entries: ['./reactfiles/app.js'],
//       transform: [reactify], //Convert JSX to normal JS
//       debug: true, //Sourcemapping
//       cache: {}, packageCache: {}, fullPaths: true //Required by watchify
//     }),
//     watcher = watchify(bundler);

var bundler = browserify({
                entries: ['./reactfiles/app.jsx'],
                // debug: true, //Sourcemapping
                // cache: {}, packageCache: {}, fullPaths: true //Required by watchify)
              })
              .transform(reactify)
              .transform(es6ify.configure(/.jsx/));

var watcher = watchify(bundler);


function bundle() {
  return watcher.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('reactApp.jsx'))
    // .pipe(buffer()) //put back in for production
    // .pipe(uglify()) //put back in for production
    .pipe(gulp.dest('./app/assets/javascripts/'));
}

gulp.task('browserify', bundle);

watcher.on('update', function() {
  var start = Date.now(), end;
  bundle();
  end = Date.now();
  gutil.log('[browserify]', 'rebundle took ', gutil.colors.cyan(end - start + ' ms'));        
});


//   return watcher
//   .on('update', function() {
//     var start = Date.now();
    
//     watcher.bundle()
//     .pipe(source('reactApp.js'))
//     .pipe(buffer())
//     .pipe(uglify())
//     //add uglifying here
//     .pipe(gulp.dest('./app/assets/javascripts/'));

    
//     gutil.log('[browserify]', 'rebundle took ', gutil.colors.cyan(end - start + ' ms'));        

//   })
//   .bundle()
//   .on('error', console.error.bind(console))
//   .pipe(source('reactApp.js'))
//   .pipe(gulp.dest('./app/assets/javascripts/'));
// })

gulp.task('default', ['browserify']);

// gulp.task('browserify', function () {
//   var bundler = browserify({
//     entries: ['./reactfiles/app.js'],
//     transform: [reactify], //Convert JSX to normal JS
//     debug: true, //Sourcemapping
//     cache: {}, packageCache: {}, fullPaths: true //Required by watchify
//   });
//   var watcher = watchify(bundler);

//   return watcher
//   .on('update', function() {
//     var start = Date.now();
    
//     watcher.bundle()
//     .pipe(source('reactApp.js'))
//     .pipe(buffer())
//     .pipe(uglify())
//     //add uglifying here
//     .pipe(gulp.dest('./app/assets/javascripts/'));

//     var end = Date.now();
//     gutil.log('[browserify]', 'rebundle took ', gutil.colors.cyan(end - start + ' ms'));        

//   })
//   .bundle()
//   .on('error', console.error.bind(console))
//   .pipe(source('reactApp.js'))
//   .pipe(gulp.dest('./app/assets/javascripts/'));
// })

// gulp.task('default', ['browserify']);