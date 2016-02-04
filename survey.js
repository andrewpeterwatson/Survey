function Image(call,url) {
  this.call = call;
  this.url =url;
};
randomNum = function(min, max) {
  return Math.random() * (max - min) - 1;
};
randomPic = function() {
  var randomPicNum = Math.floor(randomNum(1,images.length));
  randomImage = images[randomPicNum].url;
};
var bag = new Image("bag","media/images/png/bag.png");
var banana = new Image("banana","media/images/png/banana.png");
var boots = new Image("boots","media/images/png/boots.png");
var chair = new Image("chair","media/images/png/chair.png");
var cthulhu = new Image("cthulhu","media/images/png/cthulhu.png");
var dragon = new Image("dragon","media/images/png/dragon.png");
var pen = new Image("pen","media/images/png/pen.png");
var scissors = new Image("scissors","media/images/png/scissors.png");
var shark = new Image("shark","media/images/png/shark.png");
var sweep = new Image("sweep","media/images/png/sweep.png");
var unicorn = new Image("unicorn","media/images/png/unicorn.png");
var usb = new Image("usb","media/images/png/usb.png");
var waterCan = new Image("waterCan","media/images/png/waterCan.png");
var wine = new Image("wine","media/images/png/wine.png");
var images = [bag, banana, boots, chair, cthulhu, dragon, pen, scissors, shark, sweep, unicorn, usb, waterCan, wine];


var images1El = document.getElementById("pic1");
var images2El = document.getElementById("pic2");
var images3El = document.getElementById("pic3");
var imageEl = [images1El,images2El,images3El];

  render = function() {
    for (pics in imageEl) {
      randomPic();
      var imgEl = document.createElement("img");
      imgEl.src = randomImage;
      imageEl[pics].appendChild(imgEl);
    }
};
render();
