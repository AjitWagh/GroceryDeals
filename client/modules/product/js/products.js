angular.module('ctrl.product', [])
    .controller('ProductCtrl', function ($scope, $state) {

        console.log('inside the product controller');

        $scope.routeToHome = function () {
          console.log('this is the route to home');
            $state.go('app.dashboard');
        };
    });