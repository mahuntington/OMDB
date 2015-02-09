var OMDBApp = angular.module('OMDBApp', []);

OMDBApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.movies = [];

	$scope.result;

	$scope.search = function() {
		$http.get('http://www.omdbapi.com/?s='+$scope.query+'&r=json').success(function(data) {
			$scope.movies = data.Search;
    	});
    };

    $scope.showDescription = function(id){
    	$http.get('http://www.omdbapi.com/?i='+id+'&r=json').success(function(data) {
    		$scope.result = data;
    	});
    }
}]);