/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("wax.demo.theme.Decoration",
{
  extend : qx.theme.indigo.Decoration,

  decorations :
  {

    "nobgimg" :
    {
      style :
      {
        backgroundImage: "",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },
    
    "tablelist-list" :
    {
      style :
      {
        width : 1,
        color : "gray"
      }
    },
    
    "groupbox-open" :
    {
      style :
      {
        backgroundImage: "wax/baseline-expand_less-24px.svg",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },

    "groupbox-closed" :
    {
      style :
      {
        backgroundImage: "wax/demo/baseline-expand_more-24px.svg",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },

    "page-button-right" :
    {
      style :
      {
        backgroundImage: "wax/demo/chevron_right-24px.svg",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },

    "white-box" :
    {
      style :
      {
        width: 1,
        color: "white-box-border",
        radius: 3
      }
    },

    "connected-top-box" :
    {
    	include : "white-box",
    	
    	style :
	    {
	      width: [1,0,0,0],
	      radius: [ 0, 0, 0, 0 ]
	    }
    },
    
    "border-me" :
    {
      style :
      {
        width : 1,
        color : "black",
        style : "solid"
      }
    },

    "topheader" :
    {
      style :
      {
        width : [0,0,1,0],
        color : "white-box-border",
        style : "solid"
      }
    },

    "leftside" :
    {
      style :
      {
        width : [0,1,0,0],
        color : "white-box-border",
        style : "solid"
      }
    },

    "bottombar" :
    {
      style :
      {
        width : [1,0,0,0],
        color : "white-box-border",
        style : "solid"
      }
    },

    /*
    ---------------------------------------------------------------------------
      BUTTON
    ---------------------------------------------------------------------------
    */
   "mainmenubutton-box" :
   {
     style :
     {
       radius : 0,
       width : 0,
       backgroundColor : "white"
     }
   },

   "mainmenubutton-box-pressed" :
   {
     include : "mainmenubutton-box",

     style :
     {
      width : [0,0,0,5],
      radius : [1,0,0,1],
      color : ["button-box-bright-pressed","button-box-bright-pressed","button-box-bright-pressed","blue"],
      backgroundColor : "white" 
     }
   },

   "mainmenubutton-box-pressed-hovered" : 
   {
     include : "mainmenubutton-box-pressed",

     style :
     {
       color : "button-border-hovered"
     }
   },

   "mainmenubutton-box-hovered" :
   {
     include : "mainmenubutton-box-pressed",

     style :
     {
      color : ["button-box-bright-pressed","button-box-bright-pressed","button-box-bright-pressed","#cccccc"],
      backgroundColor : "white"
     }
   },

   "mainmenuindicator" :
   {
    style :
     {
      radius: 3
     }
   },

   "window-captionbar-default" :
   {
     style :
     {
      width: 0
     }
   },

    /*
    ---------------------------------------------------------------------------
      PROGRESSBAR
    ---------------------------------------------------------------------------
    */

   "progressbar" :
   {
     style:
     {
       backgroundColor: "#FFF",
       radius : 0,
       width: 0,
       color: "border-separator"
     }
   },
   
   "progressbar-trans" :
   {
    style:
    {
      radius : 0,
      width: 0
    }
   },


   /*
    ---------------------------------------------------------------------------
      UPLOAD
    ---------------------------------------------------------------------------
    */
   "upload-area" :
   {
     style :
     {
       width : 1,
       radius : 3,
       style : "dashed",
       color : "gray"
     }
   },
   
   "upload-area-dragover" :
   {
    include: "upload-area",
     
     style :
     {
       style : "solid",
       color : "orange"
     }
   },

   "clippy-arrow-left" :
   {
    style :
     {
       clipPath : "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)"
     }
   }

   /*
    ---------------------------------------------------------------------------
      FreeStyleCss tests


      { 		
          before : 
          {
            "width" : "3px",
            "height" : "13px",
            "left" : "5px",
            "transform" : "rotate(45deg)",
            "transition" : "background-color .8s ease",
            "position" : "absolute",
            "top" : "0px",
            "background-color" : "gray",
            "content" : "''"
          },
          after :
          {
            "width" : "3px",
            "height" : "13px",
            "left" : "5px",
            "transform" : "rotate(-45deg)",
            "transition" : "background-color .8s ease",
            "position" : "absolute",
            "top" : "0px",
            "background-color" : "gray",
            "content" : "''"
          }
        }
    ---------------------------------------------------------------------------
    */

    

  }
});