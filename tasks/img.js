import gulp from "gulp";

// Plugins
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";
import plumber from "gulp-plumber";
import newer from "gulp-newer";
import size from "gulp-size";

import path from "../config/path.js";
import app from "../config/app.js";

const img = () => {
  return gulp.src(path.img.src)
      .pipe(plumber())
      .pipe(newer(path.img.dest))
      .pipe(
        imagemin([
          gifsicle({ interlaced: true }),
          mozjpeg({ quality: 75, progressive: true }),
          optipng({ optimizationLevel: 5 }),
          svgo({
            plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
            ],
          }),
        ])
      )
      .pipe(size())
      .pipe(gulp.dest(path.img.dest))
};

export default img;
