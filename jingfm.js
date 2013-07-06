/**
 * Module dependencies.
 */
var exec = require('child_process').exec;
var getUrl = require('./lib/getUrl');
var request = require('request');
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
    console.log('正在打开！');
    var r = request(url);
    child = exec('mplayer ' + url, {
        maxBuffer: 2000*1024
    }, function(error, stdout, stderr) {
        console.log('播放完毕!！');
    });
}
