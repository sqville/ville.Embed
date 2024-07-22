/* ************************************************************************
   License:
     MIT

   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */

 qx.Class.define("ville.embed.iconicss.Football",
 {
  extend : ville.embed.iconicss.Abstract,

  statics :
  {
    CSSCLASS : "football",
    STYLERULE : "width: 1em; height: 1em; border-radius: 75% 0.18em; background-color: transparent; box-shadow: inset 0 0 0 .08em,inset .3em -.3em 0 -0.23em,inset -.3em .3em 0 -0.23em;",
    PSEUDOBEFORERULE : "width: .65em; height: .25em; border-top: 0.08em solid currentColor; border-radius: 50%; transform: rotate(-45deg); top: .35em; left: .18em;",
    PSEUDOAFTERRULE : "width: .08em; height: .25em; border-radius: .06em; background: currentColor; transform: rotate(-45deg); top: .4em; left: .32em; box-shadow: .15em -.02em, .3em 0"
  }
 });