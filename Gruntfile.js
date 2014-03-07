module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ["dist", '.tmp'],

        copy: {
            main: {
                expand: true,
                cwd: 'app/',
                src: ['**', '!js/**', '!lib/**', '!**/*.css'],
                dest: 'dist/'
            }
        },

        rev: {
            files: {
                src: ['dist/**/*.{js,css}', '!dist/js/shims/**']
            }
        },

        useminPrepare: {
            html: 'app/index.html'
        },

        usemin: {
            html: ['dist/index.html']
        },

        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        },

        shell: {
            serve: {
                command: "node ./scripts/web-server.js",
                options: {
                    stdout: true
                }
            },
            e2e: {
                command: "./scripts/e2e-test.sh",
                options: {
                    stdout: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-shell');

    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', [
        'copy', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'rev', 'usemin'
    ]);

    grunt.registerTask('serve', ['shell:serve']);
    grunt.registerTask('test', ['shell:e2e']);
};
