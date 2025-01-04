function openTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.style.display = 'none';
    });

    // Show the selected tab
    document.getElementById(tabName).style.display = 'block';
}

// Initialize ArcGIS Map
require(["@arcgis/core/WebMap", "@arcgis/core/views/MapView"], function(WebMap, MapView) {
    const webMap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
            id: "YOUR_ARCGIS_WEBMAP_ID" // Replace with your WebMap ID
        }
    });

    const view = new MapView({
        container: "arcgis-map",
        map: webMap,
        zoom: 5,
        center: [0, 0] // Set initial center [longitude, latitude]
    });
});

// Initialize Google Map
function initGoogleMap() {
    const map = new google.maps.Map(document.getElementById("google-map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

google.maps.event.addDomListener(window, 'load', initGoogleMap);