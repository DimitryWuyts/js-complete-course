/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let validity = document.getElementById("validity");
    let write = document.getElementById("pass-one");

    write.addEventListener("input", function () {
        let number = 0;
        let num = write.value;
        let inputTotal = num.length;
        //loop
        for (i = 0; i < inputTotal; i++) {
        let char = num.charAt(i);
            //loop

            for (b = 0; b < 9; b++) {

                //if statement
                if (b === parseInt(char)) {
                    number++;
                }}}

        //if statement
        if ((inputTotal >= 8) && (number >= 2)) {
            validity.innerHTML = "Ok";
        }
        else
            validity.innerHTML = "Not Ok";
    });

})();
