// Clean files and folders
//
// grunt-relative-root: <https://github.com/hurrymaplelad/grunt-relative-root>

'use strict';

module.exports = {

    preview: {
        options: {
            root: '<%= path.preview %>'
        },
        files: [{
            expand: true,
            cwd: '<%= path.preview %>',
            src: ['*.css', '*.html'],
            dest: '<%= path.preview %>'
        }]
    }
};
