'use strict';

var adlibApp = angular.module('adlibApp', [
	'ngRoute', 'ngAnimate', 'ui.bootstrap'
]);


adlibApp.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider.when('/chanteurs', { 
      templateUrl: './html/chanteurs.html',
      controller: 'chanteursCtrl'
   	}).when('/concerts', { 
      templateUrl: './html/concerts.html',
      controller: 'concertsCtrl'
   	}).when('/presentation', { 
      templateUrl: './html/presentation.html',
      controller: 'presentationCtrl'
   	}).when('/photos', { 
      templateUrl: './html/photos.html',
      controller: 'photosCtrl'
   	}).when('/videos', { 
      templateUrl: './html/videos.html',
      controller: 'videosCtrl'
   	}).when('/photos', { 
      templateUrl: './html/photos.html',
      controller: 'photosCtrl'
   	}).when('/jeu', { 
      templateUrl: './html/jeu.html',
      controller: 'jeuCtrl'
   	}).when('/', { 
      templateUrl: './html/presentation.html',
      controller: 'presentationCtrl'
   	}).otherwise({
        redirectTo: '/'
    });
	
}]);


