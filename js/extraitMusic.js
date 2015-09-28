
function extraitMusicCtrl ($http, $scope, $interval) {

	$scope.musics = [{
		id : 'music0',
		titre : 'New world',
		composer : 'Björk',
		arranger : 'Adeline Guihard',
		source : './music/01 New world.mp3'
	}, {
		id : 'music1',
		titre : 'Le chemin',
		composer : 'Adeline Guihard',
		arranger : 'Adeline Guihard',
		source : './music/03 Le chemin.mp3'
	}, {
		id : 'music2',
		titre : 'Sign your name',
		composer : "Terence Trent D'Arby",
		arranger : 'Adeline Guihard',
		source : './music/06 Sign your name.mp3'
	}];

	$scope.currentMusicInd = 0;	
	$scope.currentMusic = $scope.musics[$scope.currentMusicInd];
	$scope.progress = 0;

	// Lecture d'une chanson
	$scope.play = function () {
		var audio = document.getElementById("audio");
		audio.play();
		$scope.isPlaying = true;
	};
	
	// Pause d'une chanson
	$scope.pause = function () {
		var audio = document.getElementById("audio");
		audio.pause();
		$scope.isPlaying = false;
	};
	
	// Arrêt d'une chanson
	$scope.stop = function () {
		var audio = document.getElementById("audio");
		audio.pause();
		audio.currentTime=0;
		$scope.isPlaying = false;
	};
	
	// Chanson suivante
	$scope.next = function () {
		var audio = document.getElementById("audio");
		$scope.currentMusicInd ++;
		if ($scope.currentMusicInd >= $scope.musics.length) {
			$scope.currentMusicInd = 0;
		}
		$scope.currentMusic = $scope.musics[$scope.currentMusicInd];
		var playing = $scope.isPlaying;
		$scope.stop();
		audio.src = $scope.currentMusic.source;
		if (playing) {
			audio.load();
			$scope.play();
		}
	};
	
	$scope.previous = function () {
		var audio = document.getElementById("audio");
		$scope.currentMusicInd --;
		if ($scope.currentMusicInd < 0) {
			$scope.currentMusicInd = $scope.musics.length - 1;
		}
		$scope.currentMusic = $scope.musics[$scope.currentMusicInd];
		var playing = $scope.isPlaying;
		$scope.stop();
		audio.src = $scope.currentMusic.source;
		if (playing) {
			audio.load();
			$scope.play();
		}
	};
	
	$interval(function() {
		var audio = document.getElementById("audio");
		$scope.progress = (audio.currentTime / audio.duration) * 100;
		if ($scope.progress >= 100) {
			$scope.next();
		}		
    }, 1000);
	
	$scope.clic = function (e) {
		var prct = e.offsetX / $(e.currentTarget).width();
		var audio = document.getElementById("audio");
		audio.currentTime = audio.duration * prct;
	}
		
}