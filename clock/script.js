let hoursSpan = document.getElementById('hours');
let minutesSpan = document.getElementById('minutes');
let secondsSpan = document.getElementById('seconds');

function renderTime() {
    let now = new Date();
    // let [date, time, ms] = now.toISOString().split(/[T\.]/); // here is in UTC
    let [time, rest] = now.toTimeString().split(' '); // current TimeZone

    let [hours, minutes, seconds] = time.split(':');

    if (hoursSpan.textContent !== hours) {
        hoursSpan.textContent = hours;
    }
    if (minutesSpan.textContent !== minutes) {
        minutesSpan.textContent = minutes;
    }
    if (secondsSpan.textContent !== seconds) {
        secondsSpan.textContent = seconds;
    }
}

setInterval(renderTime, 1000);