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
					cwd: 'src',
					src: '**',
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
				files: {
					'index.html': 'dist/templates/index.jade'
				}
			}
		},
		watch: {
			files: ['src/**/*.js', 'src/**/*.jade', 'src/**/*.sass'],
			tasks: ['build']
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('id_watch', 'watch');
	grunt.registerTask('build', ['clean', 'copy', 'jade']);

};