import gulp from "gulp";
import browserSync from "browser-sync";

import path from "./config/path.js";
import app from "./config/app.js";

// Tasks

import html from "./tasks/html.js";
import scss from "./tasks/scss.js";
import js from "./tasks/js.js";
import img from "./tasks/img.js";
import fonts from "./tasks/fonts.js";
import clear from "./tasks/clear.js";

// Server
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

// Watch
const watcher = () => {
  gulp.watch(path.html.watch, html).on("all", browserSync.reload);
  gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
  gulp.watch(path.js.watch, js).on("all", browserSync.reload);
  gulp.watch(path.img.watch, img).on("all", browserSync.reload);
  gulp.watch(path.fonts.watch, fonts).on("all", browserSync.reload);
};

const build = gulp.series(clear, gulp.parallel(html, scss, js, img, fonts));

const dev = gulp.series(build, gulp.parallel(watcher, server));

export { html };
export { scss };
export { js };
export { img };
export { fonts };

export default app.isProd ? build : dev;
