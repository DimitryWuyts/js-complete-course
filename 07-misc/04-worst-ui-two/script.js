/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
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
            var max = button.getAttribute("data-max");
            var min = button.getAttribute("data-min");
            var local = parseInt(button.innerText,10);
            if (local < max){
                local++;
                button.innerHTML = local;
            }
            else{
                button.innerHTML = min;
            }

            if (local < 10){
                button.innerHTML = "0" + local;
            }
            var one = document.getElementById("part-one")
                .innerHTML;
            var two = document.getElementById("part-two")
                .innerHTML;
            var three = document.getElementById("part-three")
                .innerHTML;
            var four = document.getElementById("part-four")
                .innerHTML;
            console.log(one);
            document.getElementById("target").innerHTML = one +
                two + three + four ;
        });
    });
})();