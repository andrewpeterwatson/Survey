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
  localStorage.setItem('newProducts', JSON.stringify(newProducts));
};
checkLocal = function() {
  if (localStorage.chartData && localStorage.newProducts) {
    data = JSON.parse(localStorage.chartData);
    newProducts = JSON.parse(localStorage.getItem('newProducts'));
  } else {
    populate();
    data = {
      labels: ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine"],
      datasets: [
          {
            label: "Votes",
            fillColor: "rgba(223, 68, 80, 1)",
            // strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: []
        }
      ]
    };
  }
};
checkLocal();
var idx1 = 0;
var idx2 = 0;
var idx3 = 0;
var gameOver = false;
var resultWindow = document.getElementById('resultPage');
resetPopulate = function() {
  resultWindow.className = 'hideMe';
}
resetPopulate();
showReset = function() {
  resultWindow.className = "";
  pushData();
}

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
  // document.getElementById("reset").style.visibility = "hidden";
  document.getElementById("pic1").addEventListener("click", function(){
    var choice = event.target.id;
    if (choice === "pic1") {
      var img = document.getElementById("pic1").getAttribute('src');
      newProducts[idx1].chosen += 1;
      clickNum++;
      if (clickNum > 14) {
        gameOver = true;
        showReset()
      } else  {
          getRandomImage();
      }
    }
  });
  document.getElementById("pic2").addEventListener("click", function(){
    var choice = event.target.id;
    if (choice === "pic2") {
      var img = document.getElementById("pic2").getAttribute('src');
      newProducts[idx2].chosen += 1;
      clickNum++;
      if (clickNum > 14) {
        gameOver = true;
        showReset();
      } else {
        getRandomImage();
      }
    }
  });
  document.getElementById("pic3").addEventListener("click", function(){
    var choice = event.target.id;
    if (choice === "pic3") {
      var img = document.getElementById("pic3").getAttribute('src');
      newProducts[idx3].chosen += 1;
      clickNum++;
      if (clickNum > 14) {
        gameOver = true;
        showReset()
      } else {
        getRandomImage();
      }
    }
  });
  if (!gameOver) {
    getRandomImage();
  }
};
clickFocus();

 var buildChart = {
      data: {
        labels: ["bag", "banana", "boots", "chair", "cthulhu", "dragon", "pen", "scissors", "shark", "sweep", "unicorn", "usb", "water_can", "wine"],
        datasets: [
          {
              label: "Votes",
              fillColor: "rgba(223, 68, 80, 1)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [],
          },
      ],
  },
};
 var pushData = function() {
    for (var prods in newProducts) {
      var prodData = newProducts[prods].chosen;
      buildChart.data.datasets[0].data.push(prodData);
      localStorage.setItem('chartData', JSON.stringify(buildChart.data));
      localStorage.setItem('newProducts', JSON.stringify(newProducts));
    }
  var ctx = document.getElementById("myChart").getContext("2d");
  var myNewChart = new Chart(ctx).Bar(buildChart.data);
  var chart = document.getElementById('myChart');
};
document.getElementById('reset').addEventListener("click", function() {
  clickNum = 0;
  resetPopulate();
});
