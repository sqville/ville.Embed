/* ************************************************************************

   Ville Software (SQville)

   License:
     MIT

   Authors:
     * Chris Eskew (SQville) sqville@gmail.com

************************************************************************ */

 qx.Class.define("ville.embed.iconicss.CubeO",
 {
   extend : ville.embed.iconicss.Abstract3,
 
   /**
    * @param size (Int)
    * @param color (Str)
    */
   construct (size, color)
   {
    super();
    //for iconicss group, we need to set the class name and add css rules to the global style sheet
    this.setCssClass("icss-cube-o");

    //add CSS rules to global stylesheet
    var sheet = qx.ui.style.Stylesheet.getInstance();
    sheet.addRule("i.icss-cube-o", "width: .7em; height: .7em; background-color: transparent; box-shadow: inset 0 0 0 .065em; margin: .3em .3em 0 0;");
    sheet.addRule("i.icss-cube-o:before", "width: .7em; height: .7em; background-color: transparent; box-shadow: inset 0 0 0 .065em; top: -.3em; left: .3em;");
    sheet.addRule("i.icss-cube-o:after", "width: .3em; height: .09em; background-color: currentColor; box-shadow: .05em .65em, .66em .66em, .7em 1.31em; transform: skewY(-45deg); transform-origin: 0 100%; top: 0; left: 0;");

    if (size) {
      this.setSize(size);
    }
    
    if (color) {
      this.setTextColor(color);
    }

    //this.setValue(`<i class="${this.getCssClass()}" style="font-size:${this.getSize()}em; color:${this.getTextColor()};"></i>`);
    this._addIconTag(this.getCssClass(), this.getSize(), this.getTextColor());

  }
 });