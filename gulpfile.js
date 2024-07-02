const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", () => {
  return gulp
    .src("./scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("watch", () => gulp.watch("scss/**/*.scss", gulp.series("sass")));
