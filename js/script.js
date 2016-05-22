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
		start : 25,
		end : 62
	};
	
	$scope.$on('youtube.player.ready', function ($event, player) {
		player.mute();
	});

$scope.$on('youtube.player.ended', function ($event, player) {
		player.seekTo('25');
	});
	
	// Find all YouTube videos
var $allVideos = $("iframe[src^='//www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $("body");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});

// When the window is resized
$(window).resize(function() {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

// Kick off one resize to fix all videos on page load
}).resize();

	$scope.close = function() {
		// vid.pause();
		$scope.closeItem = 'close-item';
	};
}).controller('travel', function($scope) {
});

