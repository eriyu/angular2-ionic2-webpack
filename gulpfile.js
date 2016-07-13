var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var imageResize = require('gulp-image-resize');
var clean = require('gulp-clean');

gulp.task('sprite', function () {
  var spriteSource = gulp.src(['./app/images/sprite','./app/theme/app.sprites.scss']);
  spriteSource.pipe(clean());
  var spriteData = gulp.src('./app/images/sprite-source/*.png')
    .pipe(spritesmith({
      retinaSrcFilter: './app/images/sprite-source/*@2x.png',
      imgName: 'sprite.png',
      retinaImgName: 'sprite@2x.png',
      imgPath:'../images/sprite/sprite.png',
      retinaImgPath:'../images/sprite/sprite@2x.png',
      cssName: 'app.sprites.scss',
      cssFormat:'css'
    }));
  spriteData.img.pipe(gulp.dest('./app/images/sprite'));
  spriteData.css.pipe(gulp.dest('./app/theme/'));
});