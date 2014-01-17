# IronCache

## Introduction

This is a simple Node.js library that allows a cache to operated using the services of [Iron.io](http://www.iron.io/).

Sign up for a free account at Iron.io. 

## Example code

### Initialisation

```
// load the module
var ironcache = require("ironcache.js");

// here's the config that came from Iron.io
var conf = {"token":"<<THETOKEN>>","project_id":"<<THEPROJECT>>"}

// initialise the module  
ironcache.init(conf.project_id, conf.token);
```

### Setting a cache key

```

ironcache.set("mycache", "mykey", "myvalue", function(err, data) {
    console.log("SET", err, data);
});

```

### Getting a cache key

```
ironcache.get("moo","kiki", function(err,data) {
  console.log("GET",err,data);
});
```

### Deleting a cache key

```
ironcache.del("moo","kiki", function(err,data) {
  console.log("DEL",err,data);
});

```


