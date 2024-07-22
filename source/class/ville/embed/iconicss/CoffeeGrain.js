/* ************************************************************************

   Ville Software (SQville)

   License:
     MIT

   Authors:
     * Chris Eskew (SQville) sqville@gmail.com

************************************************************************ */

/**
 * CSS Rule source can be referrenced in the resource css file noted below
 */

 qx.Class.define("ville.embed.iconicss.CoffeeGrain",
 {
  extend : ville.embed.iconicss.Abstract,

  statics :
  {
    CSSCLASS : "coffee-grain",
    STYLERULE : "width: .6em; height: .8em; border-radius: 60% 40%; background-color: transparent; box-shadow: inset 0 0 0 .065em; overflow: hidden; margin: .1em .2em;",
    PSEUDOBEFORERULE : "width: .5em; height: .7em; border-radius: 50%; border: .1em solid transparent; box-shadow: inset 0 0 0 .2em, -.25em 0, -.3em .15em; transform: rotate(25deg); top: -.2em; left: .21em;",
    PSEUDOAFTERRULE : "width: .5em; height: .7em; border-radius: 50%; border: .1em solid transparent; box-shadow: inset 0 0 0 .2em, .25em 0, .3em -.15em; transform: rotate(25deg); top: .28em; left: -.11em;"
  }
 });