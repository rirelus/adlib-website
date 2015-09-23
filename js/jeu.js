
function jeuCtrl ($http, $scope, $rootScope, $location) {

	$rootScope.activeLien('jeu');	

	$scope.chanteurs = [{
		id: 'karine',
		actif: false,
		source: './music/jeu/karine.mp3'
	}, {
		id: 'solenn',
		actif: false,
		source: './music/jeu/solenn.mp3'
	},{
		id: 'manue',
		actif: false,
		source: './music/jeu/manue.mp3'
	},{
		id: 'xavier',
		actif: false,
		source: './music/jeu/xavier.mp3'
	},{
		id: 'romuald',
		actif: false,
		source: './music/jeu/romuald.mp3'
	},{
		id: 'eric',
		actif: false,
		source: './music/jeu/eric.mp3'
	}];

	$scope.currentAudio = {};

	$scope.jouer = function (qui) {
		qui.actif = !qui.actif;
		var audio = document.getElementById('audio-' + qui.id);
		if (qui.actif) {
			if ($scope.currentAudio.currentTime) {	
				audio.currentTime = $scope.currentAudio.currentTime;
			} else {
				audio.currentTime = 0;
				$scope.currentAudio = audio;
			}
			audio.play();
		} else {
			audio.pause();
		}
	}

	
}
