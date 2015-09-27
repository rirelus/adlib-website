
function concertsCtrl ($http, $rootScope, $scope) {

	$rootScope.activeLien('concerts');	

	var xmlFeed = "https://www.google.com/calendar/feeds/cs37so6jvb0vmbn06h1m5f70po@group.calendar.google.com/public/basic?alt=json&orderby=starttime&singleevents=true&sortorder=ascending&futureevents=false"

	/*$http({method: 'GET', url: xmlFeed})
		.success(function(data, status, headers, config) {
    		
    		$scope.concerts = [];
	   		for (indE in data.feed.entry) {
	    		$scope.concerts.push({
	    			date: data.feed.entry[indE].content,
	    			titre: data.feed.entry[indE].title.$t,
	    			lieu: data.feed.entry[indE].gd$where[0].valueString,
	    			commentaire: data.feed.entry[indE].content.$t
	    		});
    		}
    					
		})
		.error(function(data, status, headers, config) {
		})*/
		
		
	$scope.concerts = [{ date: '01/01/2016',
		titre: 'titre 1',
		lieu: 'lieu 1'
	}, { date: '02/02/2016',
		titre: 'titre 2',
		lieu: 'lieu 2'
	}];
};


