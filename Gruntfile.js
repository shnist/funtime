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
					src: ['src/**', 'assets/**'],
					dest: 'dist/'
				}],
				exclude: options.defaultExcludes
			}
		},
		jade: {
			build: {
				options: {
					pretty: true,
					debug: true
				},
				files: [{
					expand: true,
					flatten: true,
					cwd: 'dist',
					src: 'src/templates/*.jade',
					dest: 'dist/',
					ext: '.html'
				}]
			}
		},
		watch: {
			files: ['src/**/*.js', 'src/**/*.jade', 'src/**/*.sass'],
			tasks: ['default']
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
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
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-ftp-deploy');

	// Default task(s).
	grunt.registerTask('default', ['clean', 'copy', 'jade']);
	grunt.registerTask('staging', ['clean', 'copy', 'jade', 'ftp-deploy:staging']);
	grunt.registerTask('staging', ['clean', 'copy', 'jade', 'ftp-deploy:production']);

};