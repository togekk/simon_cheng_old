page.controller('travel', function($rootScope, $scope, $timeout, $location, $window, $sanitize) {
	$scope.bg_travel = travel_img_url;

	var database = firebase.database().ref('data/');

	database.on('value', function(snap) {
		var text_data = snap.val();
		$scope.text = text_data;
		$scope.safeApply();
	});

	$scope.write = function(text, lang) {

		if ($rootScope.debug_mode) {

			angular.forEach(text, function(value, key) {

				if (key == lang) {
					angular.forEach(value.data, function(value2, key2) {
						var database_post = firebase.database().ref('data/' + key + '/data/' + key2)
						database_post.set({
							id : value2.id,
							text : value2.text
						});
					});

				};

			});

		};

	};

	$scope.go = function() {
		window.open(travel_img_url, '_blank');
	};

	$scope.go2 = function() {
		window.open('img/2007-01-01-14h45m19-2.jpg', '_blank');
	}

	$scope.lang = $window.navigator.language || $window.navigator.userLanguage;

	$scope.change_lang = function(lang) {
		$scope.lang = lang;
	};

	$scope.editing = function(lang) {
		$scope.lang_editing = lang;
	};

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
}).factory('clickAnywhereButHereService', function($document) {
	var tracker = [];

	return function($scope, expr) {
		var i,
		    t,
		    len;
		for ( i = 0,
		len = tracker.length; i < len; i++) {
			t = tracker[i];
			if (t.expr === expr && t.scope === $scope) {
				return t;
			}
		}
		var handler = function() {
			$scope.$apply(expr);
		};

		$document.on('click', handler);

		// IMPORTANT! Tear down this event handler when the scope is destroyed.
		$scope.$on('$destroy', function() {
			$document.off('click', handler);
		});

		t = {
			scope : $scope,
			expr : expr
		};
		tracker.push(t);
		return t;
	};

}).directive('clickAnywhereButHere', function($document, clickAnywhereButHereService) {
	return {
		restrict : 'A',
		link : function(scope, elem, attr, ctrl) {
			var handler = function(e) {
				e.stopPropagation();
			};
			elem.on('click', handler);

			scope.$on('$destroy', function() {
				elem.off('click', handler);
			});

			clickAnywhereButHereService(scope, attr.clickAnywhereButHere);
		}
	};
});
