/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let table = document.createElement("table");
    let target = document.getElementById("target");

    //loop

    for (let i = 1; i < 11; i++){
        let row = document.createElement("tr");

        //loop2

        for (let b = 1; b < 11; b++){
            let cel = document.createElement("td");
            let content = document.createTextNode(" " + i*b);
            cel.appendChild(content);
            row.appendChild(cel);
        }
        table.appendChild(row);
    }
    target.appendChild(table);

})();

