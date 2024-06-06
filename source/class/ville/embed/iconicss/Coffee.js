/* ************************************************************************
   License:
     MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
 qx.Class.define("ville.embed.iconicss.Coffee",
 {
   extend : ville.embed.iconicss.Abstract,
   construct (size, color)
   {
    super();
    this.setCssClass("icss-coffee");
    //add CSS rules to global stylesheet
    var sheet = qx.ui.style.Stylesheet.getInstance();
    sheet.addRule("i.icss-coffee", "height: .7em; width: .75em; border-radius: 0 0 .3em .3em; margin: .14em .2em .16em .05em;");
    sheet.addRule("i.icss-coffee:before", "height: .11em; width: .9em; background-color: currentColor; border-radius: 0 0 .1em .1em; left:-0.05em; top: .755em;");
    sheet.addRule("i.icss-coffee:after", "height: .3em; width: .4em; border-width: .1em; border-style: solid; border-radius: .1em; top: .1em; left: .55em;");
    if (size) {
      this.setSize(size);
    }
    if (color) {
      this.setTextColor(color);
    }
    this._addIconTag(this.getCssClass(), this.getSize(), this.getTextColor());
  }
 });