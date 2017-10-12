var myApp = angular.module('genkouyoushi',[]);

myApp.controller('MyCtrl', ['$scope', function($scope) {
	$scope.n_masu = 10;
	$scope.masurange = function(text) {
		let result = text.split(/([^\n]{1,20})/g).filter(item => {
			if(item.length > 1 || item != "\n") return item;
		})
		result.forEach((p, i) => result[i] = p.padEnd(20))
		return result;
	};

	$scope.intasarr = function(n) {
		return Array(n).fill(0);
	}
}]);
