'use strict';

angular.module('MyApp.services').service('User',
  function($q, $firebase, FIREBASE_ROOT, Auth) {
    var usersRef = new Firebase(FIREBASE_ROOT + '/users');
    var profileRef = new Firebase(FIREBASE_ROOT + '/profiles');
    var currentUser = null;

    this.loadCurrentUser = function() {
      var defer = $q.defer();
      var currentUserRef = usersRef.child(Auth.currentUser.uid);
      
      currentUser = $firebase(currentUserRef);
      currentUser.$on('loaded', defer.resolve);

      return defer.promise;
    };

    this.create = function(id, email) {
      var users = $firebase(usersRef);
      return users.$child(id).$set({ email: email });
    };
    
    this.createProfile = function (property, years) {
         
        var  condition = property;
    	 var age = years;
    	
      var currUserRef = new Firebase(profileRef + '/'+ Auth.currentUser.uid + '/profile');	
      var profs = $firebase(currUserRef);
      return profs.$set({ condition: condition, age: age });	
     	
     /*
     	var currUserRef = new Firebase(profileRef + '/'+ Auth.currentUser.uid); //=https://hearinfo.firebaseio.com/users/simplelogin%3A1
 	    var uprofileRef = $firebase(currUserRef);
 	 	return uprofileRef.$set({profile : profile}); 
 	 	
 	/* 	var currentUserRef = usersRef.child(Auth.currentUser.uid); //=https://hearinfo.firebaseio.com/users/simplelogin%3A1
 	    var profileRef = $firebase(usersRef + 'profile');
 	 	return profileRef.$child(usersRef).$set({profile : profile}); */ 
   };
   
   this.createTest1Answers = function (a, b, c, d, e, f, g) {
    	
      var currUserRef = new Firebase(profileRef + '/'+ Auth.currentUser.uid + '/test1');	
      var tests = $firebase(currUserRef);
      return tests.$set({ qa: a, qb: b, qc:c, qd:d, qe:e, qf:f, qg:g });	
    	
   }
   
   this.createTest2Answers = function (a, b, c, d, e, f, g) {
    	
      var currUserRef = new Firebase(profileRef + '/'+ Auth.currentUser.uid + '/test2');	
      var tests = $firebase(currUserRef);
      return tests.$set({ qa: a, qb: b, qc:c, qd:d, qe:e, qf:f, qg:g });	
    	
   }
   
     this.createTest3Answers = function (a, b, c, d) {
    	
      var currUserRef = new Firebase(profileRef + '/'+ Auth.currentUser.uid + '/test3');	
      var tests = $firebase(currUserRef);
      return tests.$set({ qa: a, qb: b, qc:c, qd:d });	
    	
   }
   

    this.recordPasswordChange = function() {
      var now = Math.floor(Date.now() / 1000);
      
      return currentUser.$update({ passwordLastChangedAt: now });
    };

    this.hasChangedPassword = function() {
      return angular.isDefined(currentUser.passwordLastChangedAt);
    };
    
    
  });
