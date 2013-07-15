/**
 * Module dependencies.
 */
var request = require('request');
var api_url = 'http://jing.fm/api/v1';
var clc = require('cli-color');
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
        .then(getList).then(getUrls).then(function(urls) {
            var lists = '';
            urls.forEach(function(element, index, array) {
                lists += element + " ";
            });
            def.resolve(lists);
        }, function(err) {
            console.log(clc.red(err));
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
        if(!body.success) {
            return def.reject(body.codemsg);
        }
        console.log(clc.green('成功登录到 Jing.fm ...'));
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
            var items = body.result.items;

            console.log();
            console.log(clc.blue('>>> 即将播放：'));
            var lists = [];
            items.forEach(function (element, index, array) {
                console.log(element.n + ' by '+ element.atn + ';');
                lists.push({
                    headers: headers,
                    mid: element.mid
                });
            });
            def.resolve(lists);
            console.log();
        }
    });

    return def.promise;
}

/**
 * get Url
 *
 * @param  {[object]} options
 * @return {[array]} urls array in a promise
 */
function getUrls(options) {
    var def = Q.defer();
    var urls = [];

    var result = Q.all(options.map(getUrl));
    Q.when(result, function(result) {
        def.resolve(result);
    })

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
        def.resolve(body.result);
    });

    return def.promise;
}
