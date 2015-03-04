(function() {
  var _required = [];
  var _defined = [];

  required = function(listOrName, body) {
    if (_.isArray(listOrName)) {
      _required = _.union(listOrName, _required);
    } else if (_.isString(listOrName)) {
      _required.push(listOrName);      
    }
    return require(listOrName, body)
  };

  defined = function(name, deps, body) {
    if (_.isArray(deps)) {
      _required = _.union(deps, _required);
    } else if (_.isString(deps)) {
      _required.push(deps);
    }    
    _defined.push(name);
    var bodyWrapper = function() {
      return body.apply({__moduleName__: name}, Array.prototype.slice.call(arguments)); 
    };
    return define(name, deps, bodyWrapper);
  };

  brokenDeps = function() {
    return _.uniq(_.difference(_required, _defined));
  };
})();
