const {src, dest} = require('gulp');
const fileInclude = require('gulp-file-include');

function html() {
 return src('./src/*.html')
 .pipe(fileInclude())
 .pipe(dest('.'));
}

exports.html = html; 