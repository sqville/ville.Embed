<?php

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

            // write file
            $outputFile = 'source/class/ville/embed/fluent/'.$classname.'.js';
            file_put_contents($outputFile, $classtemplate);

            // code for writing app code
            /*
            $appcodetemplate = $templatefilecode;
            $appcodetemplate = str_replace('${{iconobjname}}', $classname, $appcodetemplate);
            file_put_contents($apptxtfile, $appcodetemplate . "\n", FILE_APPEND);
            */

            ++$limitcount;
        }
    }
}

// START Update the Application.js with demos of each icon
//read the entire string
// $apptxtstr = file_get_contents($apptxtfile);

//replace something in the file string - this is a VERY simple example
// $appcodefileloc = 'source/class/wax/demo/Application.js';
// $appcodefile = file_get_contents($appcodefileloc);
// $appcodefile = str_replace('//${{phpgenerated}}', $apptxtstr, $appcodefile);

//write the entire string
// file_put_contents($appcodefileloc, $appcodefile);

// END of Application.js file update

//var_dump($files);
//var_dump(count($files));
//var_dump($svgData);

echo "Extraction and writing complete!\n";

?>
