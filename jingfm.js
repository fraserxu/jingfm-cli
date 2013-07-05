/**
 * Module dependencies.
 */
var exec = require('child_process').exec;
var getUrl = require('./lib/getUrl');
var child;

// Get options from node process
var options = process.argv;
// Note: http://nodejs.org/api/process.html#process_process_argv
console.log('尝试登录到 Jing.fm ...');
getUrl(options[2], options[3], options[4]).then(function(url) {
    play(url);
}, function(err) {
    console.log(err);
});

/**
 * Open the song in the browser
 *
 * @param  {[string]} url
 */
function play(url) {
    child = exec('open ' + url + '?start=0', function(error, stdout, stderr) {
        console.log('享受音乐吧!');
    });
}
