var vid = "";
var page = angular.module('pageContentApp', ['ngRoute', 'ngAnimate', 'youtube-embed', 'ngSanitize', "firebase"]);
var select_travel = "Sydney";
// var travel_img_url = "https://s33.postimg.org/xsxvtm4fx/sydney1.jpg";
var travel_img_url = "img/2013_03_22_08h02m25.jpg";
var password;

// Initialize Firebase
var config = {
	apiKey: "AIzaSyBrU056chLxs5ZA9AihQsAJwpAY0JwMJjA",
	authDomain: "simon-cheng.firebaseapp.com",
	databaseURL: "https://simon-cheng.firebaseio.com",
	storageBucket: "simon-cheng.appspot.com",
};
firebase.initializeApp(config);


TweenMax.lagSmoothing(500, 16);

page.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'page/intro.html',
		controller : 'intro'
	}).when('/menu', {
		templateUrl : 'page/menu.html',
		controller : 'menu'
	}).when('/travel', {
		templateUrl : 'page/travel.html',
		controller : 'travel'
	}).otherwise({
		redirectTo : '/'
	});
}).run(function($rootScope){

	$rootScope.debug_mode = false;

}).controller('index', function($rootScope, $scope, $animate) {
	$rootScope.travel_toggle = false;

	var connectedRef = firebase.database().ref(".info/connected");
	connectedRef.on("value", function(snap) {
		if (snap.val() === true) {
			console.log("connected");
			$scope.loading = null;
		} else {
			console.log("not connected");
			$scope.loading = 'Loading...';
		}
	});

	var database = firebase.database().ref('password/');

	database.on('value', function(snap) {
		password = snap.val();
	});


	var handler = function(e) {
		if (e.keyCode === 123) {
			$.confirm({
				title : 'Login',
				content : '<input type="password" placeholder="Password" />',
				backgroundDismiss : true,
				keyboardEnabled : true,
				confirmButton : 'Submit',
				cancelButton : 'Cancel',
				confirmButtonClass : 'btn-info',
				confirm : function() {
					var val = this.$content.find('input').val();
					// get the input value.
					if (val.trim() == password) {// validate it.
						console.log('Entering Debug Mode');
						$.alert('Entering Debug Mode');
						$rootScope.debug_mode = true;
					} else {
						$.alert('Wrong Password');
					};

				}
			});
		}
	};
	var $doc = angular.element(document);
	$doc.on('keydown', handler);

}).animation('.view', function(){
  return {
    enter: function(element, done) {
      TweenMax.fromTo(element, .7, {css: {opacity: 0, marginLeft: "0"}},
			{css: {opacity: 1, marginLeft: "-.5%"}});
    },
    leave: function(element, done) {
      TweenMax.fromTo(element, .7, {css: {opacity: 1, marginLeft: "-.5%"}},
				{css: {opacity: 0, marginLeft: "-1%"}});
    }
  }
})
