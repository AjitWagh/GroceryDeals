
angular.module('module.dashboard',['ctrl.dashboard'])

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
        });
});