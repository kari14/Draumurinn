var Draumurinn = angular.module('Draumurinn', []);

Draumurinn.controller('FantasyController', ['$scope', function($scope) {
    $scope.message = 'Draumurinn';
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
    }
]

}]);
