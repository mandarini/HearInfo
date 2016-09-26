'use strict';

angular.module('MyApp', [
  'firebase',
  'MyApp.services',
  'MyApp.directives',
  'MyApp.controllers'
])
.config(function($stateProvider, $urlRouterProvider) {
  var resolve = {
    auth: function($q, $timeout, Auth, User) {
      var defer = $q.defer();
      var state = this;

      Auth.getCurrentUser().then(function() {
        User.loadCurrentUser().then(function() {
          if (state.name === 'change-password') {
            defer.resolve();
          } else {
            if (User.hasChangedPassword()) {
              defer.resolve();
            } else {
              defer.reject('change-password');
            }
          }
        });
      }, function() {
        $timeout(function() { // See: http://stackoverflow.com/q/24945731/247243
          defer.reject('login');
        }, 250);
      });

      return defer.promise;
    }
  };

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'sidemenu/sidemenu.html',
      controller: 'SideMenuCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'signup/signup.html',
      controller: 'SignupCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'login/login.html',
      controller: 'LoginCtrl'
    })
    .state('reset-password', {
      url: '/reset-password',
      templateUrl: 'reset-password/reset-password.html',
      controller: 'ResetPasswordCtrl'
    })
    .state('change-password', {
      url: '/change-password',
      templateUrl: 'change-password/change-password.html',
      controller: 'ChangePasswordCtrl',
      resolve: resolve
    })
    .state('app.dashboard', {
      url: '/dashboard', 
      views: {
        menuContent: {
          templateUrl: 'dashboard/dashboard.html',
          controller: 'DashboardCtrl',
          resolve: resolve
        }
      }
    })
    
    .state('app.Videotest', {
      url: '/Videotest', 
      views: {
        menuContent: {
          templateUrl: 'Videotest/Videotest.html',
          controller: 'DashboardCtrl',
          resolve: resolve
        }
      }
    })
    
    .state('app.Info', {
      url: '/Info', 
      views: {
        menuContent: {
          templateUrl: 'Info/Info.html',
          controller: 'DashboardCtrl',
          resolve: resolve
        }
      }
    })
    
        .state('app.Tips', {
      url: '/Tips', 
      views: {
        menuContent: {
          templateUrl: 'Tips/Tips.html',
          controller: 'DashboardCtrl',
          resolve: resolve
        }
      }
    })
    
    .state('app.Conditions', {
    url: '/Conditions',
    views: {
        menuContent: {
        templateUrl: 'Conditions/Conditions.html',
    	controller: 'ConditionsCtrl',
        resolve: resolve

        }
      }
   })
   
	.state('app.choosingtest', {
    url: '/choosingtest',
    views: {
        menuContent: {
        templateUrl: 'choosingtest/choosingtest.html',
    	controller: 'DashboardCtrl',
        resolve: resolve

        }
      }
   })
    
    .state('app.Test1', {
    url: '/Test1',
    views: {
        menuContent: {
        templateUrl: 'Test1/Test1.html',
    	controller: 'Test1Ctrl',
        resolve: resolve
        }
      }
   })
   
    .state('app.Test2', {
    url: '/Test2',
    views: {
        menuContent: {
        templateUrl: 'Test2/Test2.html',
    	controller: 'Test1Ctrl',
        resolve: resolve
        }
      }
   })
   
       .state('app.Test3', {
    url: '/Test3',
    views: {
        menuContent: {
        templateUrl: 'Test3/Test3.html',
    	controller: 'Test1Ctrl',
        resolve: resolve
        }
      }
   });

  $urlRouterProvider.otherwise('/app/dashboard');
})
.run(function($rootScope, $state, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory 
    // bar above the keyboard for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, 
                                                 fromState, fromParams, error) {
      $state.go(error);
    });
  });
})
.constant('FIREBASE_ROOT', 'https://hearinfo.firebaseio.com/');

angular.module('MyApp.services', []);
angular.module('MyApp.directives', []);
angular.module('MyApp.controllers', []);
