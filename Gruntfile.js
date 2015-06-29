// Grunt base configuration
//
// This Gruntfile.js is based on "load-grunt-config" module.
// Config files are separated and put into `grunt/` directory.
// load-grant-config: <https://github.com/firstandthird/load-grunt-config>

'use strict';

module.exports = function (grunt) {

  // Display the execution time.
  require('time-grunt')(grunt);

  // Initialize with "load-grunt-config".
  require('load-grunt-config')(grunt, {

    // Define variables for grunt config here.
    config: {
      path: {
        app:        'app',
        dist:       'dist',
        distIgnore: '**/_*/**',     // Excluded directories or files of distribution, e.g. Sass directory.
        preview:       'preview',
        tmp:        '.tmp/dist',
        markups:    'app',
        styles:     'app/_stylus',
        scripts:    'app/js',
        images:     'app/img',
        sprites:    'app/img/_sprites',
        glyphs:     'app/img/_glyphs',
        html:       '.tmp/dist',
        css:        '.tmp/dist/css',
        js:         'app/js',
        kakunin:    '/default/main/kakunin.rakuten/all/WORKAREA/00-PUBLIC/htdocs/rakuten/swd/html5/personal/yossy/ect_template',
      }
    }

  });

  // Load additional plugins.
  grunt.loadNpmTasks('main-bower-files');

};
