Tinytest.add("brokenDeps should detect a broken dependency", function(test) {
  required('Missing.Dependency', function() {return null;});
  if (brokenDeps().length === 0) {
    test.fail('Expected to find a missing dependency!');
  }
})
