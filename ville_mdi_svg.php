<?php

$topdirectory = 'node_modules/@mdi/svg/svg';
$directory = 'node_modules/@mdi/svg/svg';
//$directory = 'node_modules/@material-design-icons/svg/filled';
$templatedirectory = 'templates/';
$templatefilebundle = file_get_contents('templates/mdi.bundle.icon.tmpl.js');
$templatefilesingle = file_get_contents('templates/mdi.single.icon.tmpl.js');
$templatefilecode = file_get_contents('templates/mdi.appcode.tmpl');
$apptxtfile = 'mdi.appcode.txt';

if (!is_dir($directory)) {
    exit('Invalid diretory path');
}

$limitcount = 0;
$totalcount = 0;
$totalmultichildcount = 0;
$totalsinglechildpathcount = 0;
$totaloutlinedhasfilledcount = 0;
$totaloutlinedwithoutfilledcount = 0;
$totalfilledhasoutlinedcount = 0;
$totalfilledwithoutoutlinedcount = 0;
$totalfilledoutlinedmatchcount = 0;
$totalfillroundmatchcount = 0;
$totalfillsharpmatchcount = 0;
$totalallmatchcount = 0;

$files = array();
foreach (scandir($directory) as $file) {
    if ($file !== '.' && $file !== '..') {
        // get classname and remove underscore if any
        $arrnamesvg = explode(".",$file);
        //$allnamesdash = explode("-",$arrnamesvg[0]);
        //$allnames = explode("-",ucwords($arrnamesvg[0],"-"));
        //$allnames = explode("_",ucwords($arrnamesvg[0],"_"));
        //$lastele = array_pop($allnames);
        //$lastele = array_pop($allnames);

        $classname = ucwords($arrnamesvg[0],"-");
        // echo $classname. "\n";

        $outputFile = "";
        $pathdfilled = "";
        $pathdoutlined = "";
        
        // get path d value
        
        // $pathdregular = $svgregcontents->path->attributes()[0];
        //if ($svgregcontents->count() == 1 and $svgregcontents->path->count() == 1){
            // echo "NOPE ON THIS ONE \n";
            // ++$totalmultichildcount;
            // echo $classname. "\n";
            //++$totalsinglechildpathcount;
        //}

        //++$totalcount;
        $svgData = file_get_contents($directory.'/'.$file);
        $svgfilecontents = new SimpleXMLElement($svgData);

        // get total that have both filled and outlined
        if (str_ends_with($file,"-outline.svg")) {
            $pathdoutlined = $svgfilecontents->path->attributes()[0];
            // does it have a filled
            if (file_exists($directory.'/'.substr($file, 0, -12).'.svg')){
                $svgData = file_get_contents($directory.'/'.substr($file, 0, -12).'.svg');
                $svgfilecontents = new SimpleXMLElement($svgData);
                $pathdfilled = $svgfilecontents->path->attributes()[0];
            }
        } else {
            $pathdfilled = $svgfilecontents->path->attributes()[0];
            // does filled have an outlined
            if (file_exists($directory.'/'.substr($file, 0, -4).'-outline.svg')){
                $svgData = file_get_contents($directory.'/'.substr($file, 0, -4).'-outline.svg');
                $svgfilecontents = new SimpleXMLElement($svgData);
                $pathdoutlined = $svgfilecontents->path->attributes()[0];
            }
        }

        //continue;
        
        //echo $svgregcontents->count();

        /*
        $classtemplate = $templatefile;
        $classtemplate = str_replace('${{classname}}', $classname, $classtemplate);
        $classtemplate = str_replace('${{pathdregular}}', $pathdregular, $classtemplate);
        */

        // check to see if there's other versions with single paths
        // $replacedfilename = str_replace("_20_regular.svg", "_20_filled.svg", $file);
        
        /*
        // outlined
        if (file_exists($topdirectory.'/'.'outlined'.'/'.$file)){
            $filledfile = file_get_contents($topdirectory.'/'.'outlined'.'/'.$file);
            $svgfilledcontents = new SimpleXMLElement($filledfile);
            //$pathdfilled = $svgfilledcontents->path->attributes()[0];
            //$classtemplate = str_replace('${{pathdfilled}}', $pathdfilled, $classtemplate);
            if ($svgfilledcontents->count() == 1 and $svgfilledcontents->path->count() == 1){
                // echo "NOPE ON THIS ONE \n";
                ++$totalfilledoutlinedmatchcount;
                //continue;
            }
        }

        // round
        if (file_exists($topdirectory.'/'.'round'.'/'.$file)) {
            $filledfile = file_get_contents($topdirectory.'/'.'round'.'/'.$file);
            $svgfilledcontents = new SimpleXMLElement($filledfile);
            //$pathdfilled = $svgfilledcontents->path->attributes()[0];
            //$classtemplate = str_replace('${{pathdfilled}}', $pathdfilled, $classtemplate);
            if ($svgfilledcontents->count() == 1 and $svgfilledcontents->path->count() == 1){
                // echo "NOPE ON THIS ONE \n";
                ++$totalfillroundmatchcount;
                //continue;
            }
        }

        // sharp
        if (file_exists($topdirectory.'/'.'sharp'.'/'.$file)) {
            $filledfile = file_get_contents($topdirectory.'/'.'sharp'.'/'.$file);
            $svgfilledcontents = new SimpleXMLElement($filledfile);
            //$pathdfilled = $svgfilledcontents->path->attributes()[0];
            //$classtemplate = str_replace('${{pathdfilled}}', $pathdfilled, $classtemplate);
            if ($svgfilledcontents->count() == 1 and $svgfilledcontents->path->count() == 1){
                // echo "NOPE ON THIS ONE \n";
                ++$totalfillsharpmatchcount;
                //continue;
            }
        }

        // twotone
        if (file_exists($topdirectory.'/'.'two-tone'.'/'.$file)) {
            $filledfile = file_get_contents($topdirectory.'/'.'two-tone'.'/'.$file);
            $svgfilledcontents = new SimpleXMLElement($filledfile);
            //$pathdfilled = $svgfilledcontents->path->attributes()[0];
            //$classtemplate = str_replace('${{pathdfilled}}', $pathdfilled, $classtemplate);
            if ($svgfilledcontents->count() == 1 and $svgfilledcontents->path->count() == 1){
                // echo "NOPE ON THIS ONE \n";
                ++$totalfillttmatchcount;
                continue;
            }
        }
        */
        // ++$totalallmatchcount;
       // echo $classname. "\n";
    } 
    $classname = str_replace("-", "", $classname);

    $classtemplate = $templatefilesingle;
    $pathdval = $pathdoutlined;
    $iconstyleparam = "";

    if ($pathdfilled !== "" and $pathdoutlined !== "") {
        $classname = str_replace("Outline", "", $classname); 
        $classtemplate = $templatefilebundle;  
        $iconstyleparam = "null, ";
    } else if ($pathdfilled !== "" and $pathdoutlined == "") {
        $classname .= "Filled";
        $pathdval = $pathdfilled;
    }

    //echo $classname."\n";
    ++$totalcount;
    //continue;

    $classtemplate = str_replace('${{classname}}', $classname, $classtemplate);
    $classtemplate = str_replace('${{pathd}}', $pathdval, $classtemplate);
    $classtemplate = str_replace('${{pathdfilled}}', $pathdfilled, $classtemplate);
    $classtemplate = str_replace('${{pathdoutlined}}', $pathdoutlined, $classtemplate);

    // write file
    $outputFile = 'source/class/ville/embed/mdi/'.$classname.'.js';
    if (!file_exists($outputFile)) {
        file_put_contents($outputFile, $classtemplate);
        // code for writing app code
        $appcodetemplate = $templatefilecode;
        $appcodetemplate = str_replace('${{iconstyleparam}}', $iconstyleparam, $appcodetemplate);
        $appcodetemplate = str_replace('${{iconobjname}}', $classname, $appcodetemplate);

        //echo $appcodetemplate . "\n";
        file_put_contents($apptxtfile, $appcodetemplate . "\n", FILE_APPEND);
    }

    ++$limitcount;

    //if ($limitcount == 100)
      //break;
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
//echo $totalsinglechildpathcount. "\n";
//echo $totaloutlinedhasfilledcount. "\n";
//echo $totalfilledhasoutlinedcount. "\n";
//echo $totalfilledwithoutoutlinedcount. "\n";
//echo $totaloutlinedwithoutfilledcount. "\n";
//echo $totalfilledoutlinedmatchcount. "\n";
//echo $totalfillroundmatchcount. "\n";
//echo $totalfillsharpmatchcount. "\n";

//echo $totalallmatchcount. "\n";

echo "Extraction and writing complete!\n";

?>
