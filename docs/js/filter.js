function filterMarkers(filter_name)
{
  for (feature of workshops_json.features)
  {
    if (feature.properties.name === filter_name)
    {
      var popup = new mapboxgl.Popup().setHTML(makeDetails(feature));
      var marker = new mapboxgl.Marker()
        .setLngLat(feature.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
      markers.push(marker)
    }
  }
}

function fillMarkers()
{
  clearMarkers()
  for (feature of workshops_json.features)
  {
    var popup = new mapboxgl.Popup().setHTML(makeDetails(feature));
    var marker = new mapboxgl.Marker()
      .setLngLat(feature.geometry.coordinates)
      .setPopup(popup)
      .addTo(map);
    markers.push(marker)
  }
}

function clearMarkers()
{
  for (marker of markers)
  {
    marker.remove();
  }
  markers = [];
}
