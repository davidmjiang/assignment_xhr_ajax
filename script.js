  // var xhr = new XMLHttpRequest();
  // xhr.addEventListener( "load", function(){
  //     console.log( this );
  // });
  // xhr.open("GET", "http://reqres.in/api/users", true);
  // xhr.send();


  // Create a post
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
    var promise = new Promise( function (resolve, reject) {
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
          console.log("WHY ARE YOU DIONG THIS")
          reject(this.statusText);
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
          if (this.status >= 200 && this.status < 400 ) {
            console.log("NO ERRORS")
            resolve(this.response);
            options.success(this.responseText, this.statusText, this);
          } else {
            console.log("ERRORS")
            reject(this.statusText);
            options.error(this, this.statusText, this.status);
          }
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
    });
    return promise;
  },

  get: function(url, data, success, dataType){
    var options = {method: "get",
                   async: true,
                   url: url,
                   data: data,
                   success: success,
                   dataType: dataType
                };
     return $.ajax(options);
  },

  post: function(url, data, success, dataType){
    var options = {method: "post",
                   async: true,
                   url: url,
                   data: data,
                   success: success,
                   dataType: dataType
                };
     return $.ajax(options);
  }
}

var successCallback = function(response){
            console.log(response);
          };

var callback = {
  success: function() {
    throw "KIT";
    console.log("WAY TO GO");
  },

  error: function() {
    console.log("BOOOO")
  }
}

var p = $.get("http://reqres.in/api/unknown/23", null, successCallback, "text").then(callback.success, callback.error)


// $.ajax({method: "get",
//           url: "http://reqres.in/api/users",
//           async: true,
//           success: function(response){
//             console.log(response);
//           }

//           });
