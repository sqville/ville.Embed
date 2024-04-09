/* ************************************************************************
   License:
     MIT

   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */

 qx.Class.define("ville.embed.iconicss.Football",
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
    this.setCssClass("icss-football");
    //add CSS rules to global stylesheet
    var sheet = qx.ui.style.Stylesheet.getInstance();
    sheet.addRule("i.icss-football", "width: 1em; height: 1em; border-radius: 75% 0.18em; background-color: transparent; box-shadow: inset 0 0 0 .08em,inset .3em -.3em 0 -0.23em,inset -.3em .3em 0 -0.23em;");
    sheet.addRule("i.icss-football:before", "width: .65em; height: .25em; border-top: 0.08em solid currentColor; border-radius: 50%; transform: rotate(-45deg); top: .35em; left: .18em;");
    sheet.addRule("i.icss-football:after", "width: .08em; height: .25em; border-radius: .06em; background: currentColor; transform: rotate(-45deg); top: .4em; left: .32em; box-shadow: .15em -.02em, .3em 0");

    if (size) {
      this.setSize(size);
    }
    
    if (color) {
      this.setTextColor(color);
    }

    this._addIconTag(this.getCssClass(), this.getSize(), this.getTextColor());

  }
 });