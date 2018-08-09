
angular.module('module.dashboard',['ctrl.dashboard','ctrl.productsDetails'])

.config(function($stateProvider) {
    $stateProvider
        .state('app.dashboard', {
            cache: false,
            url: "/dashboard",
            views: {
                '@': {
                    controller: 'dashboardCtrl',
                    templateUrl: "modules/main/template/main.html"
                }
            }
        })

    .state('app.productsDetails', {
        cache: false,
        url: "/productsDetails?ids?productimage?productname?price?ratings?showProduct",
        views: {
            '@': {
                controller: 'ProductDetailsCtrl',
                templateUrl: "modules/main/template/productsDetails.html"
            }
        }
    });
});