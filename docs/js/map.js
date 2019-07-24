var ecaLauristonCoordinates = [-3.1987, 55.9456];
var nicePitch = 55;
var niceBearing = 33;
var niceZoom = 17;
//==============================================================================
mapboxgl.accessToken = 'pk.eyJ1IjoibWhhbWlsdCIsImEiOiJjamgwbTNzMjIwYjlnMnlsY3pmYmpmaXF4In0.I0MFX6B37frj28B5qkhp9g';
var map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v9',
    center: ecaLauristonCoordinates,
    zoom: niceZoom,
    // pitch: nicePitch,
    // bearing: niceBearing,
    // maxBounds: bounds,
    // interactive: false,
    // hash: false,
    container: 'map'
});
// map.addControl(new mapboxgl.FullscreenControl());
// var geocoder = new MapboxGeocoder(
// {
//   accessToken: mapboxgl.accessToken,
//   mapboxgl: mapboxgl
// });
//
// document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: false
    },
    trackUserLocation: false
}));

//==============================================================================
// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function() {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

});
