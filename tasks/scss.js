import gulp from "gulp";

// Plugins
import plumber from "gulp-plumber";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import sassGlob from "gulp-sass-glob";

const sass = gulpSass(dartSass);

import path from "../config/path.js";
import app from "../config/app.js";

const scss = () => {
  return gulp.src(path.scss.src)
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(path.scss.dest))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(gulp.dest(path.scss.dest));
};

export default scss;
