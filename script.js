let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');
let isPaused = false; 

let workTime = 25;
let breakTime = 5;

let seconds = "00";

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

// start timer
function start() {
    // change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // countdown
    let timerFunction = () => {
        if (!isPaused) { // Check if the timer is not paused
            // Update the display
            document.getElementById('minutes').innerHTML = workMinutes;
            document.getElementById('seconds').innerHTML = seconds;
    
            // Countdown logic
            seconds = seconds - 1;
    
            if (seconds === 0) {
                workMinutes = workMinutes - 1;
                if (workMinutes === -1) {
                    if (breakCount % 2 === 0) {
                        // Start break
                        workMinutes = breakMinutes;
                        breakCount++;
    
                        // Change the painel
                        workTittle.classList.remove('active');
                        breakTittle.classList.add('active');
                    } else {
                        // Continue work
                        workMinutes = workTime;
                        breakCount++;
    
                        // Change the painel
                        breakTittle.classList.remove('active');
                        workTittle.classList.add('active');
                    }
                }
                seconds = 59;
            }
        }
    }
    // start countdown
    setInterval(timerFunction, 1000); // 1000 = 1s
}

// pause function
function pause() {
    isPaused = !isPaused;  // Toggle pause
    document.getElementById('pause').innerHTML = isPaused ? '<i class="fa-solid fa-play"></i>' : '<i class="fa-solid fa-pause"></i>';
}