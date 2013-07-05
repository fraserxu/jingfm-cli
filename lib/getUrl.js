/**
 * Module dependencies.
 */
var request = require('request');
var api_url = 'http://jing.fm/api/v1';
var Q = require('q');

/**
 * Export a audio url
 * @param  {[string]} email
 * @param  {[string]} pwd
 * @param  {[string]} keywords
 * @return {[string]}
 */
module.exports = function(email, password, keywords) {
    var def = Q.defer();

    login(email, password, keywords)
    .then(getList).then(getUrl).then(function(url) {
        def.resolve(url);
    }, function(err) {
        console.log(err);
        def.reject(err);
    });

    return def.promise;
};

/**
 * Login to get the session
 *
 * @param email
 * @param password
 * @param keywords
 * @return response object
 */
function login(email, password, keywords) {
    var def = Q.defer();

    var u = api_url + '/sessions/create';
    request.post({
        url: u,
        form: {
            email: email,
            pwd: password
        },
        json: true
    }, function(err, response, body) {
        if (err) def.reject(err);
        console.log('成功登录到 Jing.fm ...');
        def.resolve({
            headers: response.headers,
            body: body,
            keywords: keywords
        });
    })

    return def.promise;
}

/**
 * Get the play list
 *
 * @param options
 * @return song list object
 */
function getList(options) {
    var def = Q.defer();

    var headers = options.headers;
    var body = options.body;
    var keywords = options.keywords;

    var u = api_url + '/search/jing/fetch_pls';
    request.post({
        url: u,
        headers: {
            'Jing-A-Token-Header': headers['jing-a-token-header'],
            'Jing-R-Token-Header': headers['jing-r-token-header']
        },
        form: {
            q: keywords,
            u: body.result.usr.id
        },
        json: true
    }, function(err, response, body) {
        if (err) def.reject(err);
        console.log('获取歌曲列表中 ...');
        if (body.result.total === 0) {
            def.reject(new Error('Jing.fm 好像没找到你要的歌，换个关键词吧亲！'));
        } else {
            console.log('即将播放 %s 的 %s', body.result.items[0].atn, body.result.items[0].n);
            def.resolve({
                headers: headers,
                mid: body.result.items[0].mid
            });
        }
    });

    return def.promise;
}

/**
 * Get song url
 *
 * @param options
 * @return song url
 */
function getUrl(options) {
    var def = Q.defer();

    var u = api_url + '/media/song/surl';
    var headers = options.headers;

    request.post({
        url: u,
        headers: {
            'Jing-A-Token-Header': headers['jing-a-token-header'],
            'Jing-R-Token-Header': headers['jing-r-token-header']
        },
        form: { mid: options.mid },
        json: true
    }, function(err, response, body) {
        if (err) def.reject(err);
        console.log('尝试获取歌曲播放地址 ...');
        def.resolve(body.result);
    });

    return def.promise;
}
