
let timer;
let timeLeft = 60;  // 1분
let isPaused = false;

const timerElement = document.getElementById("timer");
const pauseButton = document.getElementById("pauseButton");
const startButton = document.getElementById("startButton");
const alarmSound = document.getElementById("alarmSound");

// 타이머 업데이트 함수
function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// 타이머 시작 함수
function startTimer() {
  clearInterval(timer); // 기존 타이머 제거
  timeLeft = 60; // 1분으로 리셋
  isPaused = false;
  pauseButton.textContent = "일시정지";
  updateTimer();

  timer = setInterval(() => {
    if (!isPaused) {
      timeLeft--;

      if (timeLeft <= 0) {
        clearInterval(timer);
        alarmSound.play(); // 알림 소리 재생
        timeLeft = 0;
      }

      updateTimer();
    }
  }, 1000);
}

// 일시정지/재개 함수
function togglePause() {
  isPaused = !isPaused;
  pauseButton.textContent = isPaused ? "재개" : "일시정지";
}

pauseButton.addEventListener("click", togglePause);
startButton.addEventListener("click", startTimer);

// 초기 타이머 설정
updateTimer();
