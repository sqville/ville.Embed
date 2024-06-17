/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Tabs",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 8a6 6 0 0 1 6-6h3a3 3 0 0 1 2.24 1H8a5 5 0 0 0-5 5v5.24A3 3 0 0 1 2 11V8Zm13-2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6Zm-8 9c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6ZM4 8.5A4.5 4.5 0 0 1 8.5 4H13a3 3 0 0 1 2.24 1H8.5A3.5 3.5 0 0 0 5 8.5v6.74A3 3 0 0 1 4 13V8.5Z",
    FILLED : "M2 8a6 6 0 0 1 6-6h3a3 3 0 0 1 2.24 1H8a5 5 0 0 0-5 5v5.24A3 3 0 0 1 2 11V8Zm2 .5A4.5 4.5 0 0 1 8.5 4H13a3 3 0 0 1 2.24 1H8.5A3.5 3.5 0 0 0 5 8.5v6.74A3 3 0 0 1 4 13V8.5ZM9 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});