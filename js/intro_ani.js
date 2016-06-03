page.controller('intro', function($rootScope, $scope, $animate) {
	$rootScope.travel_toggle = false;

	$scope.enter_disabled = true;
	
	$scope.enter_done = function() {
		$scope.enter_disabled = false;
	};


	$scope.intro_close = function() {
		$('.enter').addClass('enter-fade-out');
		$('.name').addClass('title-fade-out');
		$('.pre').addClass('title2-fade-out');
		$('.pre').one('webkitAnimationEnd mozanimationend oanimationend msAnimationEnd animationend', function() {
			window.location.href = "#/menu";
		});
	};
})