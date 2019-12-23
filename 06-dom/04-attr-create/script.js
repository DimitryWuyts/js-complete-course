/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let element = document.createElement("img");
    let attribute = document.getElementById("source").getAttribute("data-image");
    element.setAttribute("src", attribute);
    let c = document.getElementById("source");
    let b = document.querySelector(".material");
    let a = document.getElementById("target");
    c.removeAttribute("data-image");
    b.removeChild(c);
    a.appendChild(element);
})();