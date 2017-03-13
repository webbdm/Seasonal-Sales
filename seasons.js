var productData;
var catsData;
var products;
var categories;
var mainDIV = document.getElementById("mainDIV");
var seasonSelect = document.getElementById("seasonSelect");

function renderProducts(pastProducts){
  mainDIV.innerHTML = "";
  for(i=0; i < pastProducts.length; i++){
    
    
        var newSocks = "";
        newSocks+=`<div class="row">`;
        newSocks+=`<div class="col-sm-6 col-md-4">`;
        newSocks+=`<div class="thumbnail">`;
        for(j=0; j< categories.length; j++){  
          
          if(pastProducts[i].category_id === categories[j].id){
            newSocks+=`<h3>${categories[j].name}</h3>`;
          }
          
        }
        newSocks+=`<div class="caption">`;
        newSocks+= `<h3>${pastProducts[i].name}</h3>`;
        newSocks+= `<p>${pastProducts[i].price}</p>`;
        newSocks+= `</div></div></div></div>`;
        mainDIV.innerHTML += newSocks;
    
  }
}

function LoadedProducts(){
  productData = JSON.parse(this.responseText);
  products = productData.products;
  renderProducts(products);
  console.log(products);
}

function LoadedCats(){
  catsData = JSON.parse(this.responseText);
  categories = catsData.categories;
  console.log(categories);
}

function executeThisCodeAfterFileFails(){
  console.log("failed");

}

var catsRequest = new XMLHttpRequest();
catsRequest.addEventListener("load", LoadedCats);
catsRequest.addEventListener("error", executeThisCodeAfterFileFails);
catsRequest.open("GET","cats.json");
catsRequest.send();
console.log("catsRequest", catsRequest);

var productsRequest = new XMLHttpRequest();
productsRequest.addEventListener("load", LoadedProducts);
productsRequest.addEventListener("error", executeThisCodeAfterFileFails);
productsRequest.open("GET","products.json");
productsRequest.send();
console.log("productsRequest", productsRequest);

// var products = LoadedProducts();
// var categories = LoadedCats();
console.log("test"+products);
console.log("test"+categories);

function discount(season){
  var newProducts = products;
  for(i=0; i < newProducts.length; i++){

    switch(season){
      case 'Winter':
        for(var j=0; j<categories.length; j++){
          if(categories[j].season_discount === 'Winter'){
            var discount = categories[j].discount; ///0.54
            var category = categories[j].id;
            if(newProducts[i].category_id === category)
            newProducts[i].price -= ((newProducts[i].price*discount).toFixed(2));
          }
         }
         break;
      case 'Spring':
        for(var k=0; k<categories.length; k++){
          if(categories[i].season_discount === 'Spring'){
            var discount = categories[k].discount; ///0.54
            var category = categories[k].id;
            if(newProducts[i].category_id === category)
            newProducts[i].price -= ((newProducts[i].price*discount).toFixed(2));
          }
         }
         break;
      case 'Autumn':
        for(var m=0; m<categories.length; m++){
          if(categories[m].season_discount === 'Autumn'){
            var discount = categories[m].discount; ///0.54
            var category = categories[m].id;
            if(newProducts[i].category_id === category)
            newProducts[i].price -= ((newProducts[i].price*discount).toFixed(2));
          }
         }
         break;
      default:
        console.log('default');
    }
}  
  renderProducts(newProducts);
}
 
seasonSelect.addEventListener("change",function() {
     var season = this.value;
     console.log(season + " has been selected");
     discount(season);
});
