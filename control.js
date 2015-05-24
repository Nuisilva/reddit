var app = angular.module('reddit');
app.controller('postsController', function($scope, fbService){

	$scope.getPosts = function(){
		fbService.getStuff()
		.then(function(data){
			$scope.posts = data;
		})
	}
	$scope.getPosts();
	
	$scope.addPost = function(){
	  fbService.postStuff($scope.newPost);
	}

});