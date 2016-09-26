'use strict';

angular.module('MyApp.home').controller('HomeCtrl', 
  function($scope, $state, Auth, User) {
    $scope.user = {
      email: '',
      password: ''
    };
    $scope.errorMessage = null;

    $scope.login = function() {
      $scope.errorMessage = null;

 
      Auth.login($scope.user.email, $scope.user.password)
          .then(User.loadCurrentUser)
          .catch(handleError);
    };



    function handleError(error) {
      switch (error.code) {
        case 'INVALID_EMAIL':
        case 'INVALID_PASSWORD':
        case 'INVALID_USER':
          $scope.errorMessage = 'Email or password is incorrect';
          break;
        default:
          $scope.errorMessage = 'Error: [' + error.code + ']';
      }

    }
  });
