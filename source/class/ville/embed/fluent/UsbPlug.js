/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.UsbPlug",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.5 2h5c.28 0 .5.22.5.5V6h.08C14.14 6 15 6.85 15 7.91v5.18c0 1.06-.86 1.91-1.92 1.91H12v2.5a.5.5 0 0 1-1 0V15H9v2.5a.5.5 0 0 1-1 0V15H6.92A1.92 1.92 0 0 1 5 13.09V7.9C5 6.85 5.86 6 6.92 6H7V2.5c0-.28.22-.5.5-.5Zm5.58 12c.51 0 .92-.41.92-.91V7.9c0-.5-.4-.91-.92-.91H6.92a.92.92 0 0 0-.92.91v5.18c0 .5.4.91.92.91h6.16ZM12 6V3H8v3h4Z",
    FILLED : "M7 2.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V6h.08C14.14 6 15 6.85 15 7.91v5.18c0 1.06-.86 1.91-1.92 1.91H12v2.5a.5.5 0 0 1-1 0V15H9v2.5a.5.5 0 0 1-1 0V15H6.92A1.92 1.92 0 0 1 5 13.09V7.9C5 6.85 5.86 6 6.92 6H7V2.5ZM8 6h4V3H8v3Z"
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