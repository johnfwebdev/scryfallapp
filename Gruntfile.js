module.exports = function (grunt) {
  require('jit-grunt')(grunt);
    grunt.initConfig({
      concat: {
        js: {
          src: ['src/js/**/*.js'],
          dest: 'dist/assets/js/index.js'
        }
      },
      watch: {

      }
    })
    grunt.registerTask('default', [
      'grunt-contrib-concat'
    ])
}