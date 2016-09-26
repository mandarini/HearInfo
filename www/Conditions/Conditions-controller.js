'use strict';

angular.module('MyApp.controllers').controller('ConditionsCtrl', 
 function($scope, Auth, User, Signup) {

		$scope.prof = function(condition, age) {
		  // profileRead(condition, age);
		 return User.createProfile(condition, age); 
		}

    }
);
    