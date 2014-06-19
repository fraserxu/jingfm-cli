/**
 * Module dependencies.
 */
var request = require('request');
var api_url = 'http://jing.fm/api/v1';
var clc = require('cli-color');
var Serial = require('node-serial');
var Parallel = require('node-parallel');

/**
 * login with user info passed to cb
 * @param {String} email
 * @param {String} password
 * @param {Function} cb
 * @api public
 */
exports.login = function(email, password, cb) {

    var u = api_url + '/sessions/create';
    request.post({
        url: u,
        form: {
            email: email,
            pwd: password
        },
        json: true
    }, function(err, response, body) {
        if (err || !body.success) return cb(err || new Error(body.codemsg));
        var headers = response.headers;
        cb(null, {
            uid : body.result.usr.id,
            c: body.result.usr.c,
            'Jing-A-Token-Header': headers['jing-a-token-header'],
            'Jing-R-Token-Header': headers['jing-r-token-header']
        })
    })
}


/**
 * Get mid list by user and keywords
 * @param {Object} user
 * @param {String} keywords
 * @param {Function} cb
 * @api public
 */
exports.getMusics = function(user, keywords, cb) {
    var u = api_url + '/search/jing/fetch_pls';
    request.post({
        url: u,
        headers: {
            'Jing-A-Token-Header': user['Jing-A-Token-Header'],
            'Jing-R-Token-Header': user['Jing-R-Token-Header']
        },
        form: {
            q: keywords,
            u: user.uid
        },
        json: true
    }, function(err, response, body) {
        if (err) cb(err)
        if (body.result.total === 0) {
            return cb(new Error('Jing.fm 好像没找到你要的歌，换个关键词吧亲！'));
        }
        var items = body.result.items;
        cb(null, items);
    });
}


/**
 * Get urls by user info amd mids array
 * @param {Object} user
 * @param {Array} mids
 * @param {Function} cb
 * @api public
 */
exports.getUrls = function (user, mids, cb) {
  var parallel = new Parallel();
  var u = api_url + '/media/song/surl';
  mids.forEach(function(mid) {
    parallel.add(function(done) {
      request.post({
          url: u,
          headers: {
              'Jing-A-Token-Header': user['Jing-A-Token-Header'],
              'Jing-R-Token-Header': user['Jing-R-Token-Header']
          },
          form: { mid: mid },
          json: true
      }, function(err, response, body) {
          if (err) return done(err);
          done(null, body.result);
      });
    })
  })
  parallel.done(cb);
}


exports.getLoveMusics = function(user, cb) {
    var u = api_url + '/music/fetch_favorites';
    request.post({
        url: u,
        headers: {
            'Jing-A-Token-Header': user['Jing-A-Token-Header'],
            'Jing-R-Token-Header': user['Jing-R-Token-Header']
        },
        form: {
            uid: user.uid,
            ouid: user.uid,
            ps: 200,
            st: 0
        },
        json: true
    }, function(err, response, body) {
        if (err || body.codemsg) return cb(err || new Error(body.codemsg));
        if (body.result.total === 0) {
            return cb(new Error('Jing.fm 好像没找到你要的歌，喜欢列表为空！'));
        }
        var items = body.result.items;
        cb(null, items);
    });
}

exports.loveMusic = function(user, tid, cb) {
    var u = api_url + '/music/post_love_song';
    request.post({
        url: u,
        headers: {
            'Jing-A-Token-Header': user['Jing-A-Token-Header'],
            'Jing-R-Token-Header': user['Jing-R-Token-Header']
        },
        form: {
            uid: user.uid,
            c: user.c,
            tid: tid,
            cmbt: '',
            modTagIds: ''
        },
        json: true
    }, function(err, response, body) {
        if (err || body.codemsg) return cb(err || new Error(body.codemsg));
        cb();
    });
}
