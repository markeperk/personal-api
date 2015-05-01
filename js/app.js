var app = angular.module("persApi", ['ngRoute']);



app.config(function($routeProvider) {
	// $httpProvider.interceptors.push('httpRequestInterceptor');

	$routeProvider
		.when('/', {
			templateUrl: 'routes/home.html',
			controller: 'mainCtrl'
		})
		.when('/me', {
			templateUrl: 'routes/me.html',
			controller: 'nameCtrl'
		})
		.when('/skills', {
			templateUrl: 'routes/skills.html',
			controller: 'skillsCtrl'
		})
		.otherwise('/')

})





