function putValue(input) {
    var div = document.getElementById("input");
    div.value = input;
}

function fetchAPI(input) {
    fetch('https://app.pokemon-api.xyz/' + input)
        .then(response => response.json())
        .then(data => {
            var div = document.getElementById("pokeData");
            $(div).empty();
            poke = JSON.stringify(data, null, 4);
            var div = document.getElementById("pokeData");
            $(div).append(poke);
        })
        .catch(err => {
            console.error(err)
        });
    var form = document.getElementById("poke-form");
    form.reset();
}


function fetchFrontAPI(input) {
    fetch('https://app.pokemon-api.xyz/' + input)
        .then(response => response.json())
        .then(data => {
            var div = document.getElementById("pokeData");
            $(div).empty();
            poke = JSON.stringify(data, null, 4);
            var div = document.getElementById("pokeData");
            $(div).append(poke);
        })
        .catch(err => {
            console.error(err)
        });
    var form = document.getElementById("poke-form");
    form.reset();
}