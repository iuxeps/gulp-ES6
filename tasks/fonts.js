import gulp from "gulp";

// Plugins
import plumber from "gulp-plumber";
import newer from "gulp-newer";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

import path from "../config/path.js";
import app from "../config/app.js";

const fonts = () => {
  return gulp.src(path.fonts.src)
    .pipe(plumber())
    .pipe(newer(path.fonts.dest))
    .pipe(fonter(app.fonter))
    .pipe(gulp.dest(path.fonts.dest))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.fonts.dest));
};

export default fonts;
