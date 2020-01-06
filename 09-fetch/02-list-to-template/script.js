/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function(){

        fetch("http://localhost:63342/js-complete-course/_shared/api.json")
            .then(function(response){
                return response.json();
            })
            .then(function(data){

                console.log(data.heroes);

                data.heroes.forEach(function(hero){
                    var temp = document.getElementById
                    ("tpl-hero").content.cloneNode(true);
                    temp.querySelector(".name").innerHTML = hero.name;
                    temp.querySelector(".alter-ego").innerHTML =
                        hero.alterEgo;
                    temp.querySelector(".powers").innerHTML = hero
                        .abilities;

                    document.getElementById("target").appendChild
                    (temp);

                })
            })
    })

})();

