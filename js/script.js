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
}).controller('index', function($rootScope, $scope, $animate) {
	$rootScope.travel_toggle = false;
});

