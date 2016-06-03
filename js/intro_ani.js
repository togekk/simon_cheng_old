page.controller('intro', function($rootScope, $scope, $animate, $timeout) {

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
})