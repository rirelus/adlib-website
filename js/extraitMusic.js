
function extraitMusicCtrl ($http, $scope) {

	$scope.musics = [{
		id : 'music1',
		titre : 'New world',
		composer : 'Björk',
		source : './music/01 New world.mp3'
	}, {
		id : 'music2',
		titre : 'Le chemin',
		composer : 'Adeline Guihard',
		source : './music/03 Le chemin.mp3'
	}, {
		id : 'music3',
		titre : 'Sign your name',
		composer : "Terence Trent D'Arby",
		source : './music/06 Sign your name.mp3'
	}];
	

	// Lecture d'une chanson
	$scope.play = function (music) {
		var audio = document.getElementById(music.id);
		for (i in $scope.musics) {
			if ($scope.musics[i].id != music.id) {
				$scope.stop($scope.musics[i]);
			}
		}
		audio.play();
		music.isPlaying = true;
	}
	
	// Pause d'une chanson
	$scope.pause = function (music) {
		var audio = document.getElementById(music.id);
		audio.pause();
		music.isPlaying = false;
	}
	
	// Arrêt d'une chanson
	$scope.stop = function (music) {
		var audio = document.getElementById(music.id);
		audio.pause();
		audio.currentTime=0;
		music.isPlaying = false;
	}
	
}