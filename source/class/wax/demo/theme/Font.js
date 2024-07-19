/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("wax.demo.theme.Font",
{
  extend : qx.theme.indigo.Font,

  fonts :
  {
    "default" :
    {
      size : 14,
      family : ["Lato", "Helvetica Neue", "arial", "Helvetica", "sans-serif"],
      color : "text",
      lineHeight: 1.5
    },

    "default-bold" :
    {
      include : "default",
      bold : true
    },

    "findmessage" :
    {
      include : "default",
      size : 12,
      italic : true
    },

    "ville-logo-font" : {
      size: 14,
      family: ["Providence","sans-serif"],
      sources: [
        {
          family: "Providence",
          source: ["ville/wax/Providence.ttf"]
        }
      ]
    },

    "ville-logo-about-font" : {
      include: "ville-logo-font",
      size: 28
    },

    //override
    "monospace" :
    {
      size : 14,
      family : [ "DejaVu Sans Mono", "Courier New", "monospace" ],
      color: "font",
      lineHeight: 1.8
    },

    "mainmenubutton" :
    {
      include : "default",
      size : 12
    },

    "mainmenubutton-hym" :
    {
      include : "default-bold",
      size : 10,
      lineHeight: 1.2
    },

    "mainmenuindicator" :
    {
      include : "default-bold",
      size : 14
    },

    "embedblurb" :
    {
      include : "default-bold",
      size : 18
    },

    "headeratom" :
    {
      include : "default-bold",
      size : 16
    },

    "control-header" :
    {
    	include : "default",
    	size : 21
    },

    "area-header" :
    {
      include : "default",
      size : 21
    },

    "hym-app-header" :
    {
      include : "default",
      family : ["-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "arial", "Helvetica", "sans-serif"],
      bold : true,
      size : 16
    }
  }
});