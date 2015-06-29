// Deploy over FTP
//
// grunt-ftp-deploy: <https://github.com/zonak/grunt-ftp-deploy>

'use strict';

module.exports = {

  dist: {
    auth: {
      host: 'teamsite01.rakuten.co.jp',
      port: 21,
      authKey: 'kakunin'
    },
    src: '<%= path.preview %>',
    dest: '<%= path.kakunin %>',
    exclusions: [
      '<%= path.dist %>/.git*',
      '<%= path.dist %>/**/.DS_Store',
      '<%= path.dist %>/**/Thumbs.db'
    ]
  }

};
