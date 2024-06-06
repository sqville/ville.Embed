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

$directory = 'node_modules/@fluentui/svg-icons/icons';
$templatedirectory = 'templates/';
$templatefile = file_get_contents('templates/fluentui.icon.tmpl.js');
$templatefilecode = file_get_contents('templates/fluentui.appcode.tmpl');
$apptxtfile = 'fluentui.appcode.txt';

if (!is_dir($directory)) {
    exit('Invalid diretory path');
}

$limitcount = 0;

$files = array();
foreach (scandir($directory) as $file) {
    if ($file !== '.' && $file !== '..') {
        if (str_ends_with($file,'_20_regular.svg')) {
            // get classname and remove underscore if any
            $allnames = explode("_",ucwords($file,"_"));
            $lastele = array_pop($allnames);
            $lastele = array_pop($allnames);

            $classname = implode($allnames);
            // get path d value
            $svgData = file_get_contents($directory.'/'.$file);
            $svgregcontents = new SimpleXMLElement($svgData);
            $pathdregular = $svgregcontents->path->attributes()[0];

            $classtemplate = $templatefile;
            $classtemplate = str_replace('${{classname}}', $classname, $classtemplate);
            $classtemplate = str_replace('${{pathdregular}}', $pathdregular, $classtemplate);

            // check to see if there's a filled version
            $replacedfilename = str_replace("_20_regular.svg", "_20_filled.svg", $file);
            
            if (file_exists($directory.'/'.$replacedfilename)){
                $filledfile = file_get_contents($directory.'/'.$replacedfilename);
                $svgfilledcontents = new SimpleXMLElement($filledfile);
                $pathdfilled = $svgfilledcontents->path->attributes()[0];
                $classtemplate = str_replace('${{pathdfilled}}', $pathdfilled, $classtemplate);
            } else {
                $classtemplate = str_replace('${{pathdfilled}}', '', $classtemplate);
            }
            //var_dump($classtemplate);

            // write file
            $outputFile = 'source/class/ville/embed/fluent/'.$classname.'.js';
            file_put_contents($outputFile, $classtemplate);

            // code for writing app code
            $appcodetemplate = $templatefilecode;
            $appcodetemplate = str_replace('${{iconobjname}}', $classname, $appcodetemplate);
            //echo $appcodetemplate . "\n";
            file_put_contents($apptxtfile, $appcodetemplate . "\n", FILE_APPEND);

            ++$limitcount;
        }
    }
}

//read the entire string
$apptxtstr = file_get_contents($apptxtfile);

//replace something in the file string - this is a VERY simple example
$appcodefileloc = 'source/class/wax/demo/Application.js';
$appcodefile = file_get_contents($appcodefileloc);
$appcodefile = str_replace('//${{phpgenerated}}', $apptxtstr, $appcodefile);

//write the entire string
file_put_contents($appcodefileloc, $appcodefile);

//var_dump($files);
//var_dump(count($files));
//var_dump($svgData);

// Set the path to your SVG source files
//$jsonFile = 'fluentdark.json';

// Set the keys you want to extract from the JSON file
//$keysToExtract = ['$value'];

// Set the path to the output file
//$outputFile = '.js';
//$file = fopen("simpletest.txt","a");

// Read the JSON file
//$jsonData = file_get_contents($jsonFile);

// Decode the JSON data
//$data = json_decode($jsonData, true);

// Initialize the result array
//$result = "";

// Extract the specified keys and values from the JSON data
//$result = extractDataFromJson($data, $result, $keysToExtract);

// Write the result to the output file
//writeToOutputFile($result, $outputFile);

//fclose($file);

echo "Extraction and writing complete!\n";

?>
