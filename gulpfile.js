const gulp = require('gulp')
const gulpStylus = require('gulp-stylus')
const browserSync = require('browser-sync')

gulp.task("css", function() {
  return gulp.src('./resource/resource.styl')
    .pipe(gulpStylus())
    .pipe(gulp.dest('./style/'));
})

gulp.task("default", function(){
  browserSync.init({
      server: {
          baseDir: "./"
      }
  })

  gulp.watch("resource/*.styl", ['css'])
  gulp.watch("style/*.css").on("change", browserSync.reload)
  gulp.watch("*.html").on("change", browserSync.reload)
})
