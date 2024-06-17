/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookArrowClockwise",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.5 3.48a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.76a4.5 4.5 0 1 0 2 3.74.5.5 0 0 0-1 0 3.5 3.5 0 1 1-1.7-3h-.8a.5.5 0 0 0 0 1h2Zm-1.5 7.3c-.32.08-.66.15-1 .18V15H5V4a1 1 0 0 1 1-1h3.59c.18-.36.4-.7.65-1H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1v-4.23Z",
    FILLED : "M18 2.98a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8a3.5 3.5 0 1 0 1.7 3 .5.5 0 0 1 1 0 4.5 4.5 0 1 1-2-3.74V.98a.5.5 0 0 1 .5-.5c.28 0 .5.22.5.5v2ZM9.02 6A5.5 5.5 0 0 0 16 10.77V15a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h4.24a5.5 5.5 0 0 0-1.22 4Z"
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