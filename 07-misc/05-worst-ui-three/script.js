/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementById("target").innerText = "460000000";
    var button = document.querySelectorAll("button");


        button.forEach((button) => {
        button.addEventListener('click', () => {

            var input = button.previousSibling.previousSibling;
            var max = Number(input.getAttribute("data-max"));
            var min = Number(input.getAttribute("data-min"));
            var math = Math.floor(Math.random() * (max - min + 1)) + min ;

            input.value = math;
            if (math < 10){
             input.value = "0" + math;
            }

            var one = document.getElementById("part-one").value;
            var two = document.getElementById("part-two").value;
            var three = document.getElementById("part-three").value;
            var four = document.getElementById("part-four").value;

            document.getElementById("target").innerHTML = one + two + three + four ;
        });
    });
})();