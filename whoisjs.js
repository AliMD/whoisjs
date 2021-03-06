(function() {
  var Whois;
  Whois = (function() {
    var Client, Serverdef;
    function Whois() {}
    Serverdef = require("./lib/whois/server").serverdef;
    Client = require("./lib/whois/client").client;
    Whois.prototype.query = function(domain, callback) {
      var client;
      client = new Client;
      return this.answer = client.lookup(domain, callback, Serverdef.guess(domain));
    };
    return Whois;
  })();
  exports.whois = Whois;
}).call(this);
