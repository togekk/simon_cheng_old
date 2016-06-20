page.controller('menu', function($rootScope, $scope, $timeout) {
	$rootScope.travel_toggle = false;

	$scope.travel_img = travel_img_url;
	$scope.travel_title = select_travel;
	$scope.loading_icon = "fa fa-spinner fa-pulse fa-5x fa-fw";

	$timeout(function() {
		$scope.button_ani = "ani_on";
	}, 700);

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
		// $scope.loading_icon = null;
		$scope.loading_done_fade = "fade_out";
		$timeout(function() {
			$scope.loading_done_hide = true;
		}, 200);

	});

	$scope.$on('youtube.player.ended', function($event, player) {
		player.seekTo('25');
	});

})