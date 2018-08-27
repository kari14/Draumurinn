var Draumurinn = angular.module('Draumurinn', []);

Draumurinn.controller('FantasyController', ['$scope', function($scope) {
    $scope.cash = 10000000;
    $scope.points = 0;
    //Index of the player that is going out.
    $scope.playerOut = '';
    $scope.submited = false;

    $scope.confirmTeam = function() {
        var set = new Set();
        for (var i in $scope.myTeam) {
            if (set.has(i.team)) {
                alert('Too many players from the same team');
                return false;
            }
        }

        if ($scope.cash < 0) {
            alert('You cant afford this team');
            return false;
        }

        if ($scope.myTeam.includes(emptyPlayer)) {
            alert('Please select your team');
            return false;
        }

        //Ojjj alert!
        alert('Team has been submited');
        $scope.submited = true;

        return true;
    }

    $scope.setPlayerOut = function(player) {
        $scope.playerOut = player;
    }

    $scope.transfer = function(player) {
        if ($scope.playerOut !== '') {
            $scope.myTeam[$scope.playerOut] = player;
            $scope.cash -= player.price;
        }
    }

    $scope.players = [
    {
        name: 'Kári',
        price: 5000000,
        team: 'KR',
        pic: 'src/img/avatar.jpg',
        points: 0
    },
    {
        name: 'Tommi',
        price: 1000000,
        team: 'BH',
        pic: 'src/img/avatar.jpg',
        points: 0
    },
    {
        name: 'Jói',
        price: 3000000,
        team: 'BH',
        pic: 'src/img/avatar.jpg',
        points: 0
    },
    {
        name: 'Pétur',
        price: 1000000,
        team: 'BH',
        pic: 'src/img/avatar.jpg',
        points: 0
    },
    {
        name: 'Bjarni Bjarna',
        price: 1000000,
        team: 'HK',
        pic: 'src/img/avatar.jpg',
        points: 0
    },
    {
        name: 'Maggi K',
        price: 5000000,
        team: 'Víkingur',
        pic: 'src/img/avatar.jpg',
        points: 0
    },
    {
        name: 'Gestur',
        price: 500000,
        team: 'KR-B',
        pic: 'src/img/avatar.jpg',
        points: 0
    }
    
    ];

    var emptyPlayer = {
        name: '',
        price: 0,
        team: '',
        pic: 'src/img/avatar.jpg',
        points: 0
    }

    $scope.myTeam = [emptyPlayer, emptyPlayer, emptyPlayer, emptyPlayer];

}]);
