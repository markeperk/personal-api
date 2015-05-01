var app = angular.module("persApi");

app.controller('mainCtrl', function($scope, $route, $routeParams, mainService) {
	this.$route = $route;
	this.$routeParams = $routeParams;



	$scope.getUserData = function() {
		mainService.getUserName().then(function(username) {
			console.log(username)
			$scope.userName = username.data;
		})
		mainService.getUserLocation().then(function(location) {
			console.log(location)
			$scope.userLocation = location.data;
		})
	}
	$scope.getUserData();
});