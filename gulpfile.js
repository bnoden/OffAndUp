const gulp = require('gulp');
const minify = require('gulp-minify');
const browserify = require('browserify');
const zip = require('gulp-zip');
const replace = require('gulp-replace');
const fs = require('fs');

const { ChangeVersionNumber } = require('./dev/ChangeVersionNumber');

gulp.task('bundle', () => {
  browserify({
    entries: 'index.js',
    debug: false
  })
    .bundle()
    .pipe(fs.createWriteStream('./bundle/oau-bundle.js'));
});

gulp.task('compress', function() {
  gulp
    .src('bundle/oau-bundle.js')
    .pipe(
      minify({
        ext: {
          min: '.min.js'
        }
      })
    )
    .pipe(gulp.dest('./oau_chrome/'));
});

gulp.task('version', function() {
  ChangeVersionNumber();
})

// gulp.task('zip', function() {
//   let version = current;
//   gulp
//     .src('src/*')
//     .pipe(zip('oau_chrome/oau_chrome_0_0_8.zip'))
//     .pipe(gulp.dest('oau_chrome'));
// });
