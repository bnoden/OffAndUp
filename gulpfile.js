const gulp = require('gulp');
const minify = require('gulp-minify');
const browserify = require('browserify');
const zip = require('gulp-zip');
const replace = require('gulp-replace');
const fs = require('fs');

const { ChangeVersionNumber } = require('./dev/ChangeVersionNumber');

// minify: gulp min
// change version number: gulp change
// zip: gulp zip

gulp.task('bundle', () => {
  browserify({
    entries: 'index.js',
    debug: false
  })
    .bundle()
    .pipe(fs.createWriteStream('dest/bundle/oau.js'));
});

gulp.task('min', function() {
  gulp
    .src('dest/bundle/oau.js')
    .pipe(
      minify({
        ext: {
          min: '.min.js'
        },
        noSource: true
      })
    )
    .pipe(gulp.dest('dest/min/'))
    .pipe(gulp.dest('oau_chrome/src/'))
    .pipe(gulp.dest('oau_firefox/src/'))
    .pipe(gulp.dest('oau_edge/'));
});

gulp.task('change', function() {
  ChangeVersionNumber();
});

gulp.task('zip', function() {
  let version = current;
  gulp
    .src('./bundle/oau-bundle.js')
    .pipe(zip('oau_chrome_0_0_8.zip'))
    .pipe(gulp.dest('./oau_chrome/zip/'));
});
