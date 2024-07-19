/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("wax.demo.theme.Appearance",
{
  extend : qx.theme.indigo.Appearance,

  appearances :
  {
    "header-atom" :
    {
      alias : "atom",

      style : function(states)
      {
        return {
          icon: "",
          iconPosition: "top", 
          center: true,
          padding: [10, 6, 20, 6],
          marginBottom: 10,
          font : "ville-logo-font"
        }
      }
    },

    "header-atom/icon" :
    {
      include : "image",

      style : function(states)
      {
        return {
          html: '<div style="font-family: Providence, sans-serif; font-size: 20px;">&#60;E&#62;</div>',
          font : "ville-logo-font",
          width : 40,
          height : 20,
          backgroundColor : "transparent"
        }
      }
    },

    /*"icon" :
    {
      include: "label",
      
      style : function(states)
      {
        return {
          backgroundColor : "transparent",
          allowStretchX: false,
          allowStretchY: false
        };
      }
    },*/

     /*
    ---------------------------------------------------------------------------
      wax.demo.Button
    ---------------------------------------------------------------------------
    */
    "mid-button-frame" :
    {
      alias : "atom",

      style : function(states)
      {
        var decorator = "mdi-button-box-round";
        var bgcolor = "transparent";

        if (!states.disabled) {
          if (states.hovered && !states.pressed && !states.checked) {
            bgcolor = "#5f63680a";
            //decorator = "button-box-hovered";
          } else if (states.hovered && (states.pressed || states.checked)) {
            //bgcolor = "Background1Pressed";
            //decorator = "button-box-pressed";
          } else if (states.pressed || states.checked) {
            //bgcolor = "Background1Pressed";
          }
        }

        if (states.invalid && !states.disabled) {
          decorator += "-invalid";
        } /*else if (states.focused) {
          decorator += "-focused";
        }*/

        return {
          decorator : decorator,
          cursor: states.disabled ? undefined : "pointer",
          backgroundColor : bgcolor,
          font : "default"
        };
      }
    },
    
    "mdi-button-frame/label" : {
      alias : "atom/label",

      style : function(states)
      {
        return {
          textColor : states.disabled ? "text-disabled" : "black",
          font : "default"
        };
      }
    },

    "mdi-button-theme-toggle" :
    {
      style : function(states)
      {
        return {
          icon : states.checked ? "wax/demo/light_mode_24.svg" : "wax/demo/dark_mode_24.svg",
          decorator : "mdi-button-box-round",
          backgroundColor : states.hovered ? "#5f63680a" : "transparent",
          cursor: states.disabled ? undefined : "pointer",
          center : true,
          width: 30,
          padding : 6,
          marginBottom: 20,
          gap : 8
        };
      }
    },

    "testiconicssbutton" :
    {
      include : "button",

      style : function(states, styles)
      {
        var iprops;
        if (states.hovered)
          iprops = { textColor : "blue" };
        else
        iprops = { textColor : "black" };
        
        return {
          embedProps : iprops
        }
      }
    },

    "testbutton" :
    {
      include : "button",

      style : function(states)
      {
        var iprops;
        if (states.hovered)
          iprops = { iconStyle : "filled" };
        else
          iprops = { iconStyle : "outlined" };
        
        return {
          embedProps : iprops
        }
      }
    },

    "clippybutton" :
    {
      include : "button",
      alias: "button",

      style : function(states)
      {
        return {
          //icon : "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          icon : "",
          iconProps : states.hovered ? { backgroundColor : "blue" } : { backgroundColor : "black" }
        }
      }
    },

    "clippybutton/icon" :
    {
      include : "image",

      style : function(states)
      {
        return {
          width : 24,
          height : 24,
          backgroundColor : "black",
          clipPath : "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)"
        }
      }
    },

    "testembedapp" :
    {
      style : function(states)
      {
        return {
          iconStyle: "outlined"
        }
      }
    },

     /*
    ---------------------------------------------------------------------------
      wax.demo.ComboBox
    ---------------------------------------------------------------------------
    */

    // override
    "combobox/button": {
      alias: "button-frame",
      include: "button-frame",

      style(states) {
        var decorator = "button-box-right-borderless";
        var iconprops = { 
          backgroundColor : "black",
          clipPath : wax.demo.theme.Image.CPGiftOpenRegular
        };

        if (states.hovered && !states.pressed && !states.checked) {
          decorator = "button-box-hovered-right-borderless";
          iconprops = { 
            backgroundColor : "blue",
            clipPath : wax.demo.theme.Image.CPGiftOpenFilled
          };
        } else if (states.hovered && (states.pressed || states.checked)) {
          decorator = "button-box-pressed-hovered-right-borderless";
        } else if (states.pressed || states.checked) {
          decorator = "button-box-pressed-right-borderless";
        }

        return {
          icon: "",
          decorator: decorator,
          padding: [1, 0, 0, 5],
          width: 32,
          iconProps : iconprops
        };
      }
    },
    
    "combobox/button/icon" :
    {
    	include : "image",
    	
    	style : function(states)
    	{        
        return {
          width : 24,
          height : 24
    		};
    	}
    },

     /*
    ---------------------------------------------------------------------------
      wax.demo.Atom
    ---------------------------------------------------------------------------
    */

   "icss-atom" :
   {
     include : "atom",

     style : function(states)
     {
       return {
        center: true, 
        padding : 16,
        gap : 16,
        iconPosition: "top"
       }
     }
   },

    /*
    ---------------------------------------------------------------------------
      wax.MENUBUTTON
    ---------------------------------------------------------------------------
    */
   "mainmenubutton-frame" :
   {
     alias : "atom",

     style : function(states)
     {
       var decorator = "mainmenubutton-box";
       var padding = [12, 3, 10, 4];
       //var textcolor = "#606060";
       var textcolor = "black";
       var opacity = 1;

       if (!states.disabled) {
         if (states.hovered && !states.pressed && !states.checked) {
           decorator = "mainmenubutton-box-hovered";
           padding = [12,3,10,0];
           textcolor = "black";
           opacity = 1;
         } /*else if (states.hovered && (states.pressed || states.checked)) {
           decorator = "mainmenubutton-box-pressed-hovered";
         }*/ else if (states.pressed || states.checked) {
           decorator = "mainmenubutton-box-pressed";
           padding = [12,3,10,0];
           textcolor = "black";
           opacity = 1;
         }
       }

       return {
        backgroundColor: "transparent", 
        decorator : decorator,
        padding : padding,
        cursor: states.disabled ? undefined : "pointer",
        minWidth: 5,
        minHeight: 5,
        textColor: textcolor,
        font : "mainmenubutton",
        opacity : opacity
       };
     }
   },

   "mainmenubutton-frame/label" : {
     alias : "atom/label",

     style : function(states)
     {
       return {
         textColor : states.disabled ? "text-disabled" : undefined
       };
     }
   },

   "mainmenubutton" :
   {
     alias : "mainmenubutton-frame",
     include : "mainmenubutton-frame",

     style : function(states)
     {
       return {
         center : true,
         minWidth : 70,
         gap : 10
       };
     }
   },

   "mainmenubutton/icon" : {

    style : function() {
        return {
          scale: true,
          width: 28,
          height: 28
        };
      }
    },

    "mainmenuindicator" : {
      style : function() {
        return {
          backgroundColor : "gray",
          textColor : "white",
          height : 24,
          padding: [2,6,2,6],
          decorator : "mainmenuindicator",
          font : "mainmenuindicator"
        };
      }
    },

    "submenubutton" : {
     style : function(states)
     {
       return {
        cursor: states.disabled ? undefined : "pointer",
        textColor : states.hovered ? "black" : "#505050",
        font : "mainmenubutton",
        decorator: "mainmenubutton-box-pressed"
       };
     }
    },

    /*
    ---------------------------------------------------------------------------
      wax.MENUBUTTON - "hym" = hybrid moble (i.e. phonegap or cordova)
    ---------------------------------------------------------------------------
    */

   "mainmenubutton-frame-hym" :
   {
     alias : "atom",

     style : function(states)
     {
       var decorator = "mainmenubutton-box";
       var padding = [4,2,4,2];
       var textcolor = "black";
       var opacity = .55;

       if (!states.disabled) {
         if (states.hovered && !states.pressed && !states.checked) {
           //decorator = "mainmenubutton-box-hovered";
           //padding = [12,6,12,14];
           textcolor = "black";
           opacity = 1;
         } /*else if (states.hovered && (states.pressed || states.checked)) {
           decorator = "mainmenubutton-box-pressed-hovered";
         }*/ else if (states.pressed || states.checked) {
           //decorator = "mainmenubutton-box-pressed";
           //padding = [12,6,12,14];
           textcolor = "blue";
           opacity = 1;
         }
       }

       return {
         decorator : decorator,
         padding : padding,
         cursor: states.disabled ? undefined : "pointer",
         minWidth: 5,
         minHeight: 5,
         textColor: textcolor,
         font : "mainmenubutton-hym",
         opacity : opacity
       };
     }
   },

   "mainmenubutton-frame-hym/label" : {
     alias : "atom/label",

     style : function(states)
     {
       return {
         textColor : states.disabled ? "text-disabled" : undefined
       };
     }
   },

   "mainmenubutton-hym" :
   {
     alias : "mainmenubutton-frame-hym",
     include : "mainmenubutton-frame-hym",

     style : function(states)
     {
       return {
         center : true,
         gap : 2
       };
     }
   },

   "mainmenubutton-hym/icon" : {

    style : function() {
        return {
          scale: true,
          width: 28,
          height: 28
        };
      }
    },

   "hym-page-button" :
   {
    style : function(states)
    {
      return {
        center : false,
        gap : 12,
        padding : [8,20,8,20],
        decorator : "page-button-right"
      };
    }
   },


    /*
    ---------------------------------------------------------------------------
      WINDOW
    ---------------------------------------------------------------------------
    */

    "wax-window" : {
      alias : "window",

      include: "window",

      style : function(states)
      {
        return {
         showMaximize : true,
         showMinimize : false
        };
      }
    },
    
    "wax-window/title" : {
      alias : "window/title",

      style : function(states)
      {
        return {
         textColor : "black",
         font : "control-header"
        };
      }
     },

     "wax-window/captionbar" : {
      include : "window/captionbar",
      
      style : function(states)
      {
        return {
         decorator : "window-captionbar-default"
        };
      }
     },

     "wax-window/close-button" :
    {
      alias : "button",

      style : function(states)
      {
        return {
          marginLeft : 2,
          icon : states.hovered ? "wax/demo/close-red-24px.svg" : "wax/demo/close-24px.svg",
          padding : [ 1, 2 ],
          cursor : states.disabled ? undefined : "pointer"
        };
      }
    },

    "wax-window/close-button/icon" :
    {
      alias : "image",

      style : function(states)
      {
        return {
          width : 24,
          height : 24
        };
      }
    }

  }
});