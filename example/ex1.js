var ironcache = require("../ironcache.js");
var conf = {"token":"<<TOKEN>>","project_id":"<<PROJECT>>"}

ironcache.init(conf.project_id, conf.token);
ironcache.listCaches(function(err, data) {
  console.log(err,data);
});

ironcache.set("moo", "kiki", "HELLO", function(err, data) {
    console.log("SET", err, data);
});

ironcache.get("moo", "kiki", function(err,data) {
  console.log("GET", err, data);
});

ironcache.del("moo", "kiki", function(err,data) {
  console.log("DEL", err, data);
});