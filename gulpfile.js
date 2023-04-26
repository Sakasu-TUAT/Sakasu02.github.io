const { src, dest, watch } = require('gulp');
const ts = require('./ts/node_modules/gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

function compileTS() {
  return src('ts/**/*.ts')
    .pipe(tsProject())
    .js.pipe(dest('ts/'));
}

exports.default = function() {
  watch('ts/**/*.ts', compileTS);
}
