// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    console.log('window loaded');
    const takeOff = document.getElementById ("takeoff");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");

    const flightStatus = document.getElementById("flightStatus");
    const flightScreen = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");

    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const left = document.getElementById('left');
    const right = document.getElementById("right");
    
    const rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.left = 0;
    rocket.style.bottom = 0;

    takeOff.addEventListener('click', event => {
        window.confirm("Confirm that the shuttle is ready for takeoff.");
        flightStatus.innerHTML = "Shuttle in flight.";
        flightScreen.style.backgroundColor = "blue";
        shuttleHeight.innerHTML = "10,000";
    });

    land.addEventListener('click', event => {
        window.confirm("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        flightScreen.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocket.style.left = 0;
        rocket.style.bottom = 0;
    });

    abort.addEventListener("click", event => {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatus.innerHTML = "Mission aborted.";
            flightScreen.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocket.style.left = 0;
            rocket.style.bottom = 0;
        }
    });

    right.addEventListener("click", event => {
        //rocket.style.left = parseInt(rocket.style.left) +10 + "px";
        
        if (parseInt(rocket.style.left) >= 600) {
            rocket.style.left = "600px";
        } else {
            rocket.style.left = parseInt(rocket.style.left) +10 + "px";
        }
        console.log(rocket.style.left);
    });

    left.addEventListener("click", event => {
        if (parseInt(rocket.style.left) <= -10) {
            rocket.style.left = "-10px";
        } else {
            rocket.style.left = parseInt(rocket.style.left) -10 + "px";
        }
    });

    up.addEventListener("click", event => {
        if (parseInt(rocket.style.bottom) >= 250) {
            rocket.style.bottom = "250px";
        } else {
            rocket.style.bottom = parseInt(rocket.style.bottom) +10 + "px";
        }
    });

    down.addEventListener("click", event => {
        if (parseInt(rocket.style.bottom) <= 0) {
            rocket.style.bottom = "0px";
        } else {
            rocket.style.bottom = parseInt(rocket.style.bottom) -10 + "px";
        }
    });

})
