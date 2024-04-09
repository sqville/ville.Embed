/* ************************************************************************
   License:
     MIT

   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */

 qx.Class.define("ville.embed.iconicss.Shapes",
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
    this.setCssClass("icss-shapes");
    //add CSS rules to global stylesheet
    var sheet = qx.ui.style.Stylesheet.getInstance();
    sheet.addRule("i.icss-shapes", "width: .35em; height: .35em; background-color: currentColor; margin: .1em .55em .55em .1em;");
    sheet.addRule("i.icss-shapes:before", "width: .35em; height: .35em; background-color: currentColor; border-radius: 50%; top: 0; left: .45em");
    sheet.addRule("i.icss-shapes:after", "width: .4em; height: .4em; border: .2em solid currentColor; border-color: currentColor currentColor transparent transparent; transform: scaleX(.7) rotate(-45deg); box-shadow: -.34em -.56em 0 -.04em; top: .58em; left: .425em;");

    if (size) {
      this.setSize(size);
    }
    
    if (color) {
      this.setTextColor(color);
    }

    this._addIconTag(this.getCssClass(), this.getSize(), this.getTextColor());

  }
 });