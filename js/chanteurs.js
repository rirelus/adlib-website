	
function chanteursCtrl ($http, $rootScope, $scope) {
	
	$rootScope.activeLien('chanteurs');
	
	$scope.chanteurs = [
		{
			code: 'eric',
			nom: 'Eric'
		}, 
		{
			code: 'romuald',
			nom: 'Romuald'
		}, 
		{
			code: 'xavier',
			nom: 'Xavier'
		}, 
		{
			code: 'karine',
			nom: 'Karine'
		}, 
		{
			code: 'solenn',
			nom: 'Solenn'
		}, 
		{
			code: 'manue',
			nom: 'Manue'
		}];

	
};

