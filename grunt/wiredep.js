// Inject Bower components into source code
//
// grunt-wiredep: <https://github.com/stephenplusplus/grunt-wiredep>
// wiredep: <https://github.com/taptapship/wiredep>

'use strict';

module.exports = {

  markups: {
    src: ['<%= path.markups %>/**/*.ect'],
    exclude: ['bower_components/modernizr/modernizr.js'],
    // Force absolute URL
    // "../bower_components/xxxx" -> "/bower_components/xxxx"
    ignorePath: /(\.\.\/)*\.\.(?=\/)/
  },
  styles: {
    src: ['<%= path.styles %>/**/*.styl'],
    // Import from bower_components directory
    // "../bower_components/xxxx" -> "xxxx"
    ignorePath: /(\.\.\/)*bower_components\//
  }

};
