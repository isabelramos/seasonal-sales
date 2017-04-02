### Project Description:

Exercise criteria:

The task of this exercise is to build a web page (utilizing JSON files) that lists all of the products, the name of the department it's in, and its pricing of a fictitious big-box online retailer. Additionally, put a `<select>` element at the top of the page that contains all possible values of the `season_discount` key in the categories file. If a season is selected, all prices on the page should immediately be discounted by the corresponding percentage.

For example, when _Spring_ is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.

The two JSON representations should be in two files: `products.json`, and `categories.json`. Both files should load via XHRs and the contents stored within two different JavaScript variables.

### Technologies used:

HTML, CSS (Bootstrap), Javascript, JSON.

### How to run this project (Node must be installed on your machine):

```
git clone https://github.com/isabelramos/seasonal-sales.git
cd seasonal-sales
npm install http-server -g
http-server -p 8080
This will show in your browser at: http://localhost:8080
```

### Contributors:
[Isabel Ramos](https://github.com/isabelramos)