/// <binding />
module.exports = function (grunt) {    
    grunt.initConfig({
        clean:['build'],
        typescript: {           
            dev: {
                src: ['Scripts/**/*.ts'],
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3                
                    sourceMap: true,
                    declaration: false,                  
                }
            },
            prod: {
                src: ['Scripts/**/*.ts'],
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3                
                    sourceMap: false,
                    declaration: false
                }
            }
        },
        webpack: {
            dev: require("./dev-webpack.config.js"),
            prod: require("./prod-webpack.config.js")
        },
        watch: {
            scripts: {
                files: ['Scripts/**/*.{ts,html}',],
                tasks: ['newer:typescript:dev', 'webpack:dev'],
                options: {
                    spawn: false,
                },
            }
        }
    });   
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');
    grunt.registerTask('dev', ['clean','typescript:dev','webpack:dev']);
    grunt.registerTask('prod', ['clean','typescript:prod', 'webpack:prod']);
};