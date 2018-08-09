angular.module('ctrl.productsDetails', [])

    .controller('ProductDetailsCtrl', function ($scope, $state, $stateParams) {
        console.log('$stateParams', JSON.stringify($stateParams));
        console.log('inside the product details controller');
        $scope.selectedTab = 'PRODUCT_TAB';
        // $stateParams = {};
        $scope.showDataAccordingToTabs = {
            showDashboardData: false,
            showProductsData: false
        };
        $scope.hideImageData = false;
        $scope.verifiedChecked = '';

        $scope.sortByName = '';
        $scope.sortByRating = '';

        $scope.sortData  = [{
            text: 'Sort By Name (A-Z)',
            value: 'productname '
        },  {
            text: 'Sort By Name (Z-A)',
            value: '-productname '
        }, {
            text: 'Sort By Price (Low-High)',
            value: 'price'
        }, {
            text: 'Sort By Price (High-Low)',
            value: '-price'
        }, {
            text: 'Sort By Ratings (Low-High)',
            value: 'ratings'
        }, {
                text: 'Sort By Ratings (High-Low)',
                value: '-ratings'
            }];

         $scope.sortingName = 'productname';

        $scope.sortTheProducts = function (sortingData) {
            $scope.sortingName = sortingData;
            console.log('this is the sorting data i am getting', JSON.stringify($scope.sortingName));
                initializeProducts()
        };

        function initializeProducts() {
            $scope.products = [{
                "ids": "p1",
                "productimage": 'images/product_one.jpg',
                "productname": "Maggi 70g",
                "description": "Maggi is a product that belongs to Nestle India, which is one of the leading fast food companies in the country. The various Maggi products are stocks, instant noodles, ketchups and instant soups.",
                "price": 567,
                "ratings": 3
            },
                {
                    "ids": "p2",
                    "productimage": 'images/product_two.jpg',
                    "productname": "24 Mantra Organic Sonamasuri Brown Raw Rice, 5kg",
                    "description": "This rice is finding increasing acceptance in diet menus prepared by master chefs across the world\n" +
                        "It can be used to make Idli, dosa and other rice preparations",
                    "price": 240,
                    "ratings": 5

               },
               {
                   "ids" : "p3",
                   "productimage": 'images/organicsugar.jpg',
                   "productname": "24 Mantra Organic Sugar, 1kg",
                   "decription":"24 mantra brings to you organic sugar that is perfect for every health-conscious person who cares for natural products.",
                   "price": 456,
                   "ratings" : 5
               },
               {
                   "ids" : "p4",
                   "productimage": 'images/goodnightexpress.jpg',
                   "productname": "Good Knight Xpress System Liquid Cartridge,35ml",
                   "price": 900,
                   "ratings" : 5
               },
               {
                   "ids" : "p5",
                   "productimage": 'images/chatakabaseelseed.jpg',
                   "productname": "Chataka Basil Seed, 400g",
                   "price": 800,
                   "ratings" : 5
               },
               {
                   "ids" : "p6",
                   "productimage": 'images/saffolasaltplus.jpg',
                   "productname": "Saffola Salt Plus - Less Sodium, 1kg Pack",
                   "description":"Saffola Less Sodium Salt is also recognized as Saffola salt plus as an improved substitute to regular table salt.",
                   "price": 400,
                   "ratings" : 5
               },
               {
                   "ids" : "p7",
                   "productimage": 'images/agrofreshpopcorn.jpg',
                   "productname": "Agro Fresh Popcorn Maize, 200g",
                   "description":"Agro Fresh Popcorn seeds are packed with minerals, vitamins, protein and essential calories. If you are on a diet chart, do not forget to include this healthy snack",
                   "price": 23,
                   "ratings" : 5
               },
               {
                   "ids" : "p8",
                   "productimage": 'images/happilopremium.jpg',
                   "productname": "Happilo Premium International Omani Dates, 250g (Pack of 1)",
                   "description":"100 Percent naturally dried and free from any additives or preservatives; These dates are high in potassium and helps prevent diseases like diarrhoea",
                   "price": 350,
                   "ratings" : 5
               },
               {
                   "ids" : "p9",
                   "productimage": 'images/patanjalighee.jpg',
                   "productname": "Patanjali Cow's Ghee, 1L",
                   "description":"Ghee calms Pitta and Vata. Hence, it is ideal for people with Vata-Pitta body type and for those suffering from Vata and Pitta imbalance disorders",
                   "price": 200,
                   "ratings" : 5
               },
               {
                   "ids" : "p10",
                   "productimage": 'images/patanjalibiscuits.jpg',
                   "productname": "Patanjali Doodh Biscuits, 100g",
                   "description":"Take a well-deserved break with wholesome Patanjali Doodh Biscuits; Enhanced with fibre, the 100% atta biscuits are enriched with cow's milk",
                   "price": 100,
                   "ratings": 5
               }];

        }

        // initializeProducts();

        if ($stateParams.showProduct) {
            $scope.products = [
                {
                    "ids": $stateParams.ids,
                    "productimage": $stateParams.productimage,
                    "productname": $stateParams.productname,
                    "description": $stateParams.description,
                    "price": $stateParams.price,
                    "ratings": $stateParams.ratings
                }
            ]
        }


        if (!$stateParams.showProduct) {
            initializeProducts()
        }


        $scope.selectVerifiedEntityFilter = function (verifiedChecked) {
            console.log(verifiedChecked);
            if (verifiedChecked) {
                $scope.hideImageData = true;
                $scope.message = 'Show Image'
            } else {
                $scope.hideImageData = false;
                $scope.message = 'Hide Image'


            }
        };
        $scope.number = 3;
        $scope.getNumber = function (num) {
            return new Array(num);
        };

        $scope.showProductsInDetail = function (product, ids) {
            var modal = document.getElementById('myModal');
            var btn = document.getElementById(ids);
            console.log('btn', JSON.stringify(btn));
            var span = document.getElementsByClassName("close")[0];
            btn.onclick = function () {
                modal.style.display = "block";
            };
            span.onclick = function () {
                modal.style.display = "none";
            };
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
            $scope.oneProductDetails = product;
            console.log(' $scope.oneProductDetails', JSON.stringify($scope.oneProductDetails));
        };


        $scope.getSelectedTabsData = function (tabsDataSelected) {
            console.log('tabsDataSelected', JSON.stringify(tabsDataSelected));
            if (tabsDataSelected === 'HOME_TAB') {
                $scope.selectedTab = tabsDataSelected;
                $state.go('app.dashboard');

            } else {
                $scope.selectedTab = tabsDataSelected;
                $state.go('app.productsDetails');

            }
        };

        $scope.getSelectedTabsData = function (tabsDataSelected) {
            console.log('tabsDataSelected', JSON.stringify(tabsDataSelected));
            if (tabsDataSelected === 'HOME_TAB') {
                $scope.selectedTab = tabsDataSelected;
                $state.go('app.dashboard');

            } else {
                $scope.selectedTab = tabsDataSelected;
                $state.go('app.productsDetails');

            }
        };


        $scope.showAllProductsData = function () {
            console.log('where we show all products');
            initializeProducts()
        };


    });

