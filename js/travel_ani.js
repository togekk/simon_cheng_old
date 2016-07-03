page.controller('travel', function($rootScope, $scope, $timeout, $location, $window) {
	$scope.bg_travel = travel_img_url;
	$scope.go = function() {
		window.location = travel_img_url;
	}

	angular.element(travel).on('scroll', function() {

		var y = 1 - ($(this).scrollTop() / 300);
		$scope.scroll = y.toString();
		$scope.safeApply();

	});
	
	$scope.lang = $window.navigator.language || $window.navigator.userLanguage;

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
