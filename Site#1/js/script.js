//Nav-Bar

//Show-Responsive-NavBar
function showNavBar (){

  var navToShow = document.getElementById('nav-show');
  navToShow.classList.toggle('show')
}

//Change-NavBar
window.onscroll = function (){scrollFunction ();};

function scrollFunction (){
  var navBar = document.getElementsByClassName('nav-bar')[0];

  if (document.body.scrollTop > 100){
    navBar.style.padding = "3";
    navBar.style.borderBottom = "1px solid #2d3436";
  }else{
    navBar.style.padding = "";
    navBar.style.borderBottom = "10px";
  }
}

//Image-cards

//React Love
var loveReact = document.getElementsByClassName('love-react'),
    i;
for (i = 0; i < loveReact.length; i += 1){
  loveReact[i].onclick = function (){

    this.classList.toggle('heart-color');
    this.classList.toggle('pulse');
  }
}

//Adding to cart
var productAmount = document.getElementsByClassName('product-amount')[0],
    productAmountPlus = 0;
productAmount.innerHTML = productAmountPlus;
var cart = document.getElementsByClassName('cart');
for (i = 0; i < cart.length; i += 1){
  cart[i].onclick = function (){
    this.classList.toggle('active');

    if (this.classList.contains('active')){
      productAmountPlus += 1;
      alertAddedAnimation ();
    }else{
      productAmountPlus -= 1;
      alertRemovedAnimation ();
    }
    productAmount.innerHTML = productAmountPlus;
  }
}

function alertAddedAnimation (){
  var addAlert = document.getElementsByClassName('add-alert')[0];
  var removeAlert = document.getElementsByClassName('remove-alert')[0];

  if (addAlert.classList.contains('added')){
    addAlert.classList.remove('added');

    setTimeout(function (){
      addAlert.classList.add('added');
    }, 1)
  }else{
    addAlert.classList.add('added');
  }
}

function alertRemovedAnimation (){
  var removeAlert = document.getElementsByClassName('remove-alert')[0];
  var addAlert = document.getElementsByClassName('add-alert')[0];

  if (removeAlert.classList.contains('removed')){
    removeAlert.classList.remove('removed');

    setTimeout(function (){
      removeAlert.classList.add('removed');
    }, 1)
  }else{
    removeAlert.classList.add('removed');
  }
}

//Open Modal
var readMoreBtnParent = document.getElementsByClassName('product');
var productOverlay = document.getElementsByClassName('product-overlay')[0];

for (i = 0; i < readMoreBtnParent.length; i += 1){
  var readMoreBtn = readMoreBtnParent[i].children[2];
  readMoreBtn.onclick = function (){
    var productName1 = this.parentElement.children[1].children[0];
    var productPrice1 = this.parentElement.children[1].children[1];
    var productCart1 = this.parentElement.children[3].children[0];
    console.log(productCart1);

    var productName2 = productOverlay.children[0].children[1].children[0];
    var productPrice2 = productOverlay.children[0].children[1].children[1];
    var productCart2 = productOverlay.children[0].children[3];

    productName2.innerText = productName1.innerText;
    productPrice2.innerText = productPrice1.innerText;

    productOverlay.style.display = "flex";
  }
}

function closeModal (){
  productOverlay.style.display = "none";
}

//Support Section

//Send a Problem
function sendProblems (e){

  e.preventDefault()

  var textArea = document.getElementsByTagName('textarea')[0];
  var supportSection = document.getElementsByClassName('support-section')[0];
  var alertParagraph = supportSection.getElementsByTagName('p')

  if (textArea.value == "") {
    alertParagraph[2].innerText = "Please Enter your Problem.";
    setTimeout(function (){
      alertParagraph[2].innerText = "";
    }, 2000);
    alertParagraph[0].innerText = "";
    alertParagraph[1].innerText = "";
    textArea.value = "";
  }else if (textArea.value.length < 10){
    alertParagraph[1].innerText = "The written is not enough.";
    setTimeout(function (){
      alertParagraph[1].innerText = "";
    }, 2000);
    alertParagraph[0].innerText = "";
    alertParagraph[2].innerText = "";
    textArea.value = "";
  }else{
    alertParagraph[0].innerText = "Your Problem has been Send.";
    setTimeout(function (){
      alertParagraph[0].innerText = "";
    }, 2000);
    alertParagraph[1].innerText = "";
    alertParagraph[2].innerText = "";
    textArea.value = "";
  }
}
