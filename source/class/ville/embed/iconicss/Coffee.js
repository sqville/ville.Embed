/* ************************************************************************
   License:
     MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
/**
 * @external(ville/embed/iconicss.coffee.css)
 */
 qx.Class.define("ville.embed.iconicss.Coffee",
 {
   extend : ville.embed.iconicss.Abstract,
   construct (size, color)
   {
    super();
    this.setCssClass("icss-coffee");
    if (size) {
      this.setSize(size);
    }
    if (color) {
      this.setTextColor(color);
    }
    this._addIconTag(this.getCssClass(), this.getSize(), this.getTextColor());
  }
 });