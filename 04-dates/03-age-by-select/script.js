/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        // variable(s)
        let days= document.getElementById("dob-day").value;
        let months = document.getElementById("dob-month").value;
        let years = document.getElementById("dob-year").value;
        let dateString = days + "/" + months + "/" + years;
        let toDate = new Date(dateString);
        dateString = toDate.getFullYear() + "/" + toDate.getMonth() + "/" + toDate.getDate();

        //calculations

        function getAge(birthdateString)
        {
            var today = new Date();
            var birthDate = new Date(birthdateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
            {
                age--;
            }
            return age;
        }
        alert(getAge(toDate))

    });


})();
