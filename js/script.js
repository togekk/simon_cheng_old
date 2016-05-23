var vid = "";
var page = angular.module('pageContentApp', ['ngRoute', 'ngAnimate', 'youtube-embed']);

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
}).controller('intro', function($scope) {
	$scope.introClose = function() {
		$('.enter').addClass('enter-fade-out');
		$('.name').addClass('title-fade-out');
		$('.pre').addClass('title2-fade-out');
	};
}).controller('menu', function($scope) {
	// vid = document.getElementById("bgvideo");
	// $(document).ready(function() {
	// vid.play();
	// });
	// var options = {
	// videoId : 'ab0TSkLe-E0',
	// start : 3
	// };
	// $('.menu-box').tubular(options);

	$scope.bgVideo = 'YpPbzZ2aHiA';
	$scope.playerVars = {
		controls : 0,
		autoplay : 1,
		rel : 0,
		showinfo : 0,
		modestbranding : 1,
		wmode : "opaque",
		start : 25,
		end : 62
	};
	
	$scope.$on('youtube.player.ready', function ($event, player) {
		player.mute();
	});

$scope.$on('youtube.player.ended', function ($event, player) {
		player.seekTo('25');
	});

	$scope.close = function() {
		// vid.pause();
		$scope.closeItem = 'close-item';
	};
}).controller('travel', function($scope) {
});

