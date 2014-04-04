module.exports = function(grunt) {

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({

        jshint: {
            files: "src/*.js"
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: "../dataDashAction"
                }
            }
        },


        qunit: {
            all: {
                options: {
                    urls: [
                        "http://localhost:9001/tests/base.html"
                    ]
                }
            }
        },

        uglify: {
            target: {
                files: {
                    src: 'src/**/*.js',
                    dest: 'dist/**/*.js'
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('travis', ['connect:server', 'qunit']);

};