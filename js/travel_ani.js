page.controller('travel', function($rootScope, $scope, $timeout, $location) {
	$scope.bg_travel = travel_img_url;
	$scope.go = function() {
		window.location = travel_img_url;
	}
	
	angular.element(travel).on('scroll', function() {

		var y = 1 - ($(this).scrollTop() / 300);
		$scope.scroll = y.toString();
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
