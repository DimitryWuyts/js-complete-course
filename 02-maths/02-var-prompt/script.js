/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var username = prompt("Enter your name: ", "");
    if (confirm("Your name is " + username)) {
        document.write("<h1>Hello, " + username + "!</h1>");
    } else {
        document.write("<h1>Hello, world!</h1>");
    }
    // your code here

})();
