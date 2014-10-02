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
    return define(name, deps, body);
  };

  brokenDeps = function() {
    return _.uniq(_.difference(_required, _defined));
  };
})();
