var path = require('path');

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 8000, //run on port 8000
					hostname: 'localhost',
					open: true //open browser
				}
			}
		},
		//lint my jS
		jshint: {
			all: 'dev/js/*.js'
		},
		//compile Sass
		sass: { // Task                              
			dist: { // Target  
				options: { // Target options
					style: 'expanded'
				},
				files: {   // Dictionary of files
					'dep/styles/style.css': 'dev/styles/style.scss'   
					// 'destination': 'source'
				}
			}
		},
		//autoprefix CSS
		autoprefixer: {
			options: {
				cascade: true
			},
			single_file: {
				src: 'dep/styles/style.css'
			}
		},
		//minifies the file and saves in dep/style folder
		cssmin: {
		  minify: {
		    expand: true,
		    cwd: 'dev/styles/',
		    src: ['*.css', '!*.min.css'],
		    dest: 'dep/styles/',
		    ext: '-min.css'
		  }
		},
		//uglyfies the file and saves in dep/js folder
	    uglify: {
	        my_target: {
	          files: [{
	              expand: true,
	   			  cwd: 'dev/js/',
	              src: '*.js',
	              dest: 'dep/js/',
	              ext: '-min.js'
	          }]
	        }
	    },
		//watch file changes and recompile if necessary
		watch: {
			css: {//task
			    files: 'dev/styles/*.scss', //where to watch
			    tasks: ['sass','autoprefixer', 'cssmin'], 
			    options: {
			      livereload: true
			    }
			},
			javascript: {
				files: 'dev/js/*.js',
				tasks: ['jshint', 'uglify'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//default task grunt will run...
	grunt.registerTask('default', ['jshint', 'connect', 'sass','autoprefixer','watch']);

};