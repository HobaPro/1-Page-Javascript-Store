var products = document.getElementsByClassName('products')[0];

function pushProduct (){

  var product = document.createElement('div');
  product.className = "product";

  product.innerHTML += `
  <div class="image">Image</div>
  <div class="text-control">
    <h3>Product Name</h3>
    <span>20$</span>
  </div>
  <div class="quantity">
    <i class="decrease fas fa-minus"></i>
    <span>1</span>
    <i class="increase fas fa-plus"></i>
  </div>
  <span>40$</span>
  <i class="close fas fa-times"></i>
  `;

  products.appendChild(product);

  //removeProduct();
  //productQuantity();
}

//Remove Product
function removeProduct (){
  var closeBtn = document.getElementsByClassName('close');
  var i;
  for (i = 0; i < closeBtn.length; i += 1){
    closeBtn[i].onclick = function (){
      closeBtnParent = this.parentElement;

      closeBtnParent.style.display = "none";
    }
  }
}

//Increase & Decrease Product
function productQuantity (){
  var quantityValue = 1;
  console.log(quantityValue);
  var increase = document.getElementsByClassName('increase');
  var decrease = document.getElementsByClassName('decrease');

  var i;
  for (i = 0; i < increase.length; i += 1){

    increase[i].onclick = function (){

      var increaseParent = this.parentElement;
      if (quantityValue > 2){
        quantityValue = 1;
      }else{
        quantityValue += 1;
      }

      increaseParent.children[1].innerText = quantityValue;
    }
  }
}
