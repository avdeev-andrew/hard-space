﻿var gulp = require('gulp');
var concat = require('gulp-concat');
var path = require('path');
var ts = require('gulp-typescript');
var merge = require('merge2');

require('events').EventEmitter.prototype._maxListeners = 10;

var tsProject = ts.createProject('src/tsconfig.json');

const srcDir = './src';

gulp.task('clean', require('./tasks/clean')(gulp, srcDir));

gulp.task('build', () => {
	var tsResult = gulp.src('src/**/*.ts')
		.pipe(tsProject());

	return merge([
		//tsResult.dts.pipe(gulp.dest('build/definitions')),
		tsResult.js.pipe(gulp.dest('src'))
	]);
});

gulp.task('bundle', ['build'], () => {
	return gulp.src([
			'src/**/*.js'
	])
		.pipe(concat('bundle.js'))
		.pipe(gulp.dest('bundle'));
});