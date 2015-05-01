var app = angular.module("persApi");

app.service('mainService', function($http) {

var http = $http;

	this.getUserName = function(username) {
		return $http({
				method: 'GET',
				url: 'http://localhost:8080/name'
		})
	}
	this.getUserLocation = function(location) {
		return $http({
				method: 'GET',
				url: 'http://localhost:8080/location'
		})
	}
	this.getUserHobbies = function(hobbies) {
		return $http({
				method: 'GET',
				url: 'http://localhost:8080/hobbies'
		})
	}
	this.getUserOccupations = function(occupations) {
		return $http({
				method: 'GET',
				url: 'http://localhost:8080/occupations'
		})
	} 
	this.getUserMentions = function(mentions) {
		return http.get('http://localhost:8080/mentions');
	}
	this.getUserFriends = function(references) {
		return http.get('http://localhost:8080/references');
	}
	this.getUserSkillsets = function(skills) {
		return $http({
				method: 'GET',
				url: 'http://localhost:8080/skills'
		})
	}
	this.postUserSkillsets = function(skillset, experience) {
		 $http({
			method: 'POST',
			url: 'http://localhost:8080/skills',
			data: {
				'name': skillset,
				'experience': experience
			}
		})
		// .success(function(skillset, experience) {

		// })
	}



})