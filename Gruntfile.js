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
				src:'src',
				// .ftppass with details is needed (not included in repo)
				dest: '/htdocs/funtime/staging',
				exclusions: ['src/.DS_Store', 'src/Thumbs.db', 'src/tmp', 'src/.git']
			},
			production: {
				auth: {
					host: 'ftp.mandygodding.co.uk',
					port: 21,
					authKey: 'funTimeKey'
				},
				src:'src',
				// .ftppass with details is needed (not included in repo)
				dest: '/htdocs/funtime/production',
				exclusions: ['src/.DS_Store', 'src/Thumbs.db', 'src/tmp', 'src/.git']
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ftp-deploy');

	// Default task(s).
	grunt.registerTask('staging', ['ftp-deploy:staging']);
	grunt.registerTask('production', ['ftp-deploy:production']);

};