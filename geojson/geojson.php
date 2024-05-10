<?php
// GEOJSON-file directory
$geojsonDir = './';

$subdir = $_GET['gs'];

switch ($subdir) {
    case 'tn':
        $geojsonDir = './tn';
        break;
    case 'tt':
        $geojsonDir = './tt';
        break;
    case 'it':
        $geojsonDir = './it';
        break;
    default:
        $geojsonDir = './tn';
        break;
}

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