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

// .directive("detectPosition", function($window) {
//
// 	return {
// 		restrict : 'A',
// 		link : function(scope, element, attrs) {
//
// 			console.log($window.innerHeight);
//
// 			angular.element($window).bind('resize', function() {
//
//
//
// 				scope.pre_top = element[0].querySelector('.pre').prop('offsetTop') / $window.innerHeight;
// 				scope.name_top = element[0].querySelector('.name').prop('offsetTop') / $window.innerHeight;
// 				scope.enter_top = element[0].querySelector('.enter').prop('offsetTop') / $window.innerHeight;
//
// 				console.log(element[0].querySelector('.pre').prop('offsetTop') / $window.innerHeight);
//
// 			});
//
// 		}
// 	};
//
// });
