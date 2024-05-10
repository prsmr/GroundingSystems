        // Load and add a single GEOJSON-file
        function loadGeoJSON(filePath, col) {
            fetch(filePath)
                .then(response => response.json())
                .then(data => {

                    var geojsonLayer = L.geoJSON(data, {
                        style: function (feature) {
                            return {
                                color: col,
                                weight: 2,
                                opacity: 0.3
                            };
                        }
                    });

                    // add to map
                    geojsonLayer.addTo(map);
                })
                .catch(error => {
                    console.error('Error loading GEOJSON file:', error);
                });
        }

            // Funktion zum Laden aller GEOJSON-Dateien aus dem angegebenen Ordner
            function loadAllGeoJSONFiles(gs) {
                const apiUrl = `./geojson/geojson.php?gs=${gs}`;

                // load filellist from API
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(fileList => {
                        // Laden jeder GEOJSON-Datei in der Liste
                        fileList.forEach(fileName => {
                            const filePath = `./geojson/${gs}/${fileName}`;

                            let color;
                            switch (gs) {
                                case 'tn':
                                    color = 'blue';
                                    break;
                                case 'tt':
                                    color = 'green';
                                    break;
                                case 'it':
                                    color = 'red';
                                    break;
                                default:
                                    color = 'black';
                                    break;
                            }             

                            loadGeoJSON(filePath, color);
                        });
                    })
                    .catch(error => {
                        console.error('Error loading file list:', error);
                    });
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