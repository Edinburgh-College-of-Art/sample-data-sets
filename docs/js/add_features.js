var url = [
  "https://raw.githubusercontent.com/Edinburgh-College-of-Art/sample-data-sets/master/geojson/edinburgh_campus/buildings/lauriston_campus.json",
  "https://raw.githubusercontent.com/Edinburgh-College-of-Art/sample-data-sets/master/geojson/edinburgh_campus/fascilities/workshops.json"
];

var colors = ['#595', '#C33', '#358', '#449']
for (var i = 0; i < url.length; i++)
{
  $.getJSON(url[i], function(data)
  {
    for (var i = 0; i < data.features.length; i++)
    {
      switch (data.features[i].geometry.type)
      {
        case "Point":
          addPoint(data.features[i])
          break;
        case "Polygon":

          addPolygon(data.features[i], i)
          break;
        default:

      }

    }
  });
}

function addPoint(feature)
{
  var popup = new mapboxgl.Popup().setHTML('<h3><a href="'+ feature.properties.link + '" target="_blank">' + feature.properties.name + '</a></h3>');
  var marker = new mapboxgl.Marker()
    .setLngLat(feature.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);
};

function addPolygon(feature, i)
{
  if (feature.properties.name)
  {
    console.log(feature.properties.name);
    map.addLayer(
    {
      'id': feature.properties.name,
      'type': 'fill',
      'source':
      {
        'type': 'geojson',
        'data': feature
      },
      'layout':
      {},
      'paint':
      {
        'fill-color': colors[i % colors.length],
        'fill-opacity': 0.5
      }
    });
  }
};
