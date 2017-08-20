import gulp        from 'gulp';
import browserify  from 'browserify';
import browserSync from 'browser-sync';
import babelify    from 'babelify';
import source      from 'vinyl-source-stream';
import paths       from '../config';

gulp.task('browserify', () => {
	return browserify('src/js/app.js')
		.transform('babelify')
		.bundle()
		.on('error', function(err) {
			console.error('Error: ' + err.message);
			this.emit('end');
		})
		.pipe(source('app.js'))
		.pipe(gulp.dest(paths.js_dist))
		.pipe(browserSync.stream());
});