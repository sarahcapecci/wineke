var path = require('path');

var stylesheetsDir = 'css/';

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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
					'dev/styles/style.css': stylesheetsDir + 'style.scss'   
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
				src: 'dev/styles/style.css'
			}
		},
		//minifies the file and saves in dep/style folder
		cssmin: {
		  minify: {
		    expand: true,
		    cwd: 'dev/styles/',
		    src: ['*.css', '!*.min.css'],
		    dest: 'dep/style/',
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
			    files: 'dev/css/*.scss', //where to watch
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
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//default task grunt will run...
	grunt.registerTask('default', ['jshint','sass','autoprefixer','watch']);

};