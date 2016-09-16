  // var xhr = new XMLHttpRequest();
  // xhr.addEventListener( "load", function(){
  //     console.log( this );
  // });
  // xhr.open("GET", "http://reqres.in/api/users", true);
  // xhr.send();


  // // Create a post
  // var xhr = new XMLHttpRequest();
  // xhr.addEventListener( "load", function(){
  //     console.log( this );
  // });
  // xhr.addEventListener( "error", function(){
  //     console.log( this );
  // });
  // xhr.open("POST", "http://reqres.in/api/posts", true);
  // xhr.send("title=Foo&body=Bar&userId=100000000000000");

$ = {
  ajax: function(options) {
    var xhr = new XMLHttpRequest();

    if (options.complete) {
      xhr.addEventListener( "load", function() {
        options.complete(this, this.statusText);
      });
      xhr.addEventListener( "error", function() {
        options.complete(this, this.statusText, this.status);
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

    if (options.success) {
      xhr.addEventListener("load", function() {
        options.success(this.responseText, this.statusText, this);
      });
    }

    if (options.dataType){
      xhr.responseType = options.dataType;
    }
   
    if (options.method) {
      var method = options.method;
    }

    if (options.url){
      var url = options.url;
    }

    if (options.async){
      var async = options.async;
    }

    xhr.open(method, url, async);

    xhr.send(options.data); 
  },

  get: function(url, data, success, dataType){
    var options = {method: "get",
                   async: true,
                   url: url,
                   data: data,
                   success: success,
                   dataType: dataType
                };
     $.ajax(options);
  }
}

var successCallback = function(response){
            console.log(response);
          };

$.get("http://reqres.in/api/users", null, successCallback, "text");

// $.ajax({method: "get", 
//           url: "http://reqres.in/api/users",
//           async: true,
//           success: function(response){
//             console.log(response);
//           }

//           });
