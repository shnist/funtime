module.exports = function(grunt) {

	var options = {
		defaultExcludes: [
			'.gitignore',
			'.project',
			'.settings',
			'README.markdown',
			'README.md',
			'.DS_Store',
			'.psd',
			'**/.git/**',
			'**/.svn/**',
			'**_notes',
			'**/.hg/**',
			'**/.idea/**'
		]
	};

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: {
				src: 'dist'
			}
		},
		copy: {
			build: {
				files: [{
					expand: true,
					src: ['src/**'],
					dest: 'dist/'
				}],
				exclude: options.defaultExcludes
			}
		},
		watch: {
			files: ['src/**/*.js'],
			tasks: ['default']
		},
		'ftp-deploy': {
			staging: {
				auth: {
					host: 'ftp.mandygodding.co.uk',
					port: 21,
					authKey: 'funTimeKey'
				},
				src:'dist',
				// .ftppass with details is needed (not included in repo)
				dest: '/htdocs/funtime/staging',
				exclusions: ['dist/.DS_Store', 'dist/Thumbs.db', 'dist/tmp', 'dist/.git']
			},
			production: {
				auth: {
					host: 'ftp.mandygodding.co.uk',
					port: 21,
					authKey: 'funTimeKey'
				},
				src:'dist',
				// .ftppass with details is needed (not included in repo)
				dest: '/htdocs/funtime/production',
				exclusions: ['dist/.DS_Store', 'dist/Thumbs.db', 'dist/tmp', 'dist/.git']
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-ftp-deploy');

	// Default task(s).
	grunt.registerTask('default', ['clean', 'copy']);
	grunt.registerTask('staging', ['clean', 'copy', 'ftp-deploy:staging']);
	grunt.registerTask('production', ['clean', 'copy', 'ftp-deploy:production']);

};