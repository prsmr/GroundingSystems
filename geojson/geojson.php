<?php
// GEOJSON-file directory
$geojsonDir = 'geojson';

// scan directory for files
$files = scandir($geojsonDir);

// filter for .geojson files
$geojsonFiles = array();
foreach ($files as $file) {
    // Nur GEOJSON-Dateien hinzufügen
    if (strpos($file, '.geojson') !== false) {
        $geojsonFiles[] = $file;
    }
}

// Output
header('Content-Type: application/json');
echo json_encode($geojsonFiles);
?>