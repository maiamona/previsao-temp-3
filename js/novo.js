let file = "https://api.openweathermap.org/data/2.5/weather?q=luanda&appid=6c55e8395c583956a1084ea91d2a0d3b"

//para angularjs
// $.get("https://api.openweathermap.org/data/2.5/weather?q=luanda&appid=6c55e8395c583956a1084ea91d2a0d3b", function(data, status){
//     $scope.Wheather = data;
//   });

fetch(file)
.then((response)=>response.json())
.then((data)=>{


})