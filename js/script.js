var vid = "";
var page = angular.module('pageContentApp', ['ngRoute', 'ngAnimate', 'youtube-embed']);
var select_travel = "Sydney";
// var travel_img_url = "https://s33.postimg.org/xsxvtm4fx/sydney1.jpg";
var travel_img_url = "img/2013_03_22_08h02m25.jpg";

TweenMax.lagSmoothing(50, 16);

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
}).controller('index', function($rootScope, $scope, $animate) {
	$rootScope.travel_toggle = false;

	var handler = function(e) {
		if (e.keyCode === 123) {
			$.confirm({
				title : 'Login',
				content : '<input placeholder="Password"></input>',
				backgroundDismiss : true,
				keyboardEnabled : true,
				confirmButton : 'Submit',
				cancelButton : 'Cancel',
				confirmButtonClass : 'btn-info',
				confirm : function() {
					var val = this.$content.find('input').val();
					// get the input value.
					if (val.trim() == 'admin') {// validate it.
						console.log('Entering Debug Mode');
					}
					$.alert('OK!')
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
