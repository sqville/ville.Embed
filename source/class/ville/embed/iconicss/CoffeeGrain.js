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
 
   /**
    * @param size (Int)
    * @param color (Str)
    */
   construct (size, color)
   {
    super();
    //for iconicss group, we need to set the class name and add css rules to the global style sheet
    this.setCssClass("icss-coffee-grain");

    //add CSS rules to global stylesheet
    var sheet = qx.ui.style.Stylesheet.getInstance();
    sheet.addRule("i.icss-coffee-grain", "width: .6em; height: .8em; border-radius: 60% 40%; background-color: transparent; box-shadow: inset 0 0 0 .065em; overflow: hidden; margin: .1em .2em;");
    sheet.addRule("i.icss-coffee-grain:before", "width: .5em; height: .7em; border-radius: 50%; border: .1em solid transparent; box-shadow: inset 0 0 0 .2em, -.25em 0, -.3em .15em; transform: rotate(25deg); top: -.2em; left: .21em;");
    sheet.addRule("i.icss-coffee-grain:after", "width: .5em; height: .7em; border-radius: 50%; border: .1em solid transparent; box-shadow: inset 0 0 0 .2em, .25em 0, .3em -.15em; transform: rotate(25deg); top: .28em; left: -.11em;");

    if (size) {
      this.setSize(size);
    }
    
    if (color) {
      this.setTextColor(color);
    }

    this._addIconTag(this.getCssClass(), this.getSize(), this.getTextColor());

  }
 });