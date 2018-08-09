angular.module('module.product', ['ctrl.product'])
.config(function($stateProvider) {
    $stateProvider
        .state('app.products', {
            cache: false,
            url: "/products",
            views: {
                '@': {
                    controller: 'ProductCtrl',
                    templateUrl: "modules/product/template/products.html"
                }
            }
        });
});