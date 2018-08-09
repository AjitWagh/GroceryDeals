### How to clone
```
git clone https://github.com/AjitWagh/GroceryDeals
```

### install dependencies
```
npm install 
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


