/* ************************************************************************
   License:
     MIT

   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */

 qx.Class.define("ville.embed.iconicss.SunO",
 {
  extend : ville.embed.iconicss.Abstract,

  statics :
  {
    CSSCLASS : "sun-o",
    STYLERULE : "width: .6em; height: .6em; border-radius: 50%; background-color: transparent; border: 0.03em solid transparent; box-shadow: inset 0 0 0 .065em; margin: .2em;",
    PSEUDOBEFORERULE : "width: .1em; height: .1em; background-color: transparent; top: 50%; left: 50%; transform: translate(-50%, -50%); box-shadow: .45em 0, .38em 0, -.45em 0, -.38em 0, 0 .45em, 0 .38em, 0 -.45em, 0 -.38em;",
    PSEUDOAFTERRULE : "width: .1em; height: .1em; background-color: transparent; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg); box-shadow: .45em 0, .38em 0, -.45em 0, -.38em 0, 0 .45em, 0 .38em, 0 -.45em, 0 -.38em;"
  }
 });