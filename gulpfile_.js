var path = require('path');
var lr = require('tiny-lr');
var server = lr();
var gulp = require('gulp');
var gutil = require('gulp-util');
var spawn = require('gulp-spawn-shim');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var plumb = require('gulp-plumber');
var ignore = require('gulp-ignore');
var livereload = require('gulp-livereload');
var src_docs = './html/';
var dest_docs = './markdown/';

server.listen(35729);

gulp.task('default', function () {

    var opts = {};
    opts.cmd = 'pandoc';
    opts.args = [];
    opts.args.push('--atx-headers');
    opts.args.push('--columns=10000');
    opts.args.push('-f');
    opts.args.push('html');
    opts.args.push('-t');
    opts.args.push('markdown');

    var magic = function (file, opts, cb) {
        var _from = path.join(__dirname, src_docs);
        var _to = path.join(__dirname, dest_docs);
        return cb(file, opts);
    };
    watch({glob: path.join(src_docs, '**/*.html') })
        .on('error', gutil.log)
        .pipe(plumb())
        .pipe(ignore({isDirectory: true})).on('data', function (file) {
            gutil.log('filepath:' + file.path);
            file.orig_path = file.path;
        })
        .pipe(spawn(opts, magic)).on('failure', gutil.log).on('data', function(data){
            gutil.log(data);
        })
        .pipe(rename({ext: ".md"}))
        .pipe(gulp.dest(dest_docs)).on('data', function (file) {
                if (!file.path)
                    return;
                var
                    abs_path_to = path.normalize(__dirname + '/' + file.path),
                    to = path.normalize(dest_docs + '/' + path.relative(__dirname + '/' + src_docs, abs_path_to)),
                    from = path.relative(__dirname, file.orig_path);
                gutil.log("Compiled '" + from + "' to '" + to + "'");

            })
        .pipe(livereload(server));

});
