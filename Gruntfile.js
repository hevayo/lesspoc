module.exports = function(grunt) {
  grunt.initConfig({
    shell: {
        multiple: {
            command: [
               'bower install',
               'rm -rf public/*',
               'mv bower_components/** public/',
               'rm -rf bower_components'
            ].join('&&')
        }
    },  
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          "css/main.css": "less/main.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  //grunt.registerTask('default', ['watch']);
  grunt.registerTask('default', ['shell']);
};
