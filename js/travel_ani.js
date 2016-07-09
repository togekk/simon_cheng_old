page.controller('travel', function($rootScope, $scope, $timeout, $location, $window) {
	$scope.bg_travel = travel_img_url;
	$scope.go = function() {
		window.open(travel_img_url, '_blank');
	};
	
	$scope.go2 = function() {
		window.open('img/2007-01-01-14h45m19-2.jpg', '_blank');
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
				element[0].querySelector('.bg1').style.opacity = y.toString();
				if (y <= 0) {
					element[0].querySelector('.bg1').style.display = 'none';
				} else {
					element[0].querySelector('.bg1').style.display = 'block';
				};
			});

		}
	}
});
