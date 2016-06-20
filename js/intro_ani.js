page.controller('intro', function($rootScope, $scope, $animate, $timeout, $window) {

	$scope.enter_disabled = true;

	$timeout(function() {
		$scope.enter_disabled = false;
	}, 5300);

	$scope.intro_close = function() {
		$scope.enter_disabled = true;
		$scope.enter_clicked = true;
		$timeout(function() {
			window.location.href = "#/menu";
		}, 700);
	};

	$scope.pre_top = $('.pre').position().top / $window.innerHeight;
	$scope.name_top = $('.name').position().top / $window.innerHeight;
	$scope.enter_top = $('.enter').position().top / $window.innerHeight;

	$(window).resize(function() {
		$scope.pre_top = $('.pre').position().top / $window.innerHeight;
		$scope.name_top = $('.name').position().top / $window.innerHeight;
		$scope.enter_top = $('.enter').position().top / $window.innerHeight;
		$scope.safeApply();
	});

	$scope.safeApply = function(fn) {
		var phase = this.$root.$$phase;
		if (phase == '$apply' || phase == '$digest') {
			if (fn && ( typeof (fn) === 'function')) {
				fn();
			}
		} else {
			this.$apply(fn);
		}
	};
}); 