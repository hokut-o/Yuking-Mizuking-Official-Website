import gulp        from 'gulp';
import browserSync from 'browser-sync';
import paths       from '../config';


gulp.task('bs-reload', () => {
  browserSync.reload();
});

gulp.task('watch', () => {
  gulp.watch(paths.js, ['browserify']);
  gulp.watch([paths.css,paths.html], ['bs-reload']);
});




