module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: 'index.html',
        dest: 'dist/index.html'
      }
    },
    uglify: {
      'dist/main.js': 'main.js'
    },
    cssmin: {
      'dist/layout.css': 'public/layout.css'
    }
  });

   grunt.loadNpmTasks('grunt-contrib-htmlmin');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify']);
};

