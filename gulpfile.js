var gulp = require('gulp');
var pandoc = require('gulp-pandoc');

gulp.task('default', function() {
    gulp.src('html/*.html')
        .pipe(pandoc({
            from: 'html',
            to: 'markdown',
            ext: '.md',
            args: ['--atx-headers','--columns=10000']
        }))
        .pipe(gulp.dest('markdown/'));
});