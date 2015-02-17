Package.describe({
  name: "asemenov:require-debug",
  summary: "Debugging wrapper for the require (define) package",
  version: "0.0.2",
  git: "http://github.com/andrey-semenov/require-debug.git",
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('mrt:define@0.10.0');
  api.use('underscore');
  api.addFiles('require-debug.js');
  if (api.export !== undefined) {
    api.export('defined', ['client', 'server']);
    api.export('required', ['client', 'server']);
    api.export('brokenDeps', ['client', 'server']);
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mrt:define@0.10.0');
  api.addFiles('require-debug.js');
  api.addFiles('tests.js');
});
