(function(window, google){

//map options
var options = {
  center:{
    lat: 51.51279,
    lng: -0.09184
  },
  zoom: 10
}
element = document.getElementById('map-canvas'),
//map
map = new google.maps.Map(element, options);

}(window, google));
