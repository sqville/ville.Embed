/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TabDesktopArrowClockwise",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-3.76c.26-.3.48-.64.66-1h3.1c.83 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 0 1 8 5.5V4H5.5C4.67 4 4 4.67 4 5.5v3.1c-.36.18-.7.4-1 .66V5.5ZM16 6v-.5c0-.83-.67-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16ZM9.5 8.5c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8a3.5 3.5 0 1 0 1.7 3 .5.5 0 0 1 1 0 4.5 4.5 0 1 1-2-3.74V9c0-.28.22-.5.5-.5Z",
    FILLED : "M5.5 3A2.5 2.5 0 0 0 3 5.5v3.76a5.48 5.48 0 0 1 5.2-1A1.5 1.5 0 0 1 11 9v1.34a5.48 5.48 0 0 1-.26 6.66h3.76a2.5 2.5 0 0 0 2.5-2.5V7H9.5A1.5 1.5 0 0 1 8 5.5V3H5.5ZM9 3v2.5c0 .28.22.5.5.5H17v-.5A2.5 2.5 0 0 0 14.5 3H9Zm1 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8a3.5 3.5 0 1 0 1.7 3 .5.5 0 0 1 1 0 4.5 4.5 0 1 1-2-3.74V9a.5.5 0 0 1 .5-.5c.28 0 .5.22.5.5v2Z"
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