/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function(){

        let a = document.getElementById("year").value;
        let marks = "";
// var for months
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//---
        for (m = 0; m < 12; m++){
            let years = new Date(a, m, 13);
            if (years.getDay() === 5){
                marks += months[years.getMonth()] + "\n";
            }

        }
// alert
        alert(marks);


    })

})();
