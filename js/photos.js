
function photosCtrl ($http, $scope, $rootScope, $location) {

	$scope.NB_PHOTOS = 8;

	$rootScope.activeLien('photos');	
	
	
	$scope.myInterval = 5000;
  	$scope.noWrapSlides = false;
  	var slides = $scope.slides = [];

  	for (var i=1; i<=$scope.NB_PHOTOS; i++) {
		$scope.slides.push({
	    	image: 'photos/' + i + '.jpg',
	    });
  	}
  
}
