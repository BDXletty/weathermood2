'use strict';

/**
 * The AngularJS weatherMood app
 */
/*var app = angular.module('app', []);
app.controller('myCtrl', function ($scope,$http,$q,$log) {
}*/
var app = angular.module('weatherMoodApp', []);
app.controller('myCtrl', function ($scope, $http) {

  $scope.cityInfos = {};
  $scope.getByTown = function () {

    $http({
      method: "GET",
      url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.town + "&cnt=14&mode=json&units=metric&lang=fr&appid=9360212d025fae31678060ca5d7c0c1b",
    }).then(function mySucces(response) {
      $scope.myWelcome = response;

      /* Debug visualisation de l'objet et de ses propriétés */

      console.log(response);
      console.log(response.data.city.name);
      console.log(response.data.list[0].temp.day);
      console.log(response.data.list[0].weather[0].description);
      console.log(response.data.list[0].weather[0].main)
      console.log(response.data.list[0].weather[0].icon);

      /*----------------------------------------------------------------------------*/
      /* Création de l'objet à retourner avec les 2 propriétés description En et Fr */

      $scope.cityInfos['name'] = response.data.city.name;
      $scope.cityInfos['temp'] = response.data.list[0].temp.day + "°C";
      $scope.cityInfos['description'] = response.data.list[0].weather[0].description;
      $scope.cityInfos['mainDescription'] = response.data.list[0].weather[0].main;
    }, function myError(response) {
      $scope.myWelcome = response.statusText;
      alert("Ceci n'est pas une ville connue");
    });
    // console.log(cityInfos);

    $scope.getPlaylistId = function (obj){
    $scope.weatherCond = obj.description;

    $scope.weatherTemp = obj.temp; //j'extrais la description de la météo (en français)
    console.log(weatherCond);
    $scope.playlistId = "";
    if (weatherCond.search('#sol#') != -1) {
      $scope.playlistId = 2964030722;
    };
    if (weatherCond.search('#nuag#') != -1) {
      $scope.playlistId = 2964031442;
    };
    if (weatherCond.search('#plu#') != -1) {
      $scope.playlistId = 2964029742;
    };
    if (weatherCond.search('#orag#') != -1) {
      $scope.playlistId = 2964032522;
    };
    if (weatherTemp < 0) {
      $scope.playlistId = 2964034242;
    };
}
    return $scope.cityInfos;
  }


  });


