// ECT Templates
// grunt-ect: <https://bitbucket.org/2no/grunt-ect>

'use strict';

var grunt = require('grunt');

module.exports = {

    options: {
        // please comment out the following 2 lines if you want to change the ect's opening / closing tags
        // please refer to the bitbucket page for various opening / closing tags
        // open: '{{',
        // close: '}}'
    },

    // Compile markups
    main: {
        options: {
            root: '<%= path.markups %>',
            // Define global variables here or read JSON file.
            variables: grunt.file.readJSON('app/_data/variables.json')
        },
        expand: true,
        cwd: '<%= path.markups %>',
        src: [
            '**/*.ect',
            '!**/_*.ect'
        ],
        dest: '<%= path.tmp %>',
        ext: '.html'
    }

};
