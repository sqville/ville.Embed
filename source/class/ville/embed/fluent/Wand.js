/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Wand",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.5 2c.28 0 .5.22.5.5V3h.5a.5.5 0 0 1 0 1H17v.5a.5.5 0 0 1-1 0V4h-.5a.5.5 0 1 1 0-1h.5v-.5c0-.28.22-.5.5-.5Zm-10 4a.5.5 0 0 0 0-1H6v-.5a.5.5 0 0 0-1 0V5h-.5a.5.5 0 0 0 0 1H5v.5a.5.5 0 0 0 1 0V6h.5Zm9 9a.5.5 0 0 0 0-1H15v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 1 0 0 1h.5v.5a.5.5 0 1 0 1 0V15h.5Zm-2.07-8.43a1.91 1.91 0 0 0-2.7 0l-8.17 8.16a1.91 1.91 0 1 0 2.7 2.7l8.17-8.16c.75-.74.75-1.96 0-2.7Zm-2 .7a.91.91 0 0 1 1.3 1.3l-.48.47-1.3-1.29.48-.48Zm-1.18 1.19 1.3 1.29-6.99 6.98a.91.91 0 0 1-1.3-1.29l6.99-6.98Z",
    FILLED : "M17 2.5a.5.5 0 0 0-1 0V3h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1H17v-.5Zm-10 3a.5.5 0 0 1-.5.5H6v.5a.5.5 0 0 1-1 0V6h-.5a.5.5 0 0 1 0-1H5v-.5a.5.5 0 0 1 1 0V5h.5c.28 0 .5.22.5.5Zm9 9a.5.5 0 0 1-.5.5H15v.5a.5.5 0 0 1-1 0V15h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 1 0v.5h.5c.28 0 .5.22.5.5Zm-2.57-7.93a1.91 1.91 0 0 0-2.7 0l-.48.47 2.7 2.71.48-.48c.75-.74.75-1.96 0-2.7Zm-1.18 3.89-2.7-2.71-6.99 6.98a1.91 1.91 0 1 0 2.7 2.7l6.99-6.97Z"
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