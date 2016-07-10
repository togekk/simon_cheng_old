page.controller('travel', function($rootScope, $scope, $timeout, $location, $window) {
	$scope.bg_travel = travel_img_url;
	$scope.go = function() {
		window.open(travel_img_url, '_blank');
	};

	$scope.go2 = function() {
		window.open('img/2007-01-01-14h45m19-2.jpg', '_blank');
	}

	$scope.lang = $window.navigator.language || $window.navigator.userLanguage;

	var blurElement = {a:0};//start the blur at 0 pixels

	TweenMax.to(blurElement, .4, {a:10, onUpdate:applyBlur});

	$scope.blur = function() {
		TweenMax.to(blurElement, .4, {a:0, onUpdate:applyBlur});
		TweenMax.to('.container.content .text', .4, {opacity: .1, backgroundColor: 'rgba(0,0,0,0)'});
	};

	$scope.unblur = function() {
		TweenMax.to(blurElement, .4, {a:10, onUpdate:applyBlur});
		TweenMax.to('.container.content .text', .4, {opacity: 1, backgroundColor: 'rgba(0,0,0,0.5)'});
	};

//here you pass the filter to the DOM element
	function applyBlur()
	{
  	TweenMax.set(['.travel_bg'], {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"});
	};

	// $scope.safeApply = function(fn) {
	// 	var phase = this.$root.$$phase;
	// 	if (phase == '$apply' || phase == '$digest') {
	// 		if (fn && ( typeof (fn) === 'function')) {
	// 			fn();
	// 		}
	// 	} else {
	// 		this.$apply(fn);
	// 	}
	// };

}).directive("changeOpacity", function() {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {

			element.bind('scroll', function() {
				var y = 1 - (element[0].scrollTop / 300);
				TweenMax.set(['.bg1'], {opacity: y});
				// element[0].querySelector('.bg1').style.opacity = y.toString();
				if (y <= 0) {
					element[0].querySelector('.bg1').style.display = 'none';
				} else {
					element[0].querySelector('.bg1').style.display = 'block';
				};
			});

		}
	}
});
