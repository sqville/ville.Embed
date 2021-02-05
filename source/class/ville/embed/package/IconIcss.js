/* ************************************************************************

   SQville Software

   http://sqville.com

   Copyright:
     None

   License:
     MIT

   Authors:
     * Chris Eskew (chris.eskew@sqville.com)

************************************************************************ */
/* ************************************************************************


************************************************************************* */
/**
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
      "icss-coffee-grain" : { template : "icss-single-element", class : "icss-coffee-grain"},
      "icss-coffee-grinder" : { template : "icss-single-element", class : "icss-coffee-grinder"},
      "icss-coffee" : { template : "icss-single-element", class : "icss-coffee"},
      "icss-coffee-pot" : { template : "icss-single-element", class : "icss-coffee-pot"},
      "icss-coffee-maker" : { template : "icss-single-element", class : "icss-coffee-maker"},
      "icss-italian-coffee-maker" : { template : "icss-single-element", class : "icss-italian-coffee-maker"},
      "cube-o" : { template : "icss-single-element", class : "icss-cube-o" }
    },
	
	  TEMPLATES :
    {
      "icss-single-element" : '<i class="{{class}}" style="font-size:{{size}}em; color:inherit;"></i>'
    },
    
    CONTENT : {},
	
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
        duration: 200,
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
	  
	  /*
	  "grow" : { transition: all .2s ease-in-out; }
	  grow:hover { transform: scale(1.1); }
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
	  }*/
    },

    CSS :
    { 
      "i[class*='icss-']" : "position: relative; display:inline-block; font-style: normal; background-color:currentColor; box-sizing: border-box; vertical-align: middle;",
      "i[class*='icss-']:before" : "content: ''; border-width: 0; position: absolute; box-sizing: border-box;",
      "i[class*='icss-']:after" : "content: ''; border-width: 0; position: absolute; box-sizing: border-box;",
      "i.icss-cube-o" : "width: .7em; height: .7em; background-color: transparent; box-shadow: inset 0 0 0 .065em; margin: .3em .3em 0 0;",
      "i.icss-cube-o:before" : "width: .7em; height: .7em; background-color: transparent; box-shadow: inset 0 0 0 .065em; top: -.3em; left: .3em;",
      "i.icss-cube-o:after" : "width: .3em; height: .09em; background-color: currentColor; box-shadow: .05em .65em, .66em .66em, .7em 1.31em; transform: skewY(-45deg); transform-origin: 0 100%; top: 0; left: 0;"
    },
    
    EXTERNALRESOURCES :
    {
      "css": [
        "ville/embed/iconicss.min.css"
      ]
    }
  }
});
