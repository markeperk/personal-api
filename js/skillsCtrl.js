var app = angular.module("persApi");

app.controller('skillsCtrl', function($routeParams, $scope, mainService) {
	this.name = 'skillsCtrl';
	this.params = $routeParams;


	$scope.getUserSkills = function() {
		mainService.getUserSkillsets().then(function(skills) {
			$scope.skills = skills.data;
		})
	}
	$scope.getUserSkills();

	$scope.postUserSkills = function() {
		mainService.postUserSkillsets($scope.skillset, $scope.experience).then(function() {
			$scope.getUserSkills();
		})
	}


});