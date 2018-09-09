var Draumurinn = angular.module('Draumurinn', []);

Draumurinn.controller('FantasyController', ['$scope', function($scope) {
    $scope.cash = 10000000;
    $scope.points = 0;
    //Index of the player that is going out.
    $scope.playerOut = '';
    $scope.submited = false;

    $scope.confirmTeam = function() {
        //One big validation!

        //validating the subs
        var sexSet = new Set();
        sexSet.add($scope.myTeam[3].sex);
        sexSet.add($scope.myTeam[7].sex);

        if (sexSet.length !== 2) {
            alert('Invalid subs');
            return false;
        }

        var teamSet = new Set();
        for (var i in $scope.myTeam) {
            if (teamSet.has(i.team)) {
                alert('Too many players from the same team');
                return false;
            } else {
                teamSet.add(i.team);
            }
        }

        if ($scope.cash < 0) {
            alert('You cant afford this team');
            return false;
        }

        if ($scope.myTeam.includes(emptyPlayer)) {
            alert('Please fill your team');
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
        name: 'Skúli Gunnarsson',
        price: 3000000,
        team: 'KR-A',
        pic: 'src/img/avatar.jpg',
        sex: 'kk',
        points: 0
    },
    {
        name: 'Tommi',
        price: 1000000,
        team: 'BH',
        pic: 'src/img/avatar.jpg',
        sex: 'kk',
        points: 0
    },
    {
        name: 'Jói',
        price: 3000000,
        team: 'BH',
        pic: 'src/img/avatar.jpg',
        sex: 'kk',
        points: 0
    },
    {
        name: 'Pétur',
        price: 1000000,
        team: 'BH',
        pic: 'src/img/avatar.jpg',
        sex: 'kk',
        points: 0
    },
    {
        name: 'Bjarni Bjarna',
        price: 1000000,
        team: 'HK-A',
        pic: 'src/img/avatar.jpg',
        sex: 'kk',
        points: 0
    },
    {
        name: 'Maggi K',
        price: 5000000,
        team: 'Víkingur',
        pic: 'src/img/avatar.jpg',
        sex: 'kk',
        points: 0
    },
    {
        name: 'Gestur',
        price: 500000,
        team: 'KR-B',
        pic: 'src/img/avatar.jpg',
        sex: 'kk',
        points: 0
    }];

    var emptyPlayer = {
        name: '',
        price: 0,
        team: '',
        pic: 'src/img/avatar.jpg',
        sex: 'kk',
        points: 0
    }

    $scope.myTeam = [emptyPlayer, emptyPlayer, emptyPlayer, emptyPlayer, emptyPlayer, emptyPlayer, emptyPlayer, emptyPlayer];

}]);
