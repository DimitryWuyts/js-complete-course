/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function () {
    var user
    user = prompt("would you like some cake?");

    if (user == "yes") {
        alert("congratulations!");
    }
    else if (user == "Yes") {
        alert("Congratz!");
    }
    else {
        alert("More cake for me then!");
    }

})();