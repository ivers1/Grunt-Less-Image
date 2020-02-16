    module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                options: {
                        compress: true
                },
                
                files: {
                    'dist/css/style.css' : 'less/style.less'
                }
            }
        },
        cssmin: {
            minify: {
                src: 'dist/css/style.css',
                dest: 'dist/css/minified/style.min.less'
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'dist/css/minified/style.min.css', '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        imagemin: {
            jpgs: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['*.jpg/'],
                    dest: 'images/'
                }]
            }
        },
        watch: {
            css: {
                files: 'less/style.less',
                tasks: ['less', 'cssmin']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin'); 
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-imagemin');   
    grunt.registerTask('default', ['browserSync', 'imagemin', 'watch']);
}