/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
//var for months and days
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
        "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//---
    function showDay(dt) {
        return days[dt.getDay()];
    }

    dt = new Date();

    let showday = showDay(dt);

    function showMonths(md){
        return months[md.getMonth()];
    }
    md = new Date();
    let whatYear = new Date().getFullYear();

    let whatMonth = showMonths(md);

    let whatDay = new Date().getDate();

    let whatHour = new Date().getHours();

    let whatMinute = new Date().getMinutes();

    let whatSecond = new Date().getSeconds();

    document.getElementById("target").innerHTML =
        showday + " " + whatDay +  " " + whatMonth + " " +  whatYear + ", "  + whatHour + ":" + whatMinute + ":" + whatSecond;

})();
