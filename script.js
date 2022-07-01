const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countdown() {
  const newYearsDate = new Date(
    "01 Jan 2022 00:00:00",
  ).getTime();
  const currentDate = new Date().getTime();
  const gap = currentDate - newYearsDate;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const textDays = Math.floor(gap / days);
  const texthours = Math.floor((gap % days) / hours);
  const textMintues = Math.floor((gap % hours) / minutes);
  const textSeconds = Math.floor((gap % minutes) / seconds);

  daysEl.innerHTML = textDays;
  hoursEl.innerHTML = texthours;
  minsEl.innerHTML = textMintues;
  secondsEl.innerHTML = textSeconds;
}

setInterval(countdown, 1000);
