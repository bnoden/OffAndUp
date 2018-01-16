const gulp = require('gulp');
const minify = require('gulp-minify');
const zip = require('gulp-zip');
const del = require('del');
const browserify = require('browserify');
const fs = require('fs');

const {
  change,
  currentVersion,
  previousVersion,
  versionUpdated
} = require('./dev/VersionNumber');

const versionChanged = versionUpdated();

// gulp change  -change version number
// gulp bundle  -bundle main source files
// gulp min   -minify resulting js file
// gulp zip   -zip files for distribution, delete previous zip files. Must change version number first

gulp.task('bundle', () => {
  browserify({
    entries: 'index.js',
    debug: false
  })
    .bundle()
    .pipe(fs.createWriteStream('dist/oau.js'));
});

gulp.task('min', function() {
  gulp
    .src('dist/oau.js')
    .pipe(
      minify({
        ext: {
          min: '.min.js'
        },
        ignoreFiles: ['.min.js'],
        noSource: true
      })
    )
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('oau_chrome/src'))
    .pipe(gulp.dest('oau_firefox/src'))
    .pipe(gulp.dest('oau_edge/src'));
});

gulp.task('change', function() {
  change('version.json');
});

gulp.task('zip', function() {
  if (versionUpdated()) {
    console.log('Version number must be changed before update');
  } else {
    del(['dist/*.zip', 'oau_chrome/zip/*', 'oau_firefox/zip/*', 'oau_edge/zip/*']);
    console.log(`Deleted ${previous}.zip`);
    gulp
      .src('oau_chrome/src/*')
      .pipe(zip(`${current}.zip`))
      .pipe(gulp.dest('dist'))
      .pipe(gulp.dest('oau_chrome/zip'))
      .pipe(gulp.dest('oau_firefox/zip'))
      .pipe(gulp.dest('oau_edge/zip'));
    console.log(`Created ${current}.zip`);
  }
});

const versionJSON = fs.readFileSync('version.json');
const versionData = JSON.parse(versionJSON);
const current = versionData.current;
const previous = versionData.previous;
