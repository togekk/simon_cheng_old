var vid = "";
var page = angular.module('pageContentApp', ['ngRoute', 'ngAnimate']);

page.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'page/intro.html',
		controller: 'intro'
	})
	.when('/menu', {
		templateUrl: 'page/menu.html',
		controller: 'menu'
	})
	.when('/travel', {
		templateUrl: 'page/travel.html',
		controller: 'travel'
	})
	.otherwise({redirectTo:'/'});
})
.controller('intro', function($scope) {
	$scope.introClose = function() {
		$('.enter').addClass('enter-fade-out');
		$('.name').addClass('title-fade-out');
		$('.pre').addClass('title2-fade-out');
	};
})
.controller('menu', function($scope) {
	vid = document.getElementById("bgvideo");
	$(document).ready(function() {
		vid.play();
	});
	
	$scope.close = function() {
		// vid.pause();
		$scope.closeItem = 'close-item';
	};
})
.controller('travel', function($scope) {
});

