var request = require('request'), 
  _ = require('underscore');

var project = null,
  token = null,
  domain = "https://cache-aws-us-east-1.iron.io/1",
  headers = { "Content-Type": "application/json", 
              "Authorization": null };

var init = function(theproject, thetoken) {
  project = theproject;
  token = thetoken;
  headers["Authorization"] = "OAuth " + thetoken;
};

// do an http request and return the answer
var exec = function( method, url, data, callback) {
  var opts = { 
            method: method, 
            url: url, 
            body: _.isObject(data) ? JSON.stringify(data) : data, 
            headers: headers 
          };
            
  request(opts, function(e, r, b) {
    if (e) {
      return callback(e, b);
    }
    callback(null, b);
  });
}

var calculateUrl = function(cacheName, key) {
  return domain + "/projects/" + project + "/caches/"+ cacheName + "/items/" + key
};

var listCaches = function(callback) {
  var url = domain + "/projects/" + project + "/caches";
  exec("get", url, null, callback);
};

var set = function(cacheName, key, value, expires,callback) {
  if (_.isUndefined(callback)) {
    callback = expires;
    expires = 60 * 60;
  };
  exec("put", calculateUrl(cacheName, key), { "value": value, "expires_in": expires }, callback);
};

var get = function(cacheName, key, callback) {
  exec("get", calculateUrl(cacheName, key), null, callback);
};

var del = function(cacheName, key, callback) {
  exec("delete", calculateUrl(cacheName, key), null, callback);
};

module.exports = {
  init: init,
  get: get,
  set: set,
  del: del,
  listCaches: listCaches
}

