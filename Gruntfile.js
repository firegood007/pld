module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        less: {
            main: {
                expand: true,
                src: ['style/**/*.less'],
                ext: '.css'
            }

        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default',['less']);
}