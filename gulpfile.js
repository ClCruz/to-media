// Include gulp
const gulp = require('gulp')

// Include gulp plugins
const images = require('gulp-image')
const imagemin = require('gulp-imagemin');
 
gulp.task('default', () =>
    gulp.src('evento/**/*')
        .pipe(imagemin({
          interlaced: true,
          progressive: true,
          svgoPlugins: [
              {
                  removeViewBox: true
              }
          ],
          verbose: true,
          quality: '70-90', // When used more then 70 the image wasn't saved
          speed: 1, // The lowest speed of optimization with the highest quality
          floyd: 1 // Controls level of dithering (0 = none, 1 = full).
        }))
        .pipe(gulp.dest('dist/images'))
);
