import gulp from "gulp";

// Plugins
import plumber from "gulp-plumber";
// import uglify from "gulp-uglify";
import babel from "gulp-babel";
import webpack from "webpack-stream";
import concat from "gulp-concat";

import path from "../config/path.js";
import app from "../config/app.js";

const js = () => {
  return gulp.src(path.js.src)
      .pipe(plumber())
      .pipe(babel())
      .pipe(webpack(app.webpack))
      // .pipe(uglify())
      .pipe(concat("main.js"))
      .pipe(gulp.dest(path.js.dest))
};

export default js;
