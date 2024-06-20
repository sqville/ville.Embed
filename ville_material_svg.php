<?php

$topdirectory = 'node_modules/@material-design-icons/svg';
$directory = 'node_modules/@material-design-icons/svg/filled';
$templatedirectory = 'templates/';
$templatefile = file_get_contents('templates/material.icon.tmpl.js');
$templatefilecode = file_get_contents('templates/material.appcode.tmpl');
$apptxtfile = 'material.appcode.txt';

if (!is_dir($directory)) {
    exit('Invalid diretory path');
}

$limitcount = 0;
$totalcount = 0;
$totalmultichildcount = 0;
$totalfilledoutlinedmatchcount = 0;
$totalallmatchcount = 0;

$files = array();
foreach (scandir($directory) as $file) {
    if ($file !== '.' && $file !== '..') {
        // get classname and remove underscore if any
        $arrnamesvg = explode(".",$file);
        $allnames = explode("_",ucwords($arrnamesvg[0],"_"));
        //$lastele = array_pop($allnames);
        //$lastele = array_pop($allnames);

        $classname = implode($allnames);
        // echo $classname. "\n";
        

        // get path d value
        $svgData = file_get_contents($directory.'/'.$file);
        $svgregcontents = new SimpleXMLElement($svgData);
        // $pathdregular = $svgregcontents->path->attributes()[0];
        if ($svgregcontents->count() > 1 or $svgregcontents->path->count() == 0){
            // echo "NOPE ON THIS ONE \n";
            // ++$totalmultichildcount;
            echo $classname. "\n";
            continue;
        }
        ++$totalcount;
        //echo $svgregcontents->count();

        /*
        $classtemplate = $templatefile;
        $classtemplate = str_replace('${{classname}}', $classname, $classtemplate);
        $classtemplate = str_replace('${{pathdregular}}', $pathdregular, $classtemplate);
        */

        // check to see if there's other versions with single paths
        // $replacedfilename = str_replace("_20_regular.svg", "_20_filled.svg", $file);
        
        // outlined
        if (file_exists($topdirectory.'/'.'outlined'.'/'.$file)){
            $filledfile = file_get_contents($topdirectory.'/'.'outlined'.'/'.$file);
            $svgfilledcontents = new SimpleXMLElement($filledfile);
            //$pathdfilled = $svgfilledcontents->path->attributes()[0];
            //$classtemplate = str_replace('${{pathdfilled}}', $pathdfilled, $classtemplate);
            if ($svgfilledcontents->count() > 1 or $svgfilledcontents->path->count() == 0){
                // echo "NOPE ON THIS ONE \n";
                //++$totalfilledoutlinedmatchcount;
                continue;
            }
        }

        // round
        if (file_exists($topdirectory.'/'.'round'.'/'.$file)) {
            $filledfile = file_get_contents($topdirectory.'/'.'round'.'/'.$file);
            $svgfilledcontents = new SimpleXMLElement($filledfile);
            //$pathdfilled = $svgfilledcontents->path->attributes()[0];
            //$classtemplate = str_replace('${{pathdfilled}}', $pathdfilled, $classtemplate);
            if ($svgfilledcontents->count() > 1 or $svgfilledcontents->path->count() == 0){
                // echo "NOPE ON THIS ONE \n";
                //++$totalfilledoutlinedmatchcount;
                continue;
            }
        }

        // sharp
        if (file_exists($topdirectory.'/'.'sharp'.'/'.$file)) {
            $filledfile = file_get_contents($topdirectory.'/'.'sharp'.'/'.$file);
            $svgfilledcontents = new SimpleXMLElement($filledfile);
            //$pathdfilled = $svgfilledcontents->path->attributes()[0];
            //$classtemplate = str_replace('${{pathdfilled}}', $pathdfilled, $classtemplate);
            if ($svgfilledcontents->count() > 1 or $svgfilledcontents->path->count() == 0){
                // echo "NOPE ON THIS ONE \n";
                //++$totalfilledoutlinedmatchcount;
                continue;
            }
        }

        // twotone
        if (file_exists($topdirectory.'/'.'two-tone'.'/'.$file)) {
            $filledfile = file_get_contents($topdirectory.'/'.'two-tone'.'/'.$file);
            $svgfilledcontents = new SimpleXMLElement($filledfile);
            //$pathdfilled = $svgfilledcontents->path->attributes()[0];
            //$classtemplate = str_replace('${{pathdfilled}}', $pathdfilled, $classtemplate);
            if ($svgfilledcontents->count() > 1 or $svgfilledcontents->path->count() == 0){
                // echo "NOPE ON THIS ONE \n";
                //++$totalfilledoutlinedmatchcount;
                continue;
            }
        }
        ++$totalallmatchcount;
       // echo $classname. "\n";
    } 
    /*else {
            $classtemplate = str_replace('${{pathdfilled}}', '', $classtemplate);
        }*/

        /*

        // write file
        $outputFile = 'source/class/ville/embed/fluent/'.$classname.'.js';
        file_put_contents($outputFile, $classtemplate);

        // code for writing app code
        $appcodetemplate = $templatefilecode;
        $appcodetemplate = str_replace('${{iconobjname}}', $classname, $appcodetemplate);
        //echo $appcodetemplate . "\n";
        file_put_contents($apptxtfile, $appcodetemplate . "\n", FILE_APPEND);

        ++$limitcount;
        */
        
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

echo $totalcount. "\n";
//echo $totalmultichildcount. "\n";
//echo $totalfilledoutlinedmatchcount. "\n";

echo $totalallmatchcount. "\n";

echo "Extraction and writing complete!\n";

?>
