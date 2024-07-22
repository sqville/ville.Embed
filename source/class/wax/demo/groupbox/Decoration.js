/* ************************************************************************

   License: MIT

   Authors: Chris Eskew (sqville)

************************************************************************ */

/**
 * @asset(wax/demo/baseline-expand_more-24px.svg)
 * @asset(wax/demo/baseline-expand_less-24px.svg)
 */

qx.Theme.define("wax.demo.groupbox.Decoration",
{
  decorations :
  {    
    "ville-groupbox-open" :
    {
      style :
      {
        backgroundImage: "wax/demo/baseline-expand_less-24px.svg",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },

    "ville-groupbox-closed" :
    {
      style :
      {
        backgroundImage: "wax/demo/baseline-expand_more-24px.svg",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },

    "ville-white-box" :
    {
      style :
      {
        width: 1,
        color: "white-box-border",
        radius: 3
      }
    },

    "ville-connected-top-box" :
    {
    	include : "ville-white-box",
    	
    	style :
	    {
	      width: [1,0,0,0],
	      radius: [ 0, 0, 0, 0 ]
	    }
    }
   
  }
});