/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PinOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7L6.9 7.6 4.02 8.75a1 1 0 0 0-.34 1.64L6.3 13 3 16.3v.7h.7L7 13.7l2.61 2.62a1 1 0 0 0 1.64-.34l1.15-2.88 4.75 4.75a.5.5 0 0 0 .7-.7l-15-15Zm8.78 10.18-1.31 3.28-5.93-5.93 3.28-1.3 3.96 3.95Zm1.33-1.62-.08.04.74.75 3.24-1.62a2 2 0 0 0 .52-3.2l-4.05-4.06a2 2 0 0 0-3.2.52L8.5 6.38l.75.74.04-.08 1.73-3.45a1 1 0 0 1 1.6-.26l4.05 4.05a1 1 0 0 1-.26 1.6l-3.45 1.73Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7L6.9 7.6 4.02 8.75a1 1 0 0 0-.34 1.64L6.3 13 3 16.3v.7h.7L7 13.7l2.61 2.62a1 1 0 0 0 1.64-.34l1.15-2.88 4.75 4.75a.5.5 0 0 0 .7-.7l-15-15Zm14.01 7.73-3.24 1.62L8.5 6.38l1.62-3.24a2 2 0 0 1 3.2-.52l4.06 4.05a2 2 0 0 1-.52 3.2Z"
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