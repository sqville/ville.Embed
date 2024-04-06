/* ************************************************************************

   Ville Software (SQville)

   License:
     MIT

   Authors:
     * Chris Eskew (SQville) sqville@gmail.com

************************************************************************ */

/**
 * CSS Rule source can be referrenced in the resource css file noted below
 * @external(ville/embed/iconicss.sun-o.css)
 */

 qx.Class.define("ville.embed.iconicss.SunO",
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
    this.setCssClass("icss-sun-o");

    if (size) {
      this.setSize(size);
    }
    
    if (color) {
      this.setTextColor(color);
    }

    this._addIconTag(this.getCssClass(), this.getSize(), this.getTextColor());

  }
 });