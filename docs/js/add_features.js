//==============================================================================
var colors = ['#595', '#C33', '#358', '#449']
//==============================================================================
function addFeatures()
{
  var url = [
    "https://raw.githubusercontent.com/Edinburgh-College-of-Art/sample-data-sets/master/geojson/edinburgh_campus/buildings/lauriston_campus.json",
    "https://raw.githubusercontent.com/Edinburgh-College-of-Art/sample-data-sets/master/geojson/edinburgh_campus/fascilities/workshops.json"
  ];

  addBuildings(url[0]);
  addWorkshops(url[1]);
}
//==============================================================================

function makeDetails(feature)
{
  let detailsHtml = '';
  detailsHtml += '<h3>';
  detailsHtml += (feature.properties.link) ? '<a href="' + feature.properties.link + '" target="_blank">' + feature.properties.name + '</a>' : feature.properties.name
  detailsHtml += '</h3>';
  detailsHtml += (feature.properties.room) ? '<strong> Room: ' + feature.properties.room + '</strong>' : '';
  detailsHtml += (feature.properties.notes) ? '<p>' + feature.properties.notes + '</p>' : '';

  return detailsHtml;
}
//==============================================================================
function addWorkshops(url)
{
  $.getJSON(url, function(json)
  {
    workshops_json = json;
    map.addLayer(
    {
      "id": "workshops",
      "type": "symbol",
      "source":
      {
        "type": "geojson",
        "data": json
      },
      "layout":
      {
        "icon-image": "marker-11",
        "icon-padding": 0,
        "icon-offset": [0, -5],
        "icon-size": 3,
        "icon-allow-overlap": true
      }
    });

    var workshop_names = [];
    json.features.forEach(function(feature)
    {
      var popup = new mapboxgl.Popup().setHTML(makeDetails(feature));
      var marker = new mapboxgl.Marker()
        .setLngLat(feature.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
      markers.push(marker)
      workshop_names.push(feature.properties.name);
    });

    function onlyUnique(value, index, self)
    {
      return self.indexOf(value) === index;
    }
    autocomplete(document.getElementById('search_input'), workshop_names.filter(onlyUnique));
  })
};
//==============================================================================
function addPolygon(feature, i)
{
  if (feature.properties.name)
  {
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

function addBuildings(url)
{
  $.getJSON(url, function(json)
  {    
    map.addLayer(
    {
      'id': 'buildings',
      'type': 'fill',
      'source':
      {
        'type': 'geojson',
        'data': json
      },
      'layout':
      {},
      'paint':
      {
        'fill-color': colors[3],
        'fill-opacity': 0.5
      }
    });

  });
}
//==============================================================================
