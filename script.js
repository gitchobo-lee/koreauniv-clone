window.onload = function () {
  if (getCookie("wanttosee") === "Y") {
    const notice = document.querySelector(".notice");
    const btn = document.querySelector(".closebox");
    notice.style.display = "none";
    btn.style.display = "none";
  } else {
    const notice = document.querySelector(".notice");
    const btn = document.querySelector(".closebox");
    notice.style.display = "grid";
    btn.style.display = "block";
  }
};

function hide() {
  console.log("안녕");
  const notice = document.querySelector(".notice");
  const btn = document.querySelector(".closebox");
  notice.style.display = "none";
  btn.style.display = "none";
}

function setCookie(key, value, expiredays) {
  //쿠키 저장함수
  let todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie =
    key +
    "=" +
    escape(value) +
    ";path=/;expires=" +
    todayDate.toGMTString() +
    ";";
}
function getCookie(key) {
  key = new RegExp(key + "=([^;]*)");
  return key.test(document.cookie) ? unescape(RegExp.$1) : "";
}

newBtn = document.querySelector("#today_check");
newBtn.addEventListener("click", () => {
  if (newBtn.checked) {
    setCookie("wanttosee", "Y", 24 * 60 * 60 * 1000);
  } else {
  }
});
obj = document.querySelector(".searchSection");
obj.style.display = "none";
function showSearch() {
  backgrd = document.querySelector(".righty");
  if (obj.style.display === "none") {
    obj.style.display = "inline";
  } else {
    obj.style.display = "none";
  }
}

function playToPause() {
  b1 = document.querySelector(".play");
  b2 = document.querySelector(".pause");
  v1 = document.querySelector("video");
  v1.play();
  b2.style.visibility = "visible";
  b1.style.visibility = "hidden";
}
function pauseToPlay() {
  b1 = document.querySelector(".play");
  b2 = document.querySelector(".pause");
  v1 = document.querySelector("video");
  v1.pause();
  b2.style.visibility = "hidden";
  b1.style.visibility = "visible";
}

function moveTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function moveToTdy() {
  window.scrollTo(0, 1200);
}
function moveToRsc() {
  window.scrollTo(0, 3200);
}
function moveToFes() {
  window.scrollTo(0, 4300);
}
function moveToMda() {
  window.scrollTo(0, 5400);
}
