'use strict';

angular.module('MyApp.controllers').controller('Test1Ctrl', 
  function($scope, Auth, User, Signup) {

		$scope.answ = function(a, b, c, d, e, f, g) {
		 return User.createTest1Answers(a, b, c, d, e, f, g); 
			}
		
		$scope.answ2 = function(a, b, c, d, e, f, g) {
		 return User.createTest2Answers(a, b, c, d, e, f, g); 
			}
			
		$scope.answ3 = function(a, b, c, d) {
		 return User.createTest3Answers(a, b, c, d); 
			}
});