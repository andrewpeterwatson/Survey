var newProducts = [];
var clickNum = 0;
var images = ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine"];
var picEl1 = document.getElementById("pic1");
var picEl2 = document.getElementById("pic2");
var picEl3 = document.getElementById("pic3");

function Product(call,url) {
  this.call = call;
  this.url = "media/images/png/" + call + ".png";
  this.chosen = 0;
};
populate = function() {
  for (calls in images) {
    newProducts.push(new Product(images[calls],this.call));
  }
};
populate();
var idx1 = 0;
var idx2 = 0;
var idx3 = 0;
var gameOver = false;

function getRandomImage() {
  idx1 = Math.floor(Math.random() * newProducts.length);
  img1 = newProducts[idx1];
  idx2 = idx1;
  idx3 = idx1;
  while (idx3 === idx2 || idx2 === idx1 || idx3 === idx1) {
    idx2 = Math.floor(Math.random() * newProducts.length);
    idx3 = Math.floor(Math.random() * newProducts.length);
  }
  img2 = newProducts[idx2];
  img3 = newProducts[idx3];
  picEl1.setAttribute('src', img1.url);
  picEl2.setAttribute('src', img2.url);
  picEl3.setAttribute('src', img3.url);
};

function clickFocus() {
  document.getElementById("pic1").addEventListener("click", function(){
    var choice = event.target.id;
    console.log(choice);
    if (choice === "pic1") {
      var img = document.getElementById("pic1").getAttribute('src');
      newProducts[idx1].chosen += 1;
      console.log(newProducts[idx1].chosen);
      clickNum++;
      console.log(clickNum + " CN");
      if (clickNum === 15) {
        gameOver = true;
      }
      if (!gameOver) {
        getRandomImage();
      }
    }
  });
  document.getElementById("pic2").addEventListener("click", function(){
    var choice = event.target.id;
    console.log(choice);
    if (choice === "pic2") {
      var img = document.getElementById("pic2").getAttribute('src');
      newProducts[idx2].chosen += 1;
      console.log(newProducts[idx2].chosen);
      clickNum++;
      console.log(clickNum + " CN");
      if (clickNum === 15) {
        gameOver = true;
      }
      if (!gameOver) {
        getRandomImage();
      }
    }
  });
  document.getElementById("pic3").addEventListener("click", function(){
    var choice = event.target.id;
    console.log(choice);
    if (choice === "pic3") {
      var img = document.getElementById("pic3").getAttribute('src');
      newProducts[idx3].chosen += 1;
      console.log(newProducts[idx3].chosen);
      clickNum++;
      console.log(clickNum + " CN");
      if (clickNum === 15) {
        gameOver = true;
      }
      if (!gameOver) {
        getRandomImage();
      }
    }
  });
  if (!gameOver) {
    getRandomImage();
  }
};
// TODO:
// TODO: make stop counting after 15
if (gameOver === true) {
  removeListeners();
}
removeListeners = function() {
  document.getElementById("pic1").removeEventListener("click", event, true);
  document.getElementById("pic2").removeEventListener("click", event, true);
  document.getElementById("pic3").removeEventListener("click", event, true);
}

clickFocus();
