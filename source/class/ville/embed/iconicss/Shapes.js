/* ************************************************************************
   License:
     MIT

   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */

 qx.Class.define("ville.embed.iconicss.Shapes",
 {
  extend : ville.embed.iconicss.Abstract,

  statics :
  {
    CSSCLASS : "shapes",
    STYLERULE : "width: .35em; height: .35em; background-color: currentColor; margin: .1em .55em .55em .1em;",
    PSEUDOBEFORERULE : "width: .35em; height: .35em; background-color: currentColor; border-radius: 50%; top: 0; left: .45em",
    PSEUDOAFTERRULE : "width: .4em; height: .4em; border: .2em solid currentColor; border-color: currentColor currentColor transparent transparent; transform: scaleX(.7) rotate(-45deg); box-shadow: -.34em -.56em 0 -.04em; top: .58em; left: .425em;"
  }
 });