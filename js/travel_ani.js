page.controller('travel', function($rootScope, $scope, $timeout, $location, $window) {
	$scope.bg_travel = travel_img_url;
	$scope.go = function() {
		window.location = travel_img_url;
	}

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

}).directive("changeOpacity", function() {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {

			element.bind('scroll', function() {
				var y = 1 - (element[0].scrollTop / 300);
				element[0].querySelector('.travel_bg').style.opacity = y.toString();
			});

		}
	}
});
