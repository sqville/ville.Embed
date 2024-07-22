<?php

$directory = 'node_modules/@fluentui/svg-icons/icons';
$outputbasedir = 'source/class/ville/embed/fluent/';
$endswithbasestr = "_regular.svg";
$templatedirectory = 'templates/';
$templatefile = file_get_contents('templates/fui.bundle.icon.tmpl.js');
$templatefilecode = file_get_contents('templates/fui.appcode.tmpl');
$templateprepcode = file_get_contents('templates/fui.appcode.gb.tmpl');
$apptxtfile = 'fui.appcode.txt';

if (!is_dir($directory)) {
    exit('Invalid diretory path');
}

$limitcount = 0;

foreach (scandir($directory) as $file) {
    if ($file !== '.' && $file !== '..') {
        if (is_dir($directory.'/'.$file)) {
            
            // directory prep code
            //mkdir($outputbasedir.$file);
            //$file = str_replace('-', '', $file);
            //writePrepCodetoFile($file);

            $endswithstr = $endswithbasestr;
            if ($file == "ar" or $file == "he")
                $endswithstr = "_24".$endswithstr;
            else
                $endswithstr = "_20".$endswithstr;

            $subdirectory = $directory.'/'.$file;
            foreach (scandir($subdirectory) as $subfile) {
                if (str_ends_with($subfile, $endswithstr)) {
                    createIconObjFile($subfile, $file);
                }
            }
            ++$limitcount;
        } else {
            if (str_ends_with($file, "_20".$endswithbasestr)) {
                createIconObjFile($file, null);
            }
        }
        ++$limitcount;
    }
    
    //if ($limitcount >= 6)
      //  break;
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


// FUNCTIONS

function createIconObjFile(string $file, ?string $fromdirname): void {
    global $directory, $outputbasedir, $templatefile;

    $subfolderns = "";
    $dotnotation = "";
    $curdirectory = $directory;
    if ($fromdirname) {
        $curdirectory = $curdirectory.'/'.$fromdirname;
        $subfolderns = str_replace('-', '', $fromdirname);
        $dotnotation = ".";
    }
    
    // get classname and remove underscore if any
    $allnames = explode("_",ucwords($file,"_"));
    $lastele = array_pop($allnames);
    $lastele = array_pop($allnames);

    $classname = implode($allnames);
    // get path d value
    $svgData = file_get_contents($curdirectory.'/'.$file);
    $svgregcontents = new SimpleXMLElement($svgData);
    $pathdregular = $svgregcontents->path->attributes()[0];

    $classtemplate = $templatefile;
    $classtemplate = str_replace('${{subfolderns}}', $subfolderns, $classtemplate);
    $classtemplate = str_replace('${{dotnotation}}', $dotnotation, $classtemplate);
    $classtemplate = str_replace('${{classname}}', $classname, $classtemplate);
    $classtemplate = str_replace('${{pathdregular}}', $pathdregular, $classtemplate);

    // check to see if there's a filled version
    $replacedfilename = str_replace("_regular.svg", "_filled.svg", $file);
    
    if (file_exists($curdirectory.'/'.$replacedfilename)){
        $filledfile = file_get_contents($curdirectory.'/'.$replacedfilename);
        $svgfilledcontents = new SimpleXMLElement($filledfile);
        $pathdfilled = $svgfilledcontents->path->attributes()[0];
        $classtemplate = str_replace('${{pathdfilled}}', $pathdfilled, $classtemplate);
    } else {
        $classtemplate = str_replace('${{pathdfilled}}', '', $classtemplate);
    }

    //echo "Hello: ".$classtemplate."\n";

    // write file
    if ($fromdirname) {
        $fromdirname = str_replace('-', '', $fromdirname);
        $outputFile = $outputbasedir.$fromdirname.'/'.$classname.'.js';
    } else
        $outputFile = $outputbasedir.$classname.'.js';

    if (!file_exists($outputFile)) {
        file_put_contents($outputFile, $classtemplate);
        addToAppCodeFile($classname, $subfolderns);
    }
}

function addToAppCodeFile(string $classname, string $subfolderns): void {
    global $templatefilecode, $apptxtfile;

    $strdot = "";
    if ($subfolderns !== "")
        $strdot = "."; 

    $appcodetemplate = $templatefilecode;
    $appcodetemplate = str_replace('${{subfolderns}}', $subfolderns, $appcodetemplate);
    $appcodetemplate = str_replace('${{dotnotation}}', $strdot, $appcodetemplate);
    $appcodetemplate = str_replace('${{iconobjname}}', $classname, $appcodetemplate);
    file_put_contents($apptxtfile, $appcodetemplate . "\n", FILE_APPEND);
    //echo "addToAppCodeFile: ".$classname."\n";
}

function writePrepCodetoFile(string $subfolderns): void {
    global $templateprepcode, $apptxtfile;

    $appcodetemplate = $templateprepcode;
    $appcodetemplate = str_replace('${{subfolderns}}', $subfolderns, $appcodetemplate);
    //$appcodetemplate = str_replace('${{iconobjname}}', $classname, $appcodetemplate);
    file_put_contents($apptxtfile, $appcodetemplate . "\n", FILE_APPEND);
    //echo "addToAppCodeFile: ".$classname."\n";
}

?>