module.exports = function(grunt) {
	grunt.initConfig({
		jsdoc: {
			dist : {
                src: ['README.md', 'lib/**/*.js'],
                options: {
                    destination: 'doc'
                }
            }
		},
        browserify: {
          options: {
            browserifyOptions: {
               standalone: 'gpx-parse'
            }
          },
          dist: {
            src: 'index.js',
            dest: 'dist/gpx-parse-browser.js',
            options: {
              alias: [
                // Mockup to avoid loading lib-cov/gpx-parse in the browserify build process
                './browserify-mock.js:./lib-cov/gpx-parse'
              ]
            }
          }
        }
	});

	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-browserify');


	grunt.registerTask('document', ['jsdoc']);
};
