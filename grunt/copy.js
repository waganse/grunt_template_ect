// Copy files and folders
//
// grunt-contrib-copy: <https://github.com/gruntjs/grunt-contrib-copy>

'use strict';

module.exports = {

  dist: {
    files: [
      // Static files
      {
        expand: true,
        dot: true,
        cwd: '<%= path.app %>',
        dest: '<%= path.dist %>',
        filter: 'isFile',   // Ignore empty folders.
        src: [
          '**',
          '!<%= path.distIgnore %>',
          '!**/*.jade',
          '!**/*.ect',
          '!**/.DS_Store',
          '!**/*.{css,js}'  // Ignore CSS and JavaScript because they are compiled in usemin task.
        ]
      },
      // Precompiled files
      {
        expand: true,
        cwd: '<%= path.tmp %>',
        dest: '<%= path.dist %>',
        src: [
          '**/*.html',
          'img/*.png',
          'fonts/*.{eot,woff,ttf,svg}',
          '!<%= path.distIgnore %>'
        ]
      }
    ]
  },

  preview: {
    files: [
      // Static files
      {
        expand: true,
        dot: true,
        cwd: '<%= path.app %>',
        dest: '<%= path.preview %>',
        filter: 'isFile',   // Ignore empty folders.
        src: [
          '**',
          '!<%= path.distIgnore %>',
          '!**/*.jade',
          '!**/*.ect',
          '!**/.DS_Store'
        ]
      },
      // Precompiled files
      {
        expand: true,
        cwd: '<%= path.tmp %>',
        dest: '<%= path.preview %>',
        src: [
          '**/*.html',
          'css/*.css',
          'img/*.png',
          'fonts/*.{eot,woff,ttf,svg}',
          '!<%= path.distIgnore %>'
        ]
      }
    ]
  }
};
