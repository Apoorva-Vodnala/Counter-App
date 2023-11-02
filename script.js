const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");
const updateCountDown = (deadline) => {
  const currentTime = new Date();
  const timeDifference = deadline - currentTime; //millisec
  // calculate days,hours,mins,secs from time difference
  let calSecs = Math.floor(timeDifference / 1000) % 60;
  let calMins = Math.floor(timeDifference / 1000 / 60) % 60;
  let calHours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
  let calDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
  days.textContent = formatTime(calDays);
  hours.textContent = formatTime(calHours);
  mins.textContent = formatTime(calMins);
  secs.textContent = formatTime(calSecs);
  // console.log(timeDifference);
  // console.log(days)
};
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
const countDown = (targetDate) => {
  setInterval(() => updateCountDown(targetDate), 1000);
};
const targetDate = new Date("January 01 2024 12:00");
countDown(targetDate);
