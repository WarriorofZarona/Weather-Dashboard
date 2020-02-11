$(document).ready(function () {

    var apiKey = "8c20fecf1dc12b4c826b47b8de6dbee6"

    var city = "New York"

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    $.ajax({

        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })

})