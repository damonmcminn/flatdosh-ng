import karma from 'gulp-karma';
import gulp from 'gulp';

export default function() {
  return gulp.src(['src/index.js', 'src/**/*.js'])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
}
