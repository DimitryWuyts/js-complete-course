/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //button
    document.getElementById("run").addEventListener("click", function () {
        let results = document.querySelectorAll("td");

        let array = [];
        //loop
        for (i = 0; i < 10; i++) {
            let random = Math.floor(Math.random()*100) + 1;
            array.push(random);
            results[i].innerHTML = array[i];
        }

        document.getElementById("min").innerHTML = Math.min(...array);
        document.getElementById("max").innerHTML = Math.max(...array);
        document.getElementById("sum").innerHTML = array.reduce((a, b) => a + b, 0);
        document.getElementById("average").innerHTML = array.reduce((a,b) => a + b, 0) / array.length;
    })

})();
