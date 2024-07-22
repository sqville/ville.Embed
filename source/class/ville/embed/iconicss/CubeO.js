/* ************************************************************************
   License:
     MIT

   Authors:
     * Chris Eskew (SQville) sqville@gmail.com

************************************************************************ */

 qx.Class.define("ville.embed.iconicss.CubeO",
 {
   extend : ville.embed.iconicss.Abstract,

   statics :
  {
    CSSCLASS : "cube-o",
    STYLERULE : "width: .7em; height: .7em; background-color: transparent; box-shadow: inset 0 0 0 .065em; margin: .3em .3em 0 0;",
    PSEUDOBEFORERULE : "width: .7em; height: .7em; background-color: transparent; box-shadow: inset 0 0 0 .065em; top: -.3em; left: .3em;",
    PSEUDOAFTERRULE : "width: .3em; height: .09em; background-color: currentColor; box-shadow: .05em .65em, .66em .66em, .7em 1.31em; transform: skewY(-45deg); transform-origin: 0 100%; top: 0; left: 0;"
  }
 });