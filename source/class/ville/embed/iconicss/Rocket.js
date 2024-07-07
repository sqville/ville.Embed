/* ************************************************************************
   License:
     MIT

   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */

 qx.Class.define("ville.embed.iconicss.Rocket",
 {
   extend : ville.embed.iconicss.AbstractNew,

  statics :
  {
    CSSCLASS : "rocket",
    STYLERULE : "width: .23em; height: .23em; background-color: transparent; border: .05em solid transparent; border-radius: 50%; box-shadow: inset 0 0 0 .05em, 0 0 0 .05em, .098em -.098em 0 0, .13em -.13em 0 -.02em, .23em -.23em 0 -.05em; margin: .2em .2em .57em .57em;",
    PSEUDOBEFORERULE : "width: .8em; height: .5em; background-color: transparent; border: 0 solid transparent; border-width: .07em 0; border-radius: 60% 50% 50% 60% / 45% 55% 55% 45%; box-shadow: inset -.3em 0 0 -.2em, inset 0 0 0 .05em, inset .53em 0 0 -.1em, -.3em -.22em 0 -.14em, -.3em .22em 0 -.14em; transform: rotate(-45deg); top: -.07em; left: -.45em;",
    PSEUDOAFTERRULE : "width: .18em; height: .14em; border-radius: 0 100% 50% 100%; background: transparent; transform: scaleX(.8) rotate(-75deg); box-shadow: -.07em .06em, -.09em -.06em, .01em -.09em; top: .53em; left: -.55em;"
  }
 });