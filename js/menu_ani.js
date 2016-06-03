page.controller('menu', function($rootScope, $scope, $timeout) {
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
			// $scope.buttonAni = "menu_close";

			// $scope.itemBoxAni = "ani_on menu_close";
			// $rootScope.travel_toggle = true;

			$timeout(function() {

				window.location.href = "#/travel";
				player.destroy();

			}, 700);

		};

	});

	$scope.$on('youtube.player.playing', function($event, player) {
		$scope.loading_icon = null;
		$scope.loading_done_fade = "fade_out";
		$timeout(function() {
			$scope.loading_done_hide = true;
		}, 200);
		$scope.itemAni = "ani_on";
		$scope.itemBoxAni = "ani_on";

	});

	$scope.$on('youtube.player.ended', function($event, player) {
		player.seekTo('25');
	});

})