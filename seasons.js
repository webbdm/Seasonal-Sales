var productData;
var catsData;
var products;
var categories;

// function LoadedProducts(){
//   productData = JSON.parse(this.responseText);
//   //productsArray.push(productData.products);
//   console.log(productData);
//   products = productData.products;
// }

// function LoadedCats(){
//   catsData = JSON.parse(this.responseText);
//   //categoriesArray.push(catsData);
//   console.log(catsData);
//   categories = catsData.categories;
// }

// function executeThisCodeAfterFileFails(){
//   console.log("failed");

// }

// var catsRequest = new XMLHttpRequest();
// catsRequest.addEventListener("load", LoadedCats);
// catsRequest.addEventListener("error", executeThisCodeAfterFileFails);
// catsRequest.open("GET","cats.json");
// catsRequest.send();
// //console.log("catsRequest", catsRequest);

// var productsRequest = new XMLHttpRequest();
// productsRequest.addEventListener("load", LoadedProducts);
// productsRequest.addEventListener("error", executeThisCodeAfterFileFails);
// productsRequest.open("GET","products.json");
// productsRequest.send();
//console.log("productsRequest", productsRequest);

var products = [
    {
      "id": 0,
      "name": "Kids socks",
      "price": 4.99,
      "category_id": 1
    },
    {
      "id": 1,
      "name": "Mens socks",
      "price": 6.99,
      "category_id": 1
    },
    {
      "id": 2,
      "name": "Ladies socks",
      "price": 7.99,
      "category_id": 1
    },
    {
      "id": 3,
      "name": "Foot stool",
      "price": 14.99,
      "category_id": 2
    },
    {
      "id": 4,
      "name": "Lava lamp",
      "price": 9.99,
      "category_id": 2
    },
    {
      "id": 5,
      "name": "3 drawer dresser",
      "price": 64.99,
      "category_id": 2
    },
    {
      "id": 6,
      "name": "Air filter",
      "price": 6.99,
      "category_id": 3
    },
    {
      "id": 7,
      "name": "Surge protector",
      "price": 8.99,
      "category_id": 3
    },
    {
      "id": 8,
      "name": "Plastic storage bin",
      "price": 3.99,
      "category_id": 3
    },
    {
      "id": 9,
      "name": "Light bulb",
      "price": 1.99,
      "category_id": 3
    }
  ];
var categories = [
    {
      "id": 1,
      "name": "Apparel",
      "season_discount": "Winter",
      "discount": 0.10
    },
    {
      "id": 2,
      "name": "Furniture",
      "season_discount": "Autumn",
      "discount": 0.25
    },
    {
      "id": 3,
      "name": "Household",
      "season_discount": "Spring",
      "discount": 0.15
    }
];

// var products = LoadedProducts();
// var categories = LoadedCats();
console.log("test"+products);
console.log("test"+categories);

var prices =[];
var cats =[];
function p(){for (i=0; i<products.length; i++){
  prices.push(products[i].price);
  }
};
function c(){for(i=0; i<categories.length; i++){
  cats.push(categories[i].discount);
  }
};

var sockDIV = document.getElementById("sockDIV");
var furnitureDIV = document.getElementById("furnitureDIV");
var miscDIV = document.getElementById("miscDIV");
var aTitle = document.getElementById("a-title");
var fTitle = document.getElementById("f-title");
var mTitle = document.getElementById("m-title");
var select = document.getElementById("select");

renderProducts();

function catOne(i){
        var newSocks = "";
        newSocks+=`<div class="row">`;
        newSocks+=`<div class="col-sm-6 col-md-4">`;
        newSocks+=`<div class="thumbnail">`;
        newSocks+=`<div class="caption">`;
        newSocks+= `<h3>${products[i].name}</h3>`;
        newSocks+= `<p>${products[i].price}</p>`;
        newSocks+= `</div></div></div></div>`;
        sockDIV.innerHTML += newSocks;
      };

function catTwo(i){
        var newFurn = "";
        newFurn+=`<div class="row">`;
        newFurn+=`<div class="col-sm-6 col-md-4">`;
        newFurn+=`<div class="thumbnail">`;
        newFurn+=`<div class="caption">`;
        newFurn+= `<h3>${products[i].name}</h3>`;
        newFurn+= `<p>${products[i].price}</p>`;
        newFurn+= `</div></div></div></div>`;
        furnitureDIV.innerHTML += newFurn;
      };

function catThree(i){
        var newMisc = "";
        newMisc+=`<div class="row">`;
        newMisc+=`<div class="col-sm-6 col-md-4">`;
        newMisc+=`<div class="thumbnail">`;
        newMisc+=`<div class="caption">`;
        newMisc+= `<h3>${products[i].name}</h3>`;
        newMisc+= `<p>${products[i].price}</p>`;
        newMisc+= `</div></div></div></div>`;
        miscDIV.innerHTML += newMisc;
      };

function discount(season){
  
  for(i=0; i < products.length; i++){
    switch(season){
      case "Winter":
      if(products[i].category_id === 1){
        products[i].price = (prices[i] - (prices[i] * cats[0])).toFixed(2);}
        break; 
      case "Autumn":
      if(products[i].category_id === 2){
        products[i].price = (prices[i] - (prices[i] * cats[1])).toFixed(2);}
        break;
      case "Spring":
      if(products[i].category_id === 3){
        products[i].price = (prices[i] - (prices[i] * cats[2])).toFixed(2);}
        break;
      default:
        console.log('default');
     }
   }
  
  clearDIV();
  renderProducts();
}

function renderProducts(){
  for(i=0; i < products.length; i++){
    switch (products[i].category_id){
      case 1:
        catOne(i);
        break; 
      case 2:
        catTwo(i);
        break;
      case 3:
        catThree(i);
        break;
      default:
        console.log('default');
    }
  }
 

for(i=0; i < categories.length; i++){
    switch (categories[i].id){
      case 1:
        aTitle.innerHTML = categories[i].name;
        break; 
      case 2:
        fTitle.innerHTML = categories[i].name;
        break;
      case 3:
        mTitle.innerHTML = categories[i].name;
        break;
      default:
        console.log('default');    
    }
}
}

select.onchange = function() {
     renderProducts();
     var season = this.value;
     console.log(season + " has been selected");
     discount(season);
};

function clearDIV(){
    sockDIV.innerHTML = "";
    furnitureDIV.innerHTML = ""; 
    miscDIV.innerHTML = "";
}
