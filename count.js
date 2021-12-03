const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

const weekdays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thr",
    "Fri",
    "Sat"
];

const giveAway = document.querySelector(".give-away");
const counterClock = document.querySelector(".counter-clock");
const items = document.querySelectorAll(".item");

let counterDate = new Date(2021, 11, 20, 11, 59, 0);

const year = counterDate.getFullYear();
const hours = counterDate.getHours();
const minutes = counterDate.getMinutes();

let month = counterDate.getMonth();
month = months[month];

let weekday = counterDate.getDay();
weekday = weekdays[weekday];

const date = counterDate.getDate();

giveAway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

const counterTime = counterDate.getTime();

function getRemainingTime(){

    const todayTime = new Date().getTime();

    const remainingTime = counterTime - todayTime;

    const oneDay = 24 * 60 * 60 * 1000;

    const oneHour = 60 * 60 * 1000;

    const oneMinute = 60 * 1000;

    let days = remainingTime / oneDay;
    days = Math.floor(days);

    let hours = (remainingTime % oneDay) / oneHour;
    hours = Math.floor(hours);

    let minutes = (remainingTime % oneHour) / oneMinute;
    minutes = Math.floor(minutes);

    let seconds = (remainingTime % oneMinute) / 1000;
    seconds = Math.floor(seconds);

    const myValues = [days, hours, minutes, seconds];

    function format(item){
        if(item < 10){
            return (item = `0${item}`);
        }
        else{
            return item
        }
    }
    items.forEach(function(item, index){
        item.innerHTML = format(myValues[index]);
    });

    if(remainingTime < 0){
        clearInterval(countdown);
        counterClock.innerHTML = `<h4>Sorry, this giveaway has expired!</h4>`
    }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();