import gulp from "gulp";

// Plugins
// const plumber = require("gulp-plumber");
// const fileInclude = require("gulp-file-include");
// const htmlmin = require("gulp-htmlmin");
// const size = require("gulp-size");

import plumber from "gulp-plumber";
import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import size from "gulp-size";

import path from "../config/path.js";
import app from "../config/app.js";

// Обработка HTML
const html = () => {
  return gulp.src(path.html.src)
    .pipe(plumber())
    .pipe(fileInclude())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size())
    .pipe(gulp.dest(path.html.dest));
};

// module.exports = html;
export default html
