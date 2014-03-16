var http = require("http")
  , util = require("sys")
  , fs = require("fs")
  , mkdirp = require("mkdirp")

module.exports = (function(){

  var SpectrumClient = function(config) {
    config = config || {};

    var target = this.target = config.target || "http://127.0.0.1:5000";
    var dest = this.dest = config.dest || "./features/spectrum/";

    this.run = function(){
      mkdirp.sync(dest);
      http.get(target + "/features", function(res) {
        res.on('data', function (chunk) {
          console.log('features: ' + chunk);
          var features = JSON.parse(chunk);
          for(var i=0; i < features.length; i++) {
            var feature = features[i];
            getAndSave(feature);
          }
        });

      }).on('error', function(e) {
        console.log("Got error: " + e.message);
      });
    }

    function getAndSave(feature){
      http.get(target + feature.url + "?format=raw", function(res) {
        res.on('data', function (chunk) {

          fs.writeFile(dest + feature.title + ".feature", chunk, function(err) {
            console.log('######### ' + feature.url + "\n");
            if(err) {
              console.log(err);
            } else {
              console.log("The file was saved!");
            }
          });
        });
      });
    }
  };
  return SpectrumClient;

})();
