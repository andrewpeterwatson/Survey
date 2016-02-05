var newProducts = [];
function Product(call,url) {
  this.call = call;
  this.url = "media/images/png/" + call + ".png";
  this.chosen = 0;
  this.viewed = 0;
};
var images = ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine"];
populate = function() {
  for (calls in images) {
    newProducts.push(new Product(images[calls],this.call));
  }
};
randomNum = function(min, max) {
  return Math.floor(Math.random() * (images.length - 1) + 1);
};
populate();
createThree = function() {
  var used = [];
  newProd = [];
  picEl1 = document.getElementById("pic1");
  picEl2 = document.getElementById("pic2");
  picEl3 = document.getElementById("pic3");
  for (var i = 0; i < 3; i++) {
    randomProd = newProducts[randomNum()];
    used.push(randomProd);
    while (used.indexOf(randomProd) == -1) {
    }
    newProd.push(randomProd)
    used.push(randomProd);
  }
  picEl1.src = newProd[0].url;
  picEl2.src = newProd[1].url;
  picEl3.src = newProd[2].url;
};
createThree();
var selectImage1 = document.getElementById("pic1");
var selectImage2 = document.getElementById("pic2");
var selectImage3 = document.getElementById("pic3");
selectImage1.addEventListener("click", function(){
  createThree();
});
selectImage2.addEventListener("click", function(){
  createThree();
});
selectImage3.addEventListener("click", function(){
  createThree();
});
