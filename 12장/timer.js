let count = 0;
let timerID = null;

onmessage = function (e) {
    if (e.data == "start") {
        if (timerID !== null) return; // 타이머가 이미 작동 중이면 종료
        timerID = setInterval(myCallback, 1000); // 1초 간격으로 myCallback 호출
    } else if (e.data == "stop") {
        if (timerID === null) return; // 타이머가 작동하지 않으면 종료
        clearInterval(timerID); // 타이머 중지
        timerID = null; // timerID 초기화
    }
};

function myCallback() {
    count++;
    postMessage(count); // 카운트 값을 워커 객체로 전송
}