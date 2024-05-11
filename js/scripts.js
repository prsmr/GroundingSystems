        function getColor(gs) {
            return gs == "TN" ? '#2b8cbe' :
                   gs == "IT" ? '#beaed4' :
                   gs == "TT" ? '#fdc086' :
                               '#000000';
        }

        function style(feature) {
            return {
                fillColor: getColor(feature.properties.system),
                weight: 2,
                opacity: 1,
                color: getColor(feature.properties.system),
                fillOpacity: 0.3
            };
        }

        function onLocationFound(e) {
            var radius = e.accuracy;

            L.marker(e.latlng).addTo(map)
                .bindPopup("You are within " + radius + " meters from this point").openPopup();

            L.circle(e.latlng, radius).addTo(map);
        }

        function onLocationError(e) {
            alert(e.message);
        }            

        function highlightFeature(e) {
            var layer = e.target;

            layer.setStyle({
                weight: 5,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.7
            });

            layer.bringToFront();
        }

        function resetHighlight(e) {
            geojson.resetStyle(e.target);
        }