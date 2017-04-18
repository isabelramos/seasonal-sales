var infoContainer = document.getElementById("info-container");
var dropdownMenu = document.getElementById("dropdown");
var categories = [];
var products = [];
var productString = "";


function makeProductsArray () {
	products.forEach (function(product) {
		for (var i=0; i<categories.length; i++) {
			if (product.category_id === categories[i].id) {
				product["category_name"] = categories[i].name;
				product["category_discount"] = categories[i].discount;
				product["category_season_discount"] = categories[i].season_discount;
				product["season_price"] = (product.price - (product.price * categories[i].discount)).toFixed(2);
			}
		}
	});
	makeDom();
}

function makeDom (discountSeason) {
	productString = ""; 

	for (var i=0; i<products.length; i++) {
		productString += `<div class="col-sm-4 col-md-2">`;
		productString += `<div class="panel panel-default">`;
		productString += `<div class="panel-heading"`;
		productString += `<strong>${products[i].category_name}</strong> <h4>${products[i].name}</h4>`;
		productString += `</div>`;

		if (discountSeason === products[i].category_season_discount) {
			productString += `<p>Seasonal Price: ${products[i].season_price}</p>`;
		} else {
			productString += `<p>Price: ${products[i].price}</p>`;
		}
		productString += `</div></div>`;	
		infoContainer.innerHTML = productString;		
	}
}

dropdownMenu.addEventListener("change", function(event){
		makeDom(dropdownMenu.options[dropdownMenu.selectedIndex].value);
});


function executeThisCodeAfterFileLoadProducts () {
	products = JSON.parse(this.responseText).products;
	secondXhr();
}

function executeThisCodeAfterFileLoadCategories () {
	categories = JSON.parse(this.responseText).categories;
	makeProductsArray();
}

function executeThisCodeAfterFileFail () {
	console.log("failureeee!");
}

var myProductsRequest = new XMLHttpRequest();
myProductsRequest.addEventListener("load", executeThisCodeAfterFileLoadProducts);
myProductsRequest.addEventListener("error", executeThisCodeAfterFileFail);
myProductsRequest.open("GET", "products.json");
myProductsRequest.send();

function secondXhr () {
	var myCategoriesRequest = new XMLHttpRequest();
	myCategoriesRequest.addEventListener("load", executeThisCodeAfterFileLoadCategories);
	myCategoriesRequest.addEventListener("error", executeThisCodeAfterFileFail);
	myCategoriesRequest.open("GET", "categories.json");
	myCategoriesRequest.send();
}
