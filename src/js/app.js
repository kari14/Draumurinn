var Draumurinn = angular.module('Draumurinn', []);

Draumurinn.controller('FantasyController', ['$scope', function($scope) {
    $scope.cash = 10000000;
    $scope.messages = 'Draumurinn';
    $scope.addPlayer = function(player) {
        //var currentPlayer = $scope.players.indexOf(player);
        if ($scope.myTeam.length === 3) {
            //ojjjj barasta!!!
            alert("Team is full");
            return
        }
            $scope.myTeam.push(player);
            $scope.cash -= player.price;
    }

    $scope.removePlayer = function(player) {
        var current = $scope.myTeam.indexOf(player);
        $scope.myTeam.splice(current, 1);
    }


    $scope.players = [
    {
        name: 'Kári',
        price: 5000000,
        team: 'KR',
        pic: 'src/img/avatar.jpg'
    },
    {
        name: 'Tommi',
        price: 1000000,
        team: 'BH',
        pic: 'src/img/avatar.jpg'
    },
    {
        name: 'Jói',
        price: 3000000,
        team: 'BH',
        pic: 'src/img/avatar.jpg'
    },
    {
        name: 'Pétur',
        price: 1000000,
        team: 'BH',
        pic: 'src/img/avatar.jpg'
    },
    {
        name: 'Bjarni Bjarna',
        price: 1000000,
        team: 'HK',
        pic: 'src/img/avatar.jpg'
    },
    {
        name: 'Maggi K',
        price: 5000000,
        team: 'Víkingur',
        pic: 'src/img/avatar.jpg'

    }];

    $scope.myTeam = [];

    $scope.reserve = "";

}]);
