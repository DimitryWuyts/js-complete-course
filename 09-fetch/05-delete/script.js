/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
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

            console.log(data.heroes);

            var array = data.heroes;

            document.getElementById("run").addEventListener("click", function(){


                var input = document.getElementById("hero-id").value;

                array.splice(input-1,1);

                console.log(data.heroes);

            })
        })

})();
