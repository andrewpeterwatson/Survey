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

tracker = function() {
  populate();
  createThree = function() {
    clickNum++;
    console.log(clickNum);
    this[randomNum].viewed++;
    console.log(this[randomNum].viewed);
    used = [];
    notUsed = [];
    newProd = [];
      for (var i = 0; i < 3; i++) {
        newProd.push(newProducts[randomNum()]);
        // TODO: view counter not working
        // console.log(newProd);
          // while (used.includes(newProd) === false) {
          //   used.push(newProd);
          //   console.log("FAIL");
      // }
    }
    picEl1.name = newProd[0].call;
    picEl2.name = newProd[1].call;
    picEl3.name = newProd[2].call;
    picEl1.src = newProd[0].url;
    picEl2.src = newProd[1].url;
    picEl3.src = newProd[2].url;
    createListeners();
  }
  createThree();
  // removeListeners();
};
createListeners = function() {
  picEl1.addEventListener("click", createThree);
  picEl2.addEventListener("click", createThree);
  picEl3.addEventListener("click", createThree);
};
removeListeners = function() {
  picEl1.removeEventListener("click", createThree);
  picEl2.removeEventListener("click", createThree);
  picEl3.removeEventListener("click", createThree);
};
