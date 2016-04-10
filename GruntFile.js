
module.exports = function (grunt)
{
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: "\n\n"
            },
            dist: {
                src: ['src/resources/js/**/*.js'],
                dest: 'dev-dist/js/bundle.js'
            },
            deps: {
                src: [
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/angularjs/angular.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                ],
                dest: 'dev-dist/js/<%= pkg.name %>-deps.js'
            },
            css: {
                src: ['bower_components/bootstrap/dist/css/bootstrap.min.css',
                        'dev-dist/css/style.css'
                ],
                dest: 'dev-dist/css/bundle.css'
            },
            move: {
                src: ['bower_components/angularjs/angular.min.js.map'],
                dest: 'dev-dist/js/angular.min.js.map'
            }
        },

        sass: {
            dev: {
                files: {
                    'dev-dist/css/style.css': 'src/resources/css/styles.scss'
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/resources/js/**/*.js'],
                tasks: ['concat:dist']
            },
            styles: {
                files: ['src/resources/css/*.scss'],
                tasks: ['sass','concat:css']
            }
        }
    });

    //npm tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ngdocs');

    //tasks
    grunt.registerTask('default', 'Default Task Alias', ['build']);

    grunt.registerTask('build', 'Build the application',
        ['sass:dev','concat'
        ]);
}