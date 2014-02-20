module.exports = function (grunt) {
    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            builddoc: {
                options: {
                    stdout: true
                },
                command: 'pandoc'
            }
        },
        clean: {
            build: ["build"],
            release: ["release"]
        }
    });
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['shell']);
}