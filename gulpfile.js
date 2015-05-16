/**
 * Created by ryanspears on 17/05/15.
 */
var karma = require('gulp-karma');
var gulp = require('gulp');

var testFiles = [];

gulp.task('specTests:run', function () {
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        })).on('error', function (err) {
            console.log(err);
            this.emit('end');
        });
});
