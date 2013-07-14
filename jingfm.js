/**
 * Module dependencies.
 */
var exec = require('child_process').exec;
var getUrl = require('./lib/getUrl');
var clc = require('cli-color');
var child;

// Get options from node process
var options = process.argv;
// Note: http://nodejs.org/api/process.html#process_process_argv
console.log('尝试登录到 Jing.fm ...');
getUrl(options[2], options[3], options[4]).then(function(urls) {
    play(urls);
}, function(err) {
    console.log(err);
});

/**
 * Open the song in the browser
 *
 * @param  {[string]} url
 */
function play(urls) {
    console.log(clc.green('开始播放！'));
    child = exec('mplayer ' + urls, {
        maxBuffer: 20000*1024
    }, function(error, stdout, stderr) {
        if(error) console.log(error);
        console.log('播放完毕!！');
    });
}
