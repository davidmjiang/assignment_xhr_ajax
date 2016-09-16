$(document).ready(function() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener( "load", function(){
      console.log( this );
  });
  xhr.open("GET", "http://reqres.in/api/users", true);
  xhr.send();


  // Create a post
  var xhr = new XMLHttpRequest();
  xhr.addEventListener( "load", function(){
      console.log( this );
  });
  xhr.addEventListener( "error", function(){
      console.log( this );
  });
  xhr.open("POST", "http://reqres.in/api/posts", true);
  xhr.send("title=Foo&body=Bar&userId=100000000000000");
})

$ = {
  ajax: function(options) {
    var xhr = new XMLHttpRequest();

    if (options.complete) {
      xhr.addEventListener( "load", function() {
        options.complete(this, this.statusText);
      });
    }

    if (options.error) {
      xhr.addEventListener( "error", function() {
        options.error(this, this.statusText, this.status);
      });
    }

    if (options.headers) {
      for (var header in options.headers ) {
        xhr.setRequestHeader(header, options.headers[header]);
      }
    }

    if (options.method) {
      xhr.open(options.method)
    }

    if (options.success) {
      xhr.addEventListener("success", function() {
        options.succcess();
      });
    }

    if (options.data) {

    }


  }
}
