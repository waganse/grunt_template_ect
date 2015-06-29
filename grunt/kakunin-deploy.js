// grunt-kakunin-deploy: <https://git.rakuten-it.com/users/shinsuke.a.yamada/repos/grunt-kakunin-deploy/browse>

'use strict';

module.exports = {

    preview: {
        authKey: 'kakunin',
        subject: 'ect_template',
        dest: '<%= path.kakunin %>'
    }

};
