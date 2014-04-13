/// <reference path="Scripts/jquery-2.1.0.js" />
var map;
var x = 40.4165;
var y = -3.702;
var info = "Capital of Spain";
var currentCity = 0;

var cities = [{ "name": "Madrid", "latitude": "40.4165", "longitude": "-3.702", "info": "Capital of Spain" },
              { "name": "London", "latitude": "51.508", "longitude": "-0.126", "info": "Capital of England" },
              { "name": "Paris", "latitude": "48.8", "longitude": "2.33", "info": "Capital of France" },
              { "name": "Rome", "latitude": "41.9", "longitude": "12.45", "info": "Capital of Italy" },
              { "name": "Budapest", "latitude": "47.5", "longitude": "19.08", "info": "Capital of Hungary" }];

function initialize() {
    var myLatLng = new google.maps.LatLng(x, y);
    var mapOptions = {
        zoom: 4,
        //center: new google.maps.LatLng(x, y)
        center: myLatLng
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    for (var i = 0; i < cities.length; i++) {
        var infowindow = new google.maps.InfoWindow({
            map: map,
            position: new google.maps.LatLng(cities[i].latitude, cities[i].longitude),
            content: cities[i].info
        });
    }

    createListOfCities();
}

function createListOfCities() {
    var listOfCities = "";
    var citiesListUl = $("#cities-list");

    for (var i = 0; i < cities.length; i++) {
        var cityName = cities[i].name;
        listOfCities += "<li data-position='" + i + "'>" +  cityName +  "</li>";
    }

    citiesListUl.html(listOfCities);

    $("ul").on("click", function (ev) {
        currentCity = $(ev.target).attr("data-position");
        x = cities[currentCity].latitude;
        y = cities[currentCity].longitude;
        var position = new google.maps.LatLng(x, y);
        map.setZoom(6);
        map.panTo(position);
    });
}

$("#prev").on("click", function () {
    currentCity--;
    if (currentCity == -1) {
        currentCity = cities.length - 1;
    }
    x = cities[currentCity].latitude;
    y = cities[currentCity].longitude;
    var position = new google.maps.LatLng(x, y);
    map.setZoom(6);
    map.panTo(position);
});

$("#next").on("click", function () {
    currentCity++;
    if (currentCity == cities.length) {
        currentCity = 0;
    }
    x = cities[currentCity].latitude;
    y = cities[currentCity].longitude;
    var position = new google.maps.LatLng(x, y);
    map.setZoom(6);
    map.panTo(position);
});

google.maps.event.addDomListener(window, 'load', initialize);

