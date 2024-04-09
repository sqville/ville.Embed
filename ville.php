<?php

$maintoken=""; 
$tokenstate="";
//$color="";

$keysToIgnore = ['Fill', 'Color', 'Stroke'];

$statekeys = ['Rest', 'Hover', 'Pressed', 'Selected', 'BrandHover', 'BrandPressed', 'BrandSelected', 'LightAlphaHover', 'LightAlphaPressed', 'LightAlphaSelected'];

function extractDataFromJson($data, $result, $keysToExtract)
{
    global $file, $result, $maintoken, $tokenstate, $keysToIgnore, $statekeys;
    
    foreach ($data as $key => $value) {
        if (is_array($value)) {
            if (!in_array($key, $keysToIgnore) and !in_array($key, $statekeys)) {
                $maintoken = $key;
            }
            if (!in_array($key, $keysToIgnore) and in_array($key, $statekeys)){
                $tokenstate = $key;
            }
            extractDataFromJson($value, $result, $keysToExtract);
        } else {
            if (in_array($key, $keysToExtract)) {
                
                $cleanstring = str_replace("{","",str_replace("}","",$value),$cleanhit);
                if ($cleanhit > 0) {
                    $cleanupgray = str_replace("Global.Color.Grey.","ville.global.color.Grey[",$cleanstring,$grayhit);   
                    $cleanupbrand = str_replace("Global.Color.Brand.","ville.global.color.Brand[",$cleanupgray,$brandhit);
                    $cleanupwhitealpha = str_replace("Global.Color.WhiteAlpha.","ville.global.color.WhiteAlpha[",$cleanupbrand,$whitealphahit);
                    $cleanupblackalpha = str_replace("Global.Color.BlackAlpha.","ville.global.color.BlackAlpha[",$cleanupwhitealpha,$blackalphahit);
                    $cleanupwhite = str_replace("Global.Color.White","ville.global.Color.White",$cleanupblackalpha,$whitehit);
                    $cleanupblack = str_replace("Global.Color.Black","ville.global.Color.Black",$cleanupwhite,$blackhit);
                    
                    if ($grayhit + $whitealphahit + $blackalphahit + $brandhit > 0) {
                        $cleanupblack = $cleanupblack . "]";
                    }
                    $value = $cleanupblack;
                }
                
                //$result[$maintoken . $tokenstate] = $value;

                $result = $maintoken . $tokenstate . " : " . $value . ",";

                fwrite($file,$result . PHP_EOL);
                

                //echo $maintoken . $tokenstate . " : " . $value . "\n";
            }
        }
    }

    return $result;
}

function writeToOutputFile($result, $outputFile)
{
    $jsonResult = json_encode($result, JSON_PRETTY_PRINT);
    file_put_contents($outputFile, $jsonResult);
}

// Set the path to your JSON input file
//$jsonFile = 'fluentlight.json';
$jsonFile = 'fluentdark.json';

// Set the keys you want to extract from the JSON file
$keysToExtract = ['$value'];

// Set the path to the output file
//$outputFile = 'simpletest.txt';
$file = fopen("simpletest.txt","a");

// Read the JSON file
$jsonData = file_get_contents($jsonFile);

// Decode the JSON data
$data = json_decode($jsonData, true);

// Initialize the result array
$result = "";

// Extract the specified keys and values from the JSON data
$result = extractDataFromJson($data, $result, $keysToExtract);

// CSS extract


// Write the result to the output file
//writeToOutputFile($result, $outputFile);

fclose($file);

echo "Extraction and writing complete!\n";

?>
