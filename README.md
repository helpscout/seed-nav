# seed-nav [![npm version](https://badge.fury.io/js/seed-nav.svg)](https://badge.fury.io/js/seed-nav)

Nav component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-nav --save
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-nav');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-nav* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-nav/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-nav-namespace: c-nav !default;
$seed-nav-item-namespace: #{$seed-nav-namespace}__item !default;
$seed-nav-link-namespace: #{$seed-nav-namespace}__link !default;
$seed-nav-tabs-namespace: #{$seed-nav-namespace}--tabs !default;

// Configs
$seed-nav-link-padding: 16px 20px !default;
$seed-nav-link-disabled-color: #E3E8EB !default;

// Alignment
$seed-nav-alignment: (
  left: flex-start,
  center: center,
  right: flex-end,
) !default;

// Orientation
$seed-nav-orientation: (
  list: row,
  stacked: column,
) !default;

// Sizes
$seed-nav-sizes: (
  xs: 4px 8px,
  sm: 12px 16px,
  md: $seed-nav-link-padding,
) !default;
```
