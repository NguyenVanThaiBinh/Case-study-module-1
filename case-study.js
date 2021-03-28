//css image

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  } // bien mat anh
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  } // lap lai anh
  x[myIndex - 1].style.display = "block"; //hien anh
  setTimeout(carousel, 8000); // set time
}
window.onscroll = function () {
  scrollFunction();
};
//sroll button

function scrollFunction() {
  if (
    document.body.scrollTop > 450 ||
    document.documentElement.scrollTop > 450
  ) {
    document.getElementById("nutbacktotop").style.display = "block";
  } else {
    document.getElementById("nutbacktotop").style.display = "none";
  }
}

document.getElementById("nutbacktotop").addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
//click button event
document.getElementById("buttonhome").addEventListener("click", function () {
  alert("Welcome back!");
});

//click to listen music
function playSound(sound) {
  var song1 = document.getElementById(sound);
  song1.volume = 0.5; // setting the volume
  if (song1.paused) {
    // if song1 is paused
    document.getElementById(
      "isrun"
    ).innerHTML = `<img height="100px" src="Source/is running.png" alt="is running">`;
    song1.play();
  } else {
    document.getElementById(
      "isrun"
    ).innerHTML = `<img height="100px" src="Source/on-air.png" alt="is running">`;
    song1.pause();
  }
}
//Make online radio
function myFunction() {
  document.getElementById("demo").innerHTML = `<iframe height="250px" width="550px" style="border:none;" src="https://tunein.com/radio/Azumino-FM-761-s189072/" >
  </iframe><br><button  id="offbutton" onclick="myFunction1()">Click to off</button>`;
  document.getElementById("nicebutton").style.display = "none";
}
function myFunction1() {
  document.getElementById("demo").innerHTML = '';
  document.getElementById("nicebutton").style.display = 'block';
}

// draw canvas

var ctx = document.getElementById("canvas").getContext("2d");
var offset = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(12, 10, 1493, 310);
  ctx.font = "30px serif";
  ctx.fillText("Information", 130, 50);
  ctx.fillText("Contact with us", 380, 50);
  ctx.fillText("Feedback", 680, 50);
  ctx.fillText("Telephone", 930, 50);
  ctx.fillText("Privacy", 1180, 50);
  ctx.fillText(
    "Copyright ⓒ AZUMINO FM CO.,LTD. All Rights Reserved.",
    400,
    310
  );
}

function march() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}
march();

// Make Object information

function info(day, news) {
  (this.day = day),
    (this.news = news),
    (this.getNews = function () {
      return ` ${this.news}`;
    });
  this.getDay = function () {
    return ` ${this.day}`;
  };
}
let day1 = new info(
  "2021年3月10日",
  "     ３月１１日放送のおひさまサークルなど時間変更について"
);
let day2 = new info("2021年2月27日	", "    ホームページリニューアル");
let day3 = new info(
  "2021年3月32日",
  "     インターネットサイマルラジオ変更について"
);
let day4 = new info(
  "2021年4月20日",
  "     スタッフ・パーソナリティを募集しています"
);
let day0 = new info(
  "2021年3月19日",
  "     緊急告知機能付き防災ラジオ 販売店様リスト"
);
let news = [day1, day2, day3, day4, day0];

// make Table Information
for (var j = 0; j < 5; j++) {
  var table = document.getElementById("infoTable");

  var row = table.insertRow(j);

  for (let i = 0; i < 2; i++) {
    let cell = row.insertCell(i);
    cell.id = `${i}${j}`;
  }
}

// Insert info

document.getElementById(`00`).innerHTML = `${day0.getDay()}`;
document.getElementById(`01`).innerHTML = `${day1.getDay()}`;
document.getElementById(`02`).innerHTML = `${day2.getDay()}`;
document.getElementById(`03`).innerHTML = `${day3.getDay()}`;
document.getElementById(`04`).innerHTML = `${day4.getDay()}`;
document.getElementById(
  `10`
).innerHTML = `<a href="https://azuminofm.co.jp/personality/">${day0.getNews()}</a>`;
document.getElementById(
  `11`
).innerHTML = `<a href="https://azuminofm.co.jp/personality/">${day1.getNews()}</a>`;
document.getElementById(
  `12`
).innerHTML = `<a href="https://azuminofm.co.jp/personality/">${day2.getNews()}</a>`;
document.getElementById(
  `13`
).innerHTML = `<a href="https://azuminofm.co.jp/personality/">${day3.getNews()}</a>`;
document.getElementById(
  `14`
).innerHTML = `<a href="https://azuminofm.co.jp/personality/">${day4.getNews()}</a>`;

//Make sell radio
class Product {
  constructor(name, desc, price) {
    this.id = increment++;
    this.name = name;
    this.description = desc;
    this.price = price;
  }
}

let increment = 1;

let p1 = new Product(
  "PHILIPS FMRADI",
  `  <img class="radio" src="Source/radio1-removebg-preview.png" alt="">`,
  99999
);
let p2 = new Product(
  "iBELL FM180U ",
  `  <img class="radio" src="Source/radio2-removebg-preview.png" alt="">`,
  12000
);
let p3 = new Product(
  "Panasonic RF-P50",
  `  <img class="radio" src="Source/radio3-removebg-preview.png" alt="">`,
  16999
);
let p4 = new Product(
  "SONY ICF-306",
  `  <img class="radio" src="Source/radio4-removebg-preview.png" alt="">`,
  15999
);
let p5 = new Product(
  "TOSHIBA TX-PR",
  `  <img class="radio" src="Source/radio5-removebg-preview.png" alt="">`,
  8888
);

let products = [p1, p2, p3, p4, p5];

function showProduct() {
  let product = document.getElementById("product");
  products.forEach(function (item) {
    product.innerHTML += `
                            <div class="card">
                                <div class="card-heard">
                                    <h2>${item.name}</h2>
                                </div>
                                <div class="card-body">
                                    <p>${item.description}</p>
                                </div>
                                <div class="card-footer">
                                    <h2>${item.price.toLocaleString("ja-JP", {
                                      style: "currency",
                                      currency: "JPY",
                                    })}<h2>
                                    <br>
                                    <a target="Starfall" href="https://www.flipkart.com/computers/audio-players/home-audio/fm-radio/pr?sid=6bo%2Cord%2Crlj%2Cidz&page=4"><button class="buybutton">Buy Now</button></a>
                                </div>
                            </div>
                        `;
  });
}

function ready() {
  showProduct();
}

ready();

//Form sign in
var current = null;
document.querySelector("#email").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
document.querySelector("#password").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
document.querySelector("#submit").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "530 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});


