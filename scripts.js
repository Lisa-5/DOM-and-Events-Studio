// Write your JavaScript code here.
// Remember to pay attention to page loading!
// window.addEventListener("load", function() {
//      // put DOM code here to ensure elements have been loaded
//     console.log('window loaded');
//     const takeOff = document.getElementById ("takeoff");
//     let flightStatus = document.querySelector("#flightStatus");
//     console.log(takeOff);
//     takeOff.addEventListener('click', event => {window.confirm("Confirm that the shuttle is ready for takeoff.");
//     flightStatus.innerHTML = "<p>Shuttle in flight.</p>";
// })
// })
window.addEventListener("load", function() {
console.log('window loaded');
    const takeOff = document.getElementById ("takeoff");
    let flightStatus = document.querySelector("#flightStatus");
    console.log(takeOff);
    takeOff.addEventListener('click', event => {window.confirm("Confirm that the shuttle is ready for takeoff.");
    flightStatus.innerHTML = "<p>Shuttle in flight.</p>";
})
})
