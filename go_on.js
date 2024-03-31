function sleep(milliseconds) {
  const start = new Date().getTime();
  while (true) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function watchYoutube() {
  console.log("유튜브 보는 중")
  sleep(5000)
}

function watchWebtoon() {
  console.log("웹툰 보는 중")
  sleep(5000)
}

function doze() {
  console.log("조는 중")
  sleep(5000)
}

function doSomethingElse () {
  watchYoutube()
  watchWebtoon()
  doze()
}

function getOn5528Bus() {
  console.log("🚌🚌🚌🚌 낙성대 입구역 가는 중");
  setTimeout(() => {
    console.log("낙성대 입구역 도착")
  }, 16000)
  doSomethingElse();
}


getOn5528Bus()