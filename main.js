var infoContainer = document.getElementById("info-container");
var dropdownMenu = document.getElementById("dropdown");
var productString = "";



function makeDom (data, categoriesProductsData) {
	var currentProduct;

	if (categoriesProductsData === "products")

	for (var i=0; i<data[categoriesProductsData].length; i++) {
		currentProduct = data[categoriesProductsData][i];
		productString += `<div class="col-sm-4 col-md-2">`;
		productString += `<div class="panel panel-default">`;
		productString += `<div class="panel-heading"`;
		productString += `<h3>${currentProduct.name}</h3>`;
		productString += `</div>`;		
		productString += `<strong>${currentProduct.price}</strong>`;
		productString += `</div></div>`;	
		}	
	
	infoContainer.innerHTML = productString;
	}
		



function executeThisCodeAfterFileLoadCategoriesProducts () {
	var data = JSON.parse(this.responseText);
	// for (variable in object)
	for (key in data) {
		var categoriesProductsData = key;
		makeDom(data, categoriesProductsData);	
	} 
}

function executeThisCodeAfterFileFail () {
	console.log("failureeee!");
}


var myProductsRequest = new XMLHttpRequest();
myProductsRequest.addEventListener("load", executeThisCodeAfterFileLoadCategoriesProducts);
myProductsRequest.addEventListener("error", executeThisCodeAfterFileFail);
myProductsRequest.open("GET", "products.json");
myProductsRequest.send();

var myCategoriesRequest = new XMLHttpRequest();
myCategoriesRequest.addEventListener("load", executeThisCodeAfterFileLoadCategoriesProducts);
myCategoriesRequest.addEventListener("error", executeThisCodeAfterFileFail);
myCategoriesRequest.open("GET", "categories.json");
myCategoriesRequest.send();
