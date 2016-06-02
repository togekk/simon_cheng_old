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
}).controller('index', function($rootScope, $scope) {
	$rootScope.travel_toggle = false;
}).controller('intro', function($rootScope, $scope) {
	$rootScope.travel_toggle = false;

	$('.enter').attr("disabled", true);
	$('.enter').one('webkitAnimationEnd mozanimationend oanimationend msAnimationEnd animationend', function() {
		$('.enter').attr("disabled", false);
	});

	$scope.intro_close = function() {
		$('.enter').addClass('enter-fade-out');
		$('.name').addClass('title-fade-out');
		$('.pre').addClass('title2-fade-out');
		$('.pre').one('webkitAnimationEnd mozanimationend oanimationend msAnimationEnd animationend', function() {
			window.location.href = "#/menu";
		});
	};
}).controller('menu', function($rootScope, $scope, $timeout) {
	$rootScope.travel_toggle = false;

	$scope.travel_img = travel_img_url;
	$scope.travel_title = select_travel;
	$scope.loading_icon = "fa fa-spinner fa-pulse fa-5x fa-fw";
	$scope.buttonAni = "col-sm-6 col-sm-offset-3";

	$scope.bgVideo = 'YpPbzZ2aHiA';
	$scope.playerVars = {
		controls : 0,
		autoplay : 1,
		rel : 0,
		showinfo : 0,
		modestbranding : 1,
		wmode : "transparent",
		start : 25,
		end : 62
	};

	$scope.$on('youtube.player.ready', function($event, player) {
		player.mute();
		$scope.close_menu = function() {
			player.pauseVideo();
			$scope.buttonAni = "menu_close";

			$scope.itemBoxAni = "ani_on menu_close";
			$rootScope.travel_toggle = true;

			$timeout(function() {

				// $('.item').hide();
				player.destroy();
				window.location.href = "#/travel";

			}, 700);

		};

	});

	$scope.$on('youtube.player.playing', function($event, player) {
		$scope.loading_icon = null;
		$('.loading').addClass('fade_out');
		setTimeout(function() {
			$('.loading').hide();
		}, 200);
		$scope.itemAni = "ani_on";
		$scope.itemBoxAni = "ani_on";

	});

	$scope.$on('youtube.player.ended', function($event, player) {
		player.seekTo('25');
	});

}).controller('travel', function($rootScope, $scope, $timeout) {

	$scope.bg_travel = travel_img_url;

});

