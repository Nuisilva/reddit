var app = angular.module('reddit');
app.service('fbService', function($http, $q){

	

	this.getStuff = function(){
		var dfd = $q.defer();
		$http ({
			method: "get",
			url:"https://devmtn.firebaseio.com/posts.json"
		}).then(function(response){
				response = response.data;
  			console.log(response);
  			dfd.resolve(response);
  			});
  	 return dfd.promise;
  	}


  	this.postStuff= function (post){
      post.timestamp = Date.now();
      post.comments = [];
      post.karma = 0;
      post.id = guid();

  		$http.put("https://devmtn.firebaseio.com/posts/" + post.id + ".json", post).then(function(response){
          response = response.data;
          console.log(response);
      })
    }
    

    var guid = function() {
    var s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
    }


});