link ="http://api.openweathermap.org/data/2.5/weather?q=seattle&appid=b429b55007c4cb3885acfb410244c6bc"
var request = new XMLHttpRequest();
request.open('GET',link, true);
request.onload = function(){
  var obj = JSON.parse(this.response);
  console.log(obj); 
  document.getElementById('weather').innerHTML = obj.weather[0].description; 
  document.getElementById('location').innerHTML = obj.name; 
  document.getElementById('temp').innerHTML = obj.main.temp - 273.15; 
  document.getElementById('icon').src="http://openweathermap.org/img/w"+obj.weather[0].icon+".png"; 
}

 if(request.status==200){
  console.log("ERROR");
}
request.send();