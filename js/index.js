// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!', product);
  var price1 = document.querySelector("#cart > tbody > tr:nth-child(1) > td.price > span").innerText;
  var price2 = document.querySelector("#cart > tbody > tr:nth-child(2) > td.price > span").innerText;
  var qty1 = document.querySelector("table > tbody > tr:nth-child(1) > td > input[type=number]").value;
  var qty2 = document.querySelector("table > tbody > tr:nth-child(2) > td > input[type=number]").value;
  var sub1 = document.querySelector("#cart > tbody > tr:nth-child(1) > td.subtotal > span").innerText = (price1 * qty1);
  var sub2 = document.querySelector("#cart > tbody > tr:nth-child(2) > td.subtotal > span").innerText = (price2 * qty2);

  document.querySelector("#total-value > span").innerText = sub1 + sub2;
  
  console.log(sub1)
  console.log(price1)
  console.log(qty1)
   console.log(sub2)
   console.log(price2)
   console.log(qty2)
}


hello




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
var produucts =document.querySelectorAll('tr');
console.log(produucts)
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
