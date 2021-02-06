/* ************************************************************************

   Ville Software (sqville)

   Copyright: 2021 sqville

   License:
     MIT

   Authors:
     * Chris Eskew (chris.eskew@sqville.com)
     * iConicss by Viglino at https://github.com/Viglino/iconicss

************************************************************************ */
/**
 * EXTERNALRESOURCES
 * If you don't want to put each css class and psudo class in the CSS entry array then
 * you can add the following map entry to your Manifest.json file. This will includ the external css file
 * in your app's default stylesheet. 
 * 
    {
      "css": [
        "ville/embed/iconicss.min.css"
      ]
    }
    See here for details: https://qooxdoo.org/documentation/#/development/compiler/configuration/Manifest?id=manifestjson
 * 
 * 
*/
qx.Class.define("ville.embed.package.IconIcss",
{
  extend : qx.core.Object,

  statics :
  {
    META : {
      name : "Iconicss",
      description : "Pure CSS icons for Qooxdoo applications"
    },
	
    // Named icons/graphics configurations
    EMBEDS :
    {
      "cube-o" : { template : "icss-single-element", class : "icss-cube-o" },
      "coffee-grain" : { template : "icss-single-element", class : "icss-coffee-grain"},
      "coffee" : { template : "icss-single-element", class : "icss-coffee"},
      "shapes" : { template : "icss-single-element", class : "icss-shapes"},
      "connection" : { template : "icss-single-element", class : "icss-connection"},
      "cloud-download" : { template : "icss-single-element", class : "icss-cloud-download"},
      "folder-close" : { template : "icss-single-element", class : "icss-folder-close"},
      "trumpet" : { template : "icss-single-element", class : "icss-trumpet"},
      "football" : { template : "icss-single-element", class : "icss-football"},
      "rocket" : { template : "icss-single-element", class : "icss-rocket"},
      "google-drive-c" : { template : "icss-single-element", class : "icss-google-drive-c"},
      "gear" : { template : "icss-single-element", class : "icss-gear"},
      "drone" : { template : "icss-single-element", class : "icss-drone"},
      "html5" : { template : "icss-single-element", class : "icss-html5"},
      "css3" : { template : "icss-single-element", class : "icss-css3"},
      "js" : { template : "icss-single-element", class : "icss-js"},
      "visual-code" : { template : "icss-single-element", class : "icss-visual-code"},
      "wolverine-c" : { template : "icss-single-element", class : "icss-wolverine-c"},
      "sun-o" : { template : "icss-single-element", class : "icss-sun-o"},
      "binocular" : { template : "icss-single-element", class : "icss-binocular"},
      "bombshell" : { template : "icss-single-element", class : "icss-bombshell"},
      "food-pot" : { template : "icss-single-element", class : "icss-food-pot"},
      "x-square" : { template : "icss-single-element", class : "icss-x-square"}
    },
	
	  TEMPLATES :
    {
      "icss-single-element" : '<i class="{{class}}" style="font-size:{{size}}em; color:inherit;"></i>'
    },
    
    CONTENT : {},

    CSS : {},
    /* 
      "i[class*='icss-']" : "position: relative; display:inline-block; font-style: normal; background-color:currentColor; box-sizing: border-box; vertical-align: middle;",
      "i[class*='icss-']:before" : "content: ''; border-width: 0; position: absolute; box-sizing: border-box;",
      "i[class*='icss-']:after" : "content: ''; border-width: 0; position: absolute; box-sizing: border-box;",
      "i.icss-cube-o" : "width: .7em; height: .7em; background-color: transparent; box-shadow: inset 0 0 0 .065em; margin: .3em .3em 0 0;",
      "i.icss-cube-o:before" : "width: .7em; height: .7em; background-color: transparent; box-shadow: inset 0 0 0 .065em; top: -.3em; left: .3em;",
      "i.icss-cube-o:after" : "width: .3em; height: .09em; background-color: currentColor; box-shadow: .05em .65em, .66em .66em, .7em 1.31em; transform: skewY(-45deg); transform-origin: 0 100%; top: 0; left: 0;",
      "i.icss-coffee-grain" : "width: .6em; height: .8em; border-radius: 60% 40%; background-color: transparent; box-shadow: inset 0 0 0 .065em; overflow: hidden; margin: .1em .2em;",
      "i.icss-coffee-grain:before" : "width: .5em; height: .7em; border-radius: 50%; border: .1em solid transparent; box-shadow: inset 0 0 0 .2em, -.25em 0, -.3em .15em; transform: rotate(25deg); top: -.2em; left: .21em;",
      "i.icss-coffee-grain:after" : "width: .5em; height: .7em; border-radius: 50%; border: .1em solid transparent; box-shadow: inset 0 0 0 .2em, .25em 0, .3em -.15em; transform: rotate(25deg); top: .28em; left: -.11em;",
      "i.icss-coffee" : "height:.7em;width:.75em;border-radius:0 0 .3em .3em;margin:.14em .2em .16em .05em",
      "i.icss-coffee:before" : "height:.11em;width:.9em;background-color:currentColor;border-radius:0 0 .1em .1em;left:-.05em;top:.755em",
      "i.icss-coffee:after" : "height:.3em;width:.4em;border-width:.1em;border-style:solid;border-radius:.1em;top:.1em;left:.55em",
      "i.icss-shapes" : "width:.35em;height:.35em;background-color:currentColor;margin:.1em .55em .55em .1em",
      "i.icss-shapes:before" : "width:.35em;height:.35em;background-color:currentColor;border-radius:50%;top:0;left:.45em",
      "i.icss-shapes:after" : "width:.4em;height:.4em;border:.2em solid currentColor;border-color:currentColor currentColor transparent transparent;-webkit-transform:scaleX(.7) rotate(-45deg);transform:scaleX(.7) rotate(-45deg);-webkit-box-shadow:-.34em -.56em 0 -.04em;box-shadow:-.34em -.56em 0 -.04em;top:.58em;left:.425em",
      "i.icss-connection" : "width:.28em;height:.28em;background-color:currentColor;border-radius:50%;-webkit-box-shadow:-.37em -.24em 0 -.03em,.29em .14em 0 -.03em,-.02em .41em 0 -.03em,.3em -.26em 0 -.03em,-.39em .34em 0 -.03em;box-shadow:-.37em -.24em 0 -.03em,.29em .14em 0 -.03em,-.02em .41em 0 -.03em,.3em -.26em 0 -.03em,-.39em .34em 0 -.03em;margin:.22em .3em .4em .42em",
      "i.icss-connection:before" : "width:.9em;height:.07em;background-color:currentColor;-webkit-transform:translate(-50%,-50%) rotate(-40deg) translateX(-.05em);transform:translate(-50%,-50%) rotate(-40deg) translateX(-.05em);top:50%;left:50%",
      "i.icss-connection:after" : "width:.75em;height:.35em;border:0 solid transparent;border-width:0 0 0 .45em;-webkit-box-shadow:inset .078em 0,0-.07em;box-shadow:inset .078em 0,0-.07em;-webkit-transform:rotate(30deg) skewX(25deg);transform:rotate(30deg) skewX(25deg);top:.11em;left:-.35em",
      "i.icss-cloud-download" : "width:.22em;height:.1em;margin:.75em .63em .1em .15em;-webkit-box-shadow:.49em 0;box-shadow:.49em 0",
      "i.icss-cloud-download:before" : "width:.35em;height:.35em;border-radius:50%;clip:rect(-1em 1em .28em 0);-webkit-transform:rotate(-48deg);transform:rotate(-48deg);top:-.25em;left:-.15em;-webkit-box-shadow:inset 0 0 0 1em,.253em .03em 0 .06em;box-shadow:inset 0 0 0 1em,.253em .03em 0 .06em",
      "i.icss-cloud-download:after" : "width:.3em;height:.3em;border-radius:50%;clip:rect(-1em 1em .26em -1em);-webkit-transform:rotate(48deg);transform:rotate(48deg);top:-.2em;left:.55em;-webkit-box-shadow:inset 0 0 0 1em,-.32em .02em 0 .12em;box-shadow:inset 0 0 0 1em,-.32em .02em 0 .12em",
      "i.icss-folder-close" : "width:.9em;height:.75em;border-radius:.05em;background:0 0;margin:.2em .045em .05em",
      "i.icss-folder-close:before" : "width:.5em;height:.19em;border-radius:.05em;background:currentColor;top:-.12em;left:0",
      "i.icss-folder-close:after" : "width:.9em;height:.75em;border-radius:.05em;-webkit-box-shadow:inset 0 0 0 .08em;box-shadow:inset 0 0 0 .08em;top:0;left:0",
      "i.icss-trumpet" : "background-color:transparent;width:.55em;height:.5em;border-radius:0 0 .1em .1em/0 0 .2em .2em;border-top:.08em solid transparent;border-bottom:.13em solid transparent;-webkit-box-shadow:inset 0 0 0 .07em,-.13em -.28em 0 -.22em,.13em -.28em 0 -.22em,0 -.28em 0 -.22em;box-shadow:inset 0 0 0 .07em,-.13em -.28em 0 -.22em,.13em -.28em 0 -.22em,0 -.28em 0 -.22em;margin:.4em .1em .1em .25em",
      "i.icss-trumpet:before" : "width:.98em;height:.55em;border:.2em solid red;border-color:transparent currentColor;border-width:.23em .14em .23em .16em;-webkit-box-shadow:inset 0 .5em,-.03em 0;box-shadow:inset 0 .5em,-.03em 0;clip:rect(0,.88em,.55em,-.02em);top:-.24em;left:-.225em",
      "i.icss-trumpet:after" : "width:.07em;height:.46em;-webkit-box-shadow:inset .3em 0,.13em 0,-.13em 0;box-shadow:inset .3em 0,.13em 0,-.13em 0;border-radius:0 0 .04em .04em;top:-.1em;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)",
      "i.icss-football" : "background-color:transparent;width:1em;height:1em;border-radius:75% .18em;-webkit-box-shadow:inset 0 0 0 .08em,inset .3em -.3em 0 -.23em,inset -.3em .3em 0 -.23em;box-shadow:inset 0 0 0 .08em,inset .3em -.3em 0 -.23em,inset -.3em .3em 0 -.23em",
      "i.icss-football:before" : "width:.65em;height:.25em;border-top:.08em solid currentColor;border-radius:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);top:.35em;left:.18em",
      "i.icss-football:after" : "width:.08em;height:.25em;border-radius:.06em;background:currentColor;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);top:.4em;left:.32em;-webkit-box-shadow:.15em -.02em,.3em 0;box-shadow:.15em -.02em,.3em 0",
      "i.icss-rocket" : "background-color:transparent;width:.23em;height:.23em;border:.05em solid transparent;border-radius:50%;-webkit-box-shadow:inset 0 0 0 .05em,0 0 0 .05em,.098em -.098em 0 0,.13em -.13em 0 -.02em,.23em -.23em 0 -.05em;box-shadow:inset 0 0 0 .05em,0 0 0 .05em,.098em -.098em 0 0,.13em -.13em 0 -.02em,.23em -.23em 0 -.05em;margin:.2em .2em .57em .57em",
      "i.icss-rocket:before" : "background-color:transparent;width:.8em;height:.5em;border:0 solid transparent;border-width:.07em 0;border-radius:60% 50% 50% 60%/45% 55% 55% 45%;-webkit-box-shadow:inset -.3em 0 0 -.2em,inset 0 0 0 .05em,inset .53em 0 0 -.1em,-.3em -.22em 0 -.14em,-.3em .22em 0 -.14em;box-shadow:inset -.3em 0 0 -.2em,inset 0 0 0 .05em,inset .53em 0 0 -.1em,-.3em -.22em 0 -.14em,-.3em .22em 0 -.14em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);top:-.07em;left:-.45em",
      "i.icss-rocket:after" : "width:.18em;height:.14em;border-radius:0 100% 50%;background:0 0;-webkit-transform:scaleX(.8) rotate(-75deg);transform:scaleX(.8) rotate(-75deg);-webkit-box-shadow:-.07em .06em,-.09em -.06em,.01em -.09em;box-shadow:-.07em .06em,-.09em -.06em,.01em -.09em;top:.53em;left:-.55em",
      "i.icss-google-drive-c" : "width: .65em;height: .3em;box-shadow: inset .065em 0 0 1em #0057e7;transform: skewX(-30deg);margin: .65em .1em 0 0.26em;transform: translate(-.5em, -.5em) skewX(-30deg);",
      "i.icss-google-drive-c:before" : "width: .65em;height: .3em;box-shadow: inset .065em 0 0 1em #ffa700;transform: skewX(30deg) rotate(60deg) skewX(-30deg);top: -.43em;left: -.17em;",
      "i.icss-google-drive-c:after" : "width: .65em;height: .3em;box-shadow: inset .065em 0 0 1em #008744;transform: skewX(30deg) rotate(-60deg) skewX(-30deg);top: -0.28em;left:-0.49em;",
      "i.icss-gear" : "width: .5em;height: .5em;position: relative;border-radius: 100%;background-color: transparent;border-width: .07em;border-style: solid;border-color: transparent;margin: .25em;-webkit-box-shadow: 0 0 0 .1em, inset 0 0 0 .3em;box-shadow: 0 0 0 .1em, inset 0 0 0 .3em;",
      "i.icss-gear:before" : "width: .18em;height: .18em;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);transform: translate(-50%, -50%);-webkit-box-shadow: .41em 0, -.41em 0, 0 .41em, 0 -.41em;box-shadow: .41em 0, -.41em 0, 0 .41em, 0 -.41em;",
      "i.icss-gear:after" : "width: .18em;height: .18em;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%) rotate(45deg);-ms-transform: translate(-50%, -50%) rotate(45deg);transform: translate(-50%, -50%) rotate(45deg);-webkit-box-shadow: .42em 0, -.42em 0, 0 .42em, 0 -.42em;box-shadow: .42em 0, -.42em 0, 0 .42em, 0 -.42em;",
      "i.icss-drone" : "width: .3em;height: .3em;border: .065em solid currentColor;border-radius: 50%;-webkit-box-shadow: 0 -.11em 0 .03em,.35em -.2em 0 -.08em,-.35em -.2em 0 -.08em;box-shadow: 0 -.11em 0 .03em,.35em -.2em 0 -.08em,-.35em -.2em 0 -.08em;background-color: transparent;margin: .45em .35em .25em;",
      "i.icss-drone:before" : "width: .55em;height: .3em;border: .065em solid currentColor;border-bottom: 0;border-radius: 50% 50% 0 0 / 100% 100% 0 0;-webkit-transform: translateX(-50%);-ms-transform: translateX(-50%);transform: translateX(-50%);top: -.1em;left: 50%;",
      "i.icss-drone:after" : "width: .4em;height: .1em;background-color: currentColor;border-radius: .03em;-webkit-box-shadow:.2em 0,-.2em 0,.35em -.15em 0 -.02em,-.35em -.15em 0 -.02em;box-shadow:.2em 0,-.2em 0,.35em -.15em 0 -.02em,-.35em -.15em 0 -.02em;-webkit-transform: translateX(-50%);-ms-transform: translateX(-50%);transform: translateX(-50%);top: -.12em;left: 50%;",
      "i.icss-html5" : "width:1em;height:1em;background-color:transparent;margin:0",
      "i.icss-html5:before" : "width:.42em;height:.9em;background-color:transparent;-webkit-box-shadow:inset 1em 1em,-.2em -.595em,.19em -.9em,-.2em .41em,.2em .155em;box-shadow:inset 1em 1em,-.2em -.595em,.19em -.9em,-.2em .41em,.2em .155em;border:0 solid transparent;border-width:.16em 0 .595em;clip:rect(-.13em .57em .65em -.15em);top:.25em;left:50%;-webkit-transform:translateX(-50%) perspective(1em) rotateX(-15deg);transform:translateX(-50%) perspective(1em) rotateX(-15deg)",
      "i.icss-html5:after" : "width:.68em;height:.68em;-webkit-box-shadow:inset .4em -.4em currentColor,-.1em .1em 0 transparent;box-shadow:inset .4em -.4em currentColor,-.1em .1em 0 transparent;border-radius:.33em 0;top:.51em;left:50%;-webkit-transform:translateX(-50%) scaleY(.3) rotate(-45deg);transform:translateX(-50%) scaleY(.3) rotate(-45deg)",
      "i.icss-css3" : "background-color:transparent;width:1em;height:1em;margin:0",
      "i.icss-css3:before" : "background-color:transparent;width:.42em;height:.9em;-webkit-box-shadow:inset 1em 1em,.2em -.2em,-.19em -.9em,-.2em .41em;box-shadow:inset 1em 1em,.2em -.2em,-.19em -.9em,-.2em .41em;border:0 solid transparent;border-width:.16em 0 .595em;clip:rect(-.13em .57em .65em -.15em);top:.25em;left:50%;-webkit-transform:translateX(-50%) perspective(1em) rotateX(-15deg);transform:translateX(-50%) perspective(1em) rotateX(-15deg)",
      "i.icss-css3:after" : "width:.68em;height:.68em;-webkit-box-shadow:inset .4em -.4em currentColor,-.1em .1em 0 transparent;box-shadow:inset .4em -.4em currentColor,-.1em .1em 0 transparent;border-radius:.33em 0;top:.51em;left:50%;-webkit-transform:translateX(-50%) scaleY(.3) rotate(-45deg);transform:translateX(-50%) scaleY(.3) rotate(-45deg)",
      "i.icss-js" : "width:1em;height:1em;background-color:transparent;margin:0",
      "i.icss-js:before" : "width:.1em;height:.6em;clip:rect(-.13em .26em .78em -.14em);top:.2em;background-color:transparent;-webkit-box-shadow:inset 1em 1em,-.12em -.298em 0 .02em,.1em .226em 0 .05em,-.1em .65em 0 .1em,.1em -.65em 0 .1em;box-shadow:inset 1em 1em,-.12em -.298em 0 .02em,.1em .226em 0 .05em,-.1em .65em 0 .1em,.1em -.65em 0 .1em;border:0 solid transparent;border-width:.18em 0 .28em;left:73%;-webkit-transform-origin:-.15em 50%;transform-origin:-.15em 50%;-webkit-transform:translateX(-50%) perspective(1em) rotateX(-10deg);transform:translateX(-50%) perspective(1em) rotateX(-10deg)",
      "i.icss-js:after" : "-webkit-box-shadow:.12em .22em 0 .05em,-.1em .65em 0 .1em,.1em -.5em 0 .1em;box-shadow:.12em .22em 0 .05em,-.1em .65em 0 .1em,.1em -.5em 0 .1em;border:0 solid transparent;border-width:.18em 0 .28em;left:27%;-webkit-transform-origin:.25em 50%;transform-origin:.25em 50%;-webkit-transform:translateX(-50%) perspective(1em) rotateX(-10deg);transform:translateX(-50%) perspective(1em) rotateX(-10deg)"
    */

    /** ANIMATIONS ****************************
     * Qooxdoo animations are structured as so:
	  {
		"duration": 1000,
		"keep": 100,
		"keyFrames": {
		  0 : {"scale": 1.1},
		  100 : {"opacity": 0, "scale": 0}
		},
		"origin": "50% 50%",
		"repeat": 1,
		"timing": "ease-in-out",
		"alternate": false,
		"delay" : 2000
    }
    */
	  ANIMATIONS :
    {
      "shrink" : 
      {
        duration: 150,
        keyFrames : 
        {
          0 : {scale: 1.1},
          100 : {scale: 1}
        },
        keep : 100,
        timing: "ease-in"
      },

      "grow" : 
      {
        duration: 150,
        keyFrames : 
        {
          0 : {scale: 1},
          100 : {scale: 1.1}
        },
        keep : 100,
        timing: "ease-out"
      },
      
      "tada" : {duration: 1000, keyFrames : {
        0 :  {scale: 1, rotate: "0deg"},
        10 : {scale: 0.9, rotate: "-3deg"},
        20 : {scale: 0.9, rotate: "-3deg"},
        30 : {scale: 1.1, rotate: "3deg"},
        40 : {scale: 1.1, rotate: "-3deg"},
        50 : {scale: 1.1, rotate: "3deg"},
        60 : {scale: 1.1, rotate: "-3deg"},
        70 : {scale: 1.1, rotate: "3deg"},
        80 : {scale: 1.1, rotate: "-3deg"},
        90 : {scale: 1.1, rotate: "3deg"},
        100 : {scale: 1, rotate: "0deg"}
	    }}
	  

    }  
  }
});
