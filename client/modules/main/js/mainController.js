angular.module('ctrl.dashboard', [])
    .controller('dashboardCtrl', function ($scope) {
        console.log('this is the controller called');



    /*
*/
        $scope.products = [{
            "ids" : "p1",
            "productimage": 'images/product_one.jpg',
            "productname": "Maggi 70g",
            "price": 567,
            "ratings" : 5
            },
            {
                "ids" : "p2",
                "productimage": 'images/product_two.jpg',
                "productname": "24 Mantra Organic Sonamasuri Brown Raw Rice, 5kg",
                "price": 240,
                "ratings" : 5

            },
            {
                "ids" : "p3",
                "productimage": 'images/product_three.jpg',
                "productname": "24 Mantra Organic Sugar, 1kg",
                "price": 456,
                "ratings" : 5
            },
            {
                "ids" : "p4",
                "productimage": 'images/product_one.jpg',
                "productname": "Good Knight Xpress System Liquid Cartridge,35ml",
                "price": 900,
                "ratings" : 5
            },
            {
                "ids" : "p5",
                "productimage": 'images/product_two.jpg',
                "productname": "Chataka Basil Seed, 400g",
                "price": 800,
                "ratings" : 5
            },
            {
                "ids" : "p6",
                "productimage": 'images/product_three.jpg',
                "productname": "Saffola Salt Plus - Less Sodium, 1kg Pack",
                "price": 400,
                "ratings" : 5
            },
            {
                "ids" : "p7",
                "productimage": 'images/product_one.jpg',
                "productname": "Agro Fresh Popcorn Maize, 200g",
                "price": 23,
                "ratings" : 5
            },
            {
                "ids" : "p8",
                "productimage": 'images/product_two.jpg',
                "productname": "Happilo Premium International Omani Dates, 250g (Pack of 1)",
                "price": 350,
                "ratings" : 5
            },
            {
                "ids" : "p9",
                "productimage": 'images/product_three.jpg',
                "productname": "Patanjali Cow's Ghee, 1L",
                "price": 200,
                "ratings" : 5
            },
            {
                "ids" : "p10",
                "productimage": 'images/product_one.jpg',
                "productname": "Patanjali Doodh Biscuits, 100g",
                "price": 100,
                "ratings" : 5
            }]


        $scope.showProductsInDetail = function (product , ids) {
            var modal = document.getElementById('myModal');
            var btn = document.getElementById(ids);
            var span = document.getElementsByClassName("close")[0];
            btn.onclick = function() {
                modal.style.display = "block";
            };
            span.onclick = function() {
                modal.style.display = "none";
            };
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
          $scope.oneProductDetails = product;
          console.log(' $scope.oneProductDetails',JSON.stringify( $scope.oneProductDetails));
        };





});