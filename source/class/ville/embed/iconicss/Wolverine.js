/* ************************************************************************
   License:
     MIT

   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */

 qx.Class.define("ville.embed.iconicss.Wolverine",
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
    this.setCssClass("icss-wolverine");
    //add CSS rules to global stylesheet
    var sheet = qx.ui.style.Stylesheet.getInstance();
    sheet.addRule("i.icss-wolverine", "width: .75em; height: .6em; border-radius: 50% 50% 40% 40%; background-color: transparent; border: .065em solid currentColor; border-bottom-color: transparent; box-shadow: 0 .53em 0 -.28em; margin: 0 .125em .4em;");
    sheet.addRule("i.icss-wolverine:before", "width: .45em; height: .5em; border-radius: 0 0 0 50% / 0 0 0 100%; background-image: radial-gradient(ellipse 100% 100% at 20% 110%, currentColor 39%, transparent 38%), radial-gradient(ellipse 50% 100% at 100% 115%, currentColor 37%, transparent 37%), radial-gradient(ellipse 150% 100% at 100% 0%, transparent 65%, currentColor 65%, currentColor 93%, transparent 93%); box-shadow: 0 .4em 0 -.17em, .05em .53em 0 -.15em, -.02em 0, 0 .1em; transform: rotate(-1deg) skewY(15deg); left: -.19em; top: -.02em;");
    sheet.addRule("i.icss-wolverine:after", "width: .45em; height: .5em; border-radius: 0 0 50% 0 / 0 0 100% 0; background-image: radial-gradient(ellipse 100% 100% at 80% 110%, currentColor 39%, transparent 38%), radial-gradient(ellipse 50% 100% at 0% 115%, currentColor 37%, transparent 37%), radial-gradient(ellipse 150% 100% at 0% 0%, transparent 65%, currentColor 65%, currentColor 93%, transparent 93%); box-shadow: 0 .4em 0 -.17em, -.05em .53em 0 -.15em, .02em 0, 0 .1em; transform: rotate(1deg) skewY(-15deg); left: .37em; top: -.02em;");

    if (size) {
      this.setSize(size);
    }
    
    if (color) {
      this.setTextColor(color);
    }

    this._addIconTag(this.getCssClass(), this.getSize(), this.getTextColor());

  }
 });