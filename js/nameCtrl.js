var app = angular.module("persApi");

app.controller('nameCtrl', function($routeParams, $scope, mainService) {
	this.name = 'nameCtrl';
	this.params = $routeParams;


	$scope.getUserInfo = function() {
		mainService.getUserHobbies().then(function(hobbies){
			$scope.hobbies = hobbies.data;
		})
		mainService.getUserOccupations().then(function(occupations){
			$scope.occupations = occupations.data;
		})
		mainService.getUserMentions().then(function(mentions){
			$scope.mentions = mentions.data;
		})
		mainService.getUserFriends().then(function(references){
			$scope.references = references.data;
		})
	}
	$scope.getUserInfo();

});