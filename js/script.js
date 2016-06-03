var vid = "";
var page = angular.module('pageContentApp', ['ngRoute', 'ngAnimate', 'youtube-embed']);
var select_travel = "Sydney";
var travel_img_url = "https://s33.postimg.org/xsxvtm4fx/sydney1.jpg";

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
}).directive('animationend', function() {
	return {
		restrict: 'A',
		scope: {
			animationend: '&'
		},
		link: function(scope, element) {
			var callback = scope.animationend(),
				  events = 'animationend webkitAnimationEnd MSAnimationEnd' +
						'transitionend webkitTransitionEnd';

			element.on(events, function(event) {
				callback.call(element[0], event);
			});
		}
	};
}).controller('index', function($rootScope, $scope) {
	$rootScope.travel_toggle = false;
});

