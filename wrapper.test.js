var assert = require('assert');
var Wrapper = require('./wrapper.js');

var testTxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas eros felis, at gravida tortor pharetra a. Pellentesque molestie dui vitae arcu imperdiet, a dignissim libero consectetur. Pellentesque lectus neque, iaculis eget urna vel, placerat convallis nibh. Mauris placerat mi diam, sed ultrices quam fermentum a. Morbi ipsum nunc, accumsan et augue sagittis, sodales hendrerit sapien. Aenean egestas libero sapien. Sed ultrices velit turpis, id egestas dui accumsan et. Vivamus ut nisl molestie nunc ultricies ornare eu et turpis. Aenean lacus magna, scelerisque eget commodo ut, semper id nisi. Quisque feugiat porta tortor a efficitur. Aenean vel vehicula massa. Cras tellus nunc, dignissim in diam vel, euismod scelerisque nulla. Ut dui felis, dignissim ut lorem at, scelerisque laoreet lectus. Morbi tempus dui ac elit ullamcorper, sit amet pharetra orci scelerisque."

for(var x = 1; x < 11; x++) {
  var colLen = Math.ceil(140 / x);
  console.log("===== RUN " + x + " colLen " + colLen + " =====")
  var wrappedTxt = Wrapper.wrap(testTxt, colLen);
  var arr = wrappedTxt.split("\n");
  var result = true;

  for(var i = 0; i < arr.length; i++) {
      if(arr[i].length > colLen) result = false;
  }

  assert( result === true, 'All lines are less than column width.');
  console.log(wrappedTxt);
}
