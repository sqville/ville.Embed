/* ************************************************************************
   License:
     MIT

   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */

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
    //add CSS rules to global stylesheet
    var sheet = qx.ui.style.Stylesheet.getInstance();
    sheet.addRule("i.icss-sun-o", "width: .6em; height: .6em; border-radius: 50%; background-color: transparent; border: 0.03em solid transparent; box-shadow: inset 0 0 0 .065em; margin: .2em;");
    sheet.addRule("i.icss-sun-o:before", "width: .1em; height: .1em; background-color: transparent; top: 50%; left: 50%; transform: translate(-50%, -50%); box-shadow: .45em 0, .38em 0, -.45em 0, -.38em 0, 0 .45em, 0 .38em, 0 -.45em, 0 -.38em;");
    sheet.addRule("i.icss-sun-o:after", "width: .1em; height: .1em; background-color: transparent; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg); box-shadow: .45em 0, .38em 0, -.45em 0, -.38em 0, 0 .45em, 0 .38em, 0 -.45em, 0 -.38em;");

    if (size) {
      this.setSize(size);
    }
    
    if (color) {
      this.setTextColor(color);
    }

    this._addIconTag(this.getCssClass(), this.getSize(), this.getTextColor());

  }
 });