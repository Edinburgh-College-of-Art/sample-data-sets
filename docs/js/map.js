var ecaLauristonCoordinates = [-3.1987, 55.9456];
var nicePitch = 55;
var niceBearing = 33;
var niceZoom = 17;
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
//==============================================================================
// Map Controls
map.addControl(new mapboxgl.FullscreenControl());
//==============================================================================
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
var markers = [];
var workshops_json;
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
//==============================================================================
map.on('load', function()
{
  addFeatures();

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
  
  //----------------------------------------------------------------------------
  // Mouse Functions
  map.on('moveend', function()
  {
    var features = map.queryRenderedFeatures(
    {
      layers: ['workshops']
    });
  });

});
