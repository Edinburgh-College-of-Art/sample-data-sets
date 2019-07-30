var ecaLauristonCoordinates = [-3.1987, 55.9456];
var nicePitch = 55;
var niceBearing = 33;
var niceZoom = 17;
var markers = [];
//==============================================================================
mapboxgl.accessToken = 'pk.eyJ1IjoibWhhbWlsdCIsImEiOiJjamgwbTNzMjIwYjlnMnlsY3pmYmpmaXF4In0.I0MFX6B37frj28B5qkhp9g';
var map = new mapboxgl.Map(
{
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
map.addControl(new mapboxgl.FullscreenControl());
// var geocoder = new MapboxGeocoder(
// {
//   accessToken: mapboxgl.accessToken,
//   mapboxgl: mapboxgl
// });
//
// document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl(
{
  positionOptions:
  {
    enableHighAccuracy: false
  },
  trackUserLocation: false
}));

//==============================================================================
var search_element = document.getElementById('geocoder');
var feature_list = [];
//==============================================================================
function renderListings(features)
{
  // listingEl.innerHTML = ''; // Clear any existing listings
  if (features.length)
  {
    // features.forEach(function(feature)
    // {
    //   var prop = feature.properties;
    //   let popup = new mapboxgl.Popup(
    //   {
    //     closeButton: false
    //   });
    //   popup.setLngLat(feature.geometry.coordinates)
    //     .setText(feature.properties.name + ' (' + feature.properties.abbrev + ')')
    //     .addTo(map);
  };
  // listingEl.appendChild(item);
};

// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', function()
{
  addFeatures();
  // Insert the layer beneath any symbol layer.
  // var layers = map.getStyle().layers;
  //
  // var labelLayerId;
  // for (var i = 0; i < layers.length; i++)
  // {
  //   if (layers[i].type === 'symbol' && layers[i].layout['text-field'])
  //   {
  //     labelLayerId = layers[i].id;
  //     break;
  //   }
  // }  
  // console.log(layer);
  // if (features)
  // {
  //   var uniqueFeatures = getUniqueFeatures(features, "iata_code");
  //   // Populate features for the listing overlay.
  //   renderListings(uniqueFeatures);
  //
  //   // Clear the input container
  //   filterEl.value = '';
  //
  //   // Store the current features in sn `airports` variable to
  //   // later use for filtering on `keyup`.
  //   airports = uniqueFeatures;
  // }
  //----------------------------------------------------------------------------
  // Search Bar
  search_element.addEventListener('keyup', function(e) {});
  //----------------------------------------------------------------------------
  // Mouse Functions
  map.on('moveend', function()
  {
    var features = map.queryRenderedFeatures(
    {
      layers: ['workshops']
    });
    console.log(features);
  });

  map.on('mousedown', function()
  {
    for (marker of markers)
    {
      marker.remove();
    }
  });

  map.on('mouseup', function()
  {
    for (marker of markers)
    {
      marker.addTo(map);
    }
  });

});
