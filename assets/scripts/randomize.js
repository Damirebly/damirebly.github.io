/*Script comes from: https://jekyllcodex.org/without-plugin/randomize/ -->
Removed some parts of the code because I was getting an error where sometimes the image returned was null (and as such a broken image).
Then I got an error that 2 arguments were expected, but only 1 given (but the images still showed up). The console said the
error was related to the "imgel" variable, which I removed references to. As well as setAttribute function. It seems to work without issue now. */

function isvisible(obj) {
    return obj.offsetWidth > 0 && obj.offsetHeight > 0;
  }
  var shuffle = function() {
        elements = document.querySelectorAll('.randomize');
        Array.prototype.forEach.call(elements, function(parentel, i){
          var children = parentel.children;
          children = Array.prototype.slice.call(children, 0);
          children = Array.prototype.sort.call(children, function(a, b) {
              return Math.random() - 0.5;
          });
          for(var i = 0, l = children.length; i < l; i++) parentel.append(children[i]);
        });
  };
  shuffle();
  
  elements = document.querySelectorAll('.randomize');
  Array.prototype.forEach.call(elements, function(parentel, i){
      children = parentel.children;
      Array.prototype.forEach.call(children, function(el, j){
          if(isvisible(el)) {
              if(el.getAttribute('data-src')) el.setAttr('src',el.getAttribute('data-src'));
          }
      });
  });