/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    var myText =
        "Je suis un texte qui va apparaître dans un effet \"machine à écrire\", un peu comme dans\n" +
        "                    les films noirs. Sauf que... je ne sais pas qui est l'assassin ! Y en a-t-il vraiment un ?\n" +
        "                    Habite-t-il au 21 ? Que de mystères !";
    var myArray = myText.split("");
    var timeLooper;


    function loop() {
        if (myArray.length > 0) {
            document.getElementById("target").innerHTML += myArray.shift();
        } else {
            clearTimeout(timeLooper);
        }

        var rand = Math.round(Math.random() * 500);
        timeLooper = setTimeout(loop, rand);
    }

    loop();
})();