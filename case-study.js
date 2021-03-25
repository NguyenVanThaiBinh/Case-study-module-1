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
  song1.volume = 0.25; // setting the volume
  if (song1.paused) {
    // if song1 is paused
    document.getElementById(
      "isrun"
    ).innerHTML = `<img src="Source/is running.png" alt="is running">`;
    song1.play();
  } else {
    document.getElementById(
      "isrun"
    ).innerHTML = `<img src="Source/on-air.png" alt="is running">`;
    song1.pause();
  }
}

// draw canvas

var ctx = document.getElementById("canvas").getContext("2d");
var offset = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10, 10, 1500, 220);
  ctx.font = "30px serif";
  ctx.fillText("Information", 130, 50);
  ctx.fillText("Contact with us", 380, 50);
  ctx.fillText("Feedback", 680, 50);
  ctx.fillText("Telephone", 930, 50);
  ctx.fillText("Privacy", 1180, 50);
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

// make Table Information
for (var j = 0; j < 5; j++) {
  var table = document.getElementById("infoTable");

  var row = table.insertRow(j);

  for (let i = 0; i < 2; i++) {
    let cell = row.insertCell(i);
    cell.id = `${i}${j}`;

    cell.innerHTML = `${i + 2} x ${j + 1}=${(j + 1) * (i + 2)}`;
  }
}

// Insert info

document.getElementById(`00`).innerHTML = `${day0.getDay()}`;
document.getElementById(`01`).innerHTML = `${day1.getDay()}`;
document.getElementById(`02`).innerHTML = `${day2.getDay()}`;
document.getElementById(`03`).innerHTML = `${day3.getDay()}`;
document.getElementById(`04`).innerHTML = `${day4.getDay()}`;
document.getElementById(`10`).innerHTML = `<a href="https://azuminofm.co.jp/personality/">${day0.getNews()}</a>`;
document.getElementById(`11`).innerHTML = `<a href="https://azuminofm.co.jp/personality/">${day1.getNews()}</a>`;
document.getElementById(`12`).innerHTML = `<a href="https://azuminofm.co.jp/personality/">${day2.getNews()}</a>`;
document.getElementById(`13`).innerHTML = `<a href="https://azuminofm.co.jp/personality/">${day3.getNews()}</a>`;
document.getElementById(`14`).innerHTML = `<a href="https://azuminofm.co.jp/personality/">${day4.getNews()}</a>`;
