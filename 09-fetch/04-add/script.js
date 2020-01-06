/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    fetch("http://localhost:63342/js-complete-course/_shared/api.json")
        .then(function(response){
            return response.json();
        })

        .then(function(data){

            var array = data.heroes;

            document.getElementById("run").addEventListener("click", function(){


                var num = array.length + 1;
                var name = document.getElementById("hero-name").value;
                var alter = document.getElementById("hero-alter-ego").value;
                var power = document.getElementById("hero-powers").value;
                power = power.split(", ");

                array.push({"id": num, "name": name, "alterEgo": alter, "abilities": power});

                console.log(array);

            })
        })
})();
