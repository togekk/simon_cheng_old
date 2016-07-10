page.controller('intro', function($rootScope, $scope, $animate, $timeout, $window) {

	$scope.enter_disabled = true;
	TweenMax.fromTo($('.pre'), 1, {opacity: 0, y: 20}, {opacity: 1, y: 0, ease: Power2.easeOut}).delay(2);
	TweenMax.fromTo($('.name'), 1, {opacity: 0, y: 20}, {opacity: 1, y: 0, ease: Power2.easeOut}).delay(3);
	TweenMax.fromTo($('.enter'), .3, {opacity: 0, x: 5}, {opacity: 1, x: 0, ease: Power2.easeOut}).delay(5);


	$timeout(function() {
		$scope.enter_disabled = false;
	}, 5300);

	$scope.intro_close = function() {
		$scope.enter_disabled = true;
		$scope.enter_clicked = true;
		TweenMax.fromTo($('.pre'), .7, {opacity: 1, y: 0}, {opacity: 0, y: -10, ease: Power2.easeIn});
		TweenMax.fromTo($('.name'), .5, {opacity: 1, y: 0}, {opacity: 0, y: -10, ease: Power2.easeIn});
		TweenMax.fromTo($('.enter'), .3, {opacity: 1, x: 0}, {opacity: 0, x: -5, ease: Power2.easeIn});
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
