/*'use strict';

angular.module('MyApp.services').service('Conditions',
  function($q, $firebase, FIREBASE_ROOT, Auth) {
    var mainRef = new Firebase(FIREBASE_ROOT);
    var users = mainRef.child('users');	 
    var currentUser = null;

 /*   this.loadCurrentUser = function() {
      var defer = $q.defer();
      var currentUserRef = users.child(Auth.currentUser.uid);
      
      currentUser = $firebase(currentUserRef);
      currentUser.$on('loaded', defer.resolve);

      return defer.promise;
    };

    this.create = function(condition) {
      var iUsers = $firebase(users);
      var id = users.child(user.uid);
      return users.$child(id).$set({ condition: condition });
    };

		
  }); */
  
  /*
    function($q, $firebase, FIREBASE_ROOT, Auth) {
    var usersRef = new Firebase(FIREBASE_ROOT + '/users');
    var currentUser = null; */

 /*   this.loadCurrentUser = function() {
      var defer = $q.defer();
      var currentUserRef = users.child(Auth.currentUser.uid);
      
      currentUser = $firebase(currentUserRef);
      currentUser.$on('loaded', defer.resolve);

      return defer.promise;
    };

    this.create = function() {
      var id = users.child(Auth.currentUser.uid);
      return users.$child(id).$set({ onoma: 'kater' });
    };

    this.Setting = function() {
      
      var now = 8888
      
      return currentUser.$set({ passwords: now });
    };

  });

*/