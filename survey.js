var newProducts = [];
var clickNum = 0;
var images = ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine"];
// var picEl1 = document.getElementById("pic1");
// var picEl2 = document.getElementById("pic2");
// var picEl3 = document.getElementById("pic3");

function Product(call,url) {
  this.call = call;
  this.url = "media/images/png/" + call + ".png";
  this.chosen = 0;
  this.viewed = 0;
};

populate = function() {
  for (calls in images) {
    newProducts.push(new Product(images[calls],this.call));
  }
};

randomNum = function(min, max) {
  return Math.floor(Math.random() * (images.length - 1) + 1);
};

populate();

// createListeners();
// removeListeners();

var newProd = [];
var tracker = function() {
  for (var i = 0; i < 3; i++) {
    newProd.push(newProducts[randomNum()])
  }
};
var idx1 = 0;
var idx2 = 0;
var idx3 = 0;

function getRandomImage() {
  idx1 = Math.floor(Math.random()*newProducts.length);
  img1 = newProducts[idx1];
  idx2 = idx1;
  idx3 = idx1;
  while (idx3 === idx2 || idx2 === idx1 || idx3 === idx1) {
    idx2 = Math.floor(Math.random()*newProducts.length);
    idx3 = Math.floor(Math.random()*newProducts.length);
  }
  img2 = newProducts[idx2];
  img3 = newProducts[idx3];
  document.getElementById('pic1').setAttribute('src', img1.url);
  document.getElementById('pic2').setAttribute('src', img2.url);
  document.getElementById('pic3').setAttribute('src', img3.url);
}


// picEl1.src = newProd[0].url;
// picEl2.src = newProd[1].url;
// picEl3.src = newProd[2].url;
// // }

// tracker = function() {
//  for (var i = 0; i < 15; i++) {
//     createThree = function() {
//       clickNum++;
//       console.log(clickNum);
//       used = [];
//       notUsed = [];
//         for (var i = 0; i < 3; i++) {
//           newProd.push(newProducts[randomNum()]);
//       }
//     createThree();
//   }
// };

createListeners = function() {
  picEl1.addEventListener("click", tracker);
  picEl2.addEventListener("click", tracker);
  picEl3.addEventListener("click", tracker);
};
removeListeners = function() {
  picEl1.removeEventListener("click", tracker);
  picEl2.removeEventListener("click", tracker);
  picEl3.removeEventListener("click", tracker);
};
