# GroceryDeals
The Mean Stack Learning Project
=================================

Its a deals product website.

Features
-------

The following Features are Integrated

* Deals Product List 
* Sorting based on productname,mrp,ratings


### How to clone
```
git clone https://github.com/AjitWagh/GroceryDeals
```

### install dependencies
```

cd GroceryDeals
npm install    
bower install
```


### run in local
```
cd GroceryDeals
nodemon app.js
```

### deploy on production
```
forever list
forever start app.js DEALS
forever stop DEALS

OR

pm2 start app.js --name DEALS
pm2 delete DEALS
```




