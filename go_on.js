function displayMobile() {
  console.log("유튜브 보는 중")
}

function displayWebtoon() {
  console.log("웹툰 보는 중")
}

function sleep() {
  console.log("조는 중")
}

function do_something_else () {
  setTimeout(displayMobile, 5000);
  setTimeout(displayWebtoon, 10000);
  setTimeout(sleep, 15000);
}

function get_on_the_5528_bus() {
  console.log("🚌🚌🚌🚌 낙성대 입구역 가는 중");
  do_something_else();
  setTimeout(() => {
    console.log("낙성대 입구역 도착")
  }, 16000)
}


