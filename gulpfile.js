var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var open = require('gulp-open');
var concat = require('gulp-concat');

var filesToConcatanate = [];
filesToConcatanate.push('src/Framework/AbstractModules/Connection/connection-channels-and-messages.ts');
filesToConcatanate.push('src/PockeyEntryPoint/pockey-server.ts');

gulp.task('default', function () {
    gulp.start('defaultMain');

    gulp.start('defaultApp');
});

gulp.task('concatenateToApp', function() {
    return gulp.src(filesToConcatanate)
        .pipe(concat('index.ts'))
        .pipe(gulp.dest(''));
});

gulp.task('defaultMain', function () {
    gulp.start('deleteMainJS');
    return gulp.src('src/PockeyEntryPoint/**/*.ts')
        .pipe(sourcemaps.init()) // This means sourcemaps will be generated
        .pipe(ts({
            outFile: 'main.js',
            sourceMap: true,
            target: "es5",
            // noImplicitAny: false,
            removeComments: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('out/'));
});


gulp.task('deleteMainJS', function () {
    return del([
        'out/main.js', 'out/main.js.map',
    ]);
});

gulp.task('defaultApp', function () {
    gulp.start('concatenateToApp');
    gulp.start('deleteAppJS');
    return gulp.src('index.ts')
        .pipe(sourcemaps.init()) // This means sourcemaps will be generated
        .pipe(ts({
            // outFile: 'index.js',
            sourceMap: true,
            target: "es2016",
            noImplicitAny: false,
            removeComments: true,
            module: "commonjs",
            strict: true,
            strictFunctionTypes: false

        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});

gulp.task('deleteAppJS', function () {
    return del([
        'index.js', 'index.js.map',
    ]);
});

// Default usage:
// Open one file with default application


gulp.task('launchIndex', function(){
    gulp.src(__filename)
        .pipe(open({uri: 'http://localhost:5000'}));
});