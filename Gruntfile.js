module.exports = function(grunt) {
	grunt.initConfig({
		jsdoc: {
			dist : {
            src: ['lib/**/*.js'],
            options: {
                destination: 'doc'
            }
        }
		}
	});

	grunt.loadNpmTasks('grunt-jsdoc');


	grunt.registerTask('document', ['jsdoc']);
};
