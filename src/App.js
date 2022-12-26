import { useEffect, useState } from "react";
import "./App.css";
import useRWD from "./hooks/useRWD";

function App() {
  const [timerStr, setTimerStr] = useState("");
  const device = useRWD();

  useEffect(() => {
    setTimerStr(getCount());
    const countDownTimer = setInterval(() => {
      setTimerStr(getCount());
    }, 1000);
    return () => {
      clearInterval(countDownTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCount = () => {
    const retiredDate = new Date(2023, 3, 5, 18, 0, 0);
    const nowDate = new Date();
    const divTime = retiredDate - nowDate;
    if (divTime <= 0) return "退伍啦！";
    let leftDay = Math.floor(divTime / 1000 / 60 / 60 / 24);
    let leftHour = Math.floor((divTime / 1000 / 60 / 60) % 24);
    let leftMinute = Math.floor((divTime / 1000 / 60) % 60);
    let leftSec = Math.floor((divTime / 1000) % 60);

    leftHour = leftHour < 10 ? `0${leftHour}` : leftHour;
    leftDay = leftDay < 10 ? `0${leftDay}` : leftDay;
    leftMinute = leftMinute < 10 ? `0${leftMinute}` : leftMinute;
    leftSec = leftSec < 10 ? `0${leftSec}` : leftSec;

    switch (device) {
      case "mobile":
        return `剩餘
    ${leftDay} 天 ${leftHour} 小時
    ${leftMinute} 分鐘 ${leftSec} 秒`;
      case "tablet":
      case "desktop":
      default:
        return `剩餘 ${leftDay} 天  ${leftHour} 小時 ${leftMinute} 分鐘 ${leftSec} 秒`;
    }
  };

  return (
    <div className="root">
      <div className="card">
        <div className="title">品儒退伍倒數器</div>
        <div className="timer">{timerStr}</div>
      </div>
    </div>
  );
}

export default App;
