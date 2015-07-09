'use strict';

var gulp = require( 'gulp' );
var mocha = require( 'gulp-mocha' );
var istanbul = require( 'gulp-istanbul' );
var exec = require( 'child_process' ).exec;

var testFiles = 'test/**/*.js';
var srcFiles = 'src/**/*.js';
var allFiles = [ testFiles, srcFiles ];

gulp.task( 'test', function( done ) {
  gulp.src( srcFiles )
    .pipe( istanbul() )
    .pipe( istanbul.hookRequire() )
    .on( 'finish', function() {
      gulp.src( allFiles )
      .pipe( mocha() )
      .on( 'error', done )
      .pipe( istanbul.writeReports() )
      .on( 'end', done );
    });
});

gulp.task( 'default', [ 'test' ], function() {
  gulp.watch( allFiles, [ 'test' ] );
});