const {watch} = require('gulp');
//
// const watchers = () => {
//     watch('dist/scss/index.scss', (done) => {
//         console.log(`File index.scss has been changed`);
//
//         done();
//     });
// };  // there is the watcher for a file
//
// exports.watchers = watchers;


// const changeAllStylesFile = (done) => {
//     console.log(`Some file .scss has been changed`);
//
//     done();
// };
//
// const watchersFunc = () => {
//     watch('dist/**/*.scss', changeAllStylesFile);
// }; // there is another watcher for any files in any directories
//
// exports.watchers = watchersFunc;


const changeStylesFiles = (done) => {
    console.log(`File index.scss has been changed`);

    done();
}

const checkNestedComponents = (done) => {
    console.log(`File or directory in the project has been changed`);

    done();
}

const watchers = () => {
    watch('dist/scss/**/*.scss', {events: 'change'}, changeStylesFiles);
    watch('dist/scss/', {events: ['add', 'unlink', 'addDir', 'unlinkDir']}, checkNestedComponents);
}; // there is the watcher with different events for any files or directories

exports.watchers = watchers;
