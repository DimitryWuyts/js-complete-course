/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //var images

    let gallery = [
        "../../_shared/img/map.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let image = document.querySelector("img");
    let i = 0;

    document.getElementById("next").addEventListener("click", function () {

        //if statement

        if (i < 4){
            i++;
            image.setAttribute("src",  gallery[i]);
        } else {
            i = 0;
            image.setAttribute("src", gallery[i]);
        }

    })

})();
