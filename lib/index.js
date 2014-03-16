

var SpectrumClient = require("./spectrum-client")

module.exports = (function(){

  return function(){
    try{
      var dest = process.argv[2]
      var target= process.argv[3]
      var client = new SpectrumClient({
        target: target,
        dest: dest
      });
      client.run();
    }catch(e){
      console.log(e);
    }
  }

})()
