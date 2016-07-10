page.controller('menu', function($rootScope, $scope, $timeout) {
	$rootScope.travel_toggle = false;

	$scope.travel_img = travel_img_url;
	$scope.travel_title = select_travel;
	$scope.loading_icon = "fa fa-spinner fa-pulse fa-5x fa-fw";

	TweenMax.fromTo($('.menu_button'), 1, {opacity: 0, y: 100, scale: 0.5},
	{opacity: 1, y: 0, scale: 1, ease: Power2.easeOut}).delay(.7);

	TweenMax.to($('.pic_title'), 0, {y: -100});

	$scope.bgVideo = '1uTOaQbWbnQ';
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
			window.location.href = "#/travel";
		};
	});

	$scope.$on('youtube.player.playing', function($event, player) {

		TweenMax.to($('.loading'), 1, {opacity: 0, ease: Power2.easeOut,
		onComplete: function() {$scope.loading_done_hide = true}});

	});

	$scope.$on('youtube.player.ended', function($event, player) {
		player.seekTo('25');
	});

	$scope.hover = function() {
		TweenMax.to($('.travel_img'), .4, {scale: 1.2});
		TweenMax.to($('.overlay'), .1, {opacity: 1, ease: Power1.easeInOut});
		TweenMax.to($('.pic_title'), .4, {y: 90, ease: Power1.easeInOut});
	};

	$scope.unhover = function() {
		TweenMax.to($('.travel_img'), .4, {scale: 1});
		TweenMax.to($('.overlay'), .1, {opacity: 0, ease: Power1.easeInOut});
		TweenMax.to($('.pic_title'), .4, {y: -100, ease: Power1.easeInOut});
	};
});
