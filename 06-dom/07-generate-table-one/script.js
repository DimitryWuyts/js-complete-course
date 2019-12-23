/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let table = document.createElement("table");
    let target = document.getElementById("target");

    let row = document.createElement("tr");
    target.appendChild(row);

    for (i = 0; i < 10; i++){

        let data = document.createElement("td");
        let inTable = document.createTextNode("Tablecel");
        data.appendChild(inTable);
        row.appendChild(data);
    }
    target.appendChild(table);
})();
