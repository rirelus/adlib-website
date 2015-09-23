
function menuCtrl ($http, $scope, $rootScope, $location) {

	$rootScope.activeLien = function(codeLien) {
		
		// Mise en forme du bon lien
		for (indL in $rootScope.links) {
			if ($rootScope.links[indL].code == codeLien) {
				$rootScope.links[indL].actif = true;
			} else {
				$rootScope.links[indL].actif = false;
			}
		}
				
	};


	$rootScope.links = [
		{ code: "presentation",
		  nom: "Présentation",
		  url: "/presentation",
		  actif: false,
		  visible: true
		},
		{ code: "chanteurs",
		  nom: "Les chanteurs",
		  url: "/chanteurs",
		  actif: false,
		  visible: true
		},
		{ code: "jeu",
		  nom: "Jouez avec nous !",
		  url: "/jeu",
		  actif: false,
		  visible: false
		},
		{ code: "photos",
		  nom: "Nos photos",
		  url: "/photos",
		  actif: false,
		  visible: false
		},
		{ code: "videos",
		  nom: "Nos vidéos",
		  url: "/videos",
		  actif: false,
		  visible: true
		},
		{ code: "concerts",
		  nom: "Nos concerts",
		  url: "/concerts",
		  actif: false,
		  visible: false
		}
		/*,
		{ code: "liens",
		  nom: "Liens",
		  url: "/liens",
		  actif: false
		}*/
	];
		
	$rootScope.vers = function(lien) {	
		if(lien.actif) {
			$location.path("/");	
			$rootScope.activeLien();
		} else {
			$location.path(lien.url);
		}

	};
		
	
	$scope.click = function(link) {
		if(!link.actif) {
			$location.path(link.url);
		}
	}
	
}