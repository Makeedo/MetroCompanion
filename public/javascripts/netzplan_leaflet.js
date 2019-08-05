var map = L.map('netzplan', {
    minZoom: 1,
    maxZoom: 10,
    center: [0, 0],
    zoom: 6,
    crs: L.CRS.Simple
});

// dimensions of the image
var w = 4935,
    h = 3564,
    url = '../images/vienna.png';

// calculate the edges of the image, in coordinate space
var southWest = map.unproject([0, h], map.getMaxZoom()-1);
var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
var bounds = new L.LatLngBounds(southWest, northEast);

// add the image overlay,
// so that it covers the entire map
L.imageOverlay(url, bounds).addTo(map);

// tell leaflet that the map is exactly as big as the image
map.setMaxBounds(bounds);