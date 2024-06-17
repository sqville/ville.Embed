/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleCarProfileLtrClock",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM5.5 3a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H7a.5.5 0 0 0 0-1H6V3.5a.5.5 0 0 0-.5-.5ZM3 12.56c0-.71.3-1.37.8-1.83A5.5 5.5 0 0 0 10 8.66V10h3.87l-1.24-2.23a1.5 1.5 0 0 0-1.3-.77h-.54c.1-.32.16-.66.19-1h.34c.91 0 1.75.5 2.19 1.29l1.54 2.77 2.1.56A2.5 2.5 0 0 1 19 13.04v1.21c0 .7-.42 1.32-1.02 1.6a2.5 2.5 0 0 1-4.93.15h-4.1a2.5 2.5 0 0 1-4.93-.16A1.75 1.75 0 0 1 3 14.25v-1.69ZM5.53 11v.01l-.4.1A1.5 1.5 0 0 0 4 12.56v1.7c0 .15.05.3.14.42a2.5 2.5 0 0 1 4.81.32h4.1a2.5 2.5 0 0 1 4.81-.32.75.75 0 0 0 .14-.43v-1.21a1.5 1.5 0 0 0-1.11-1.45l-2.2-.59H5.52Zm.97 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
    FILLED : "M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM5.5 3a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H7a.5.5 0 0 0 0-1H6V3.5a.5.5 0 0 0-.5-.5ZM3 12.56c0-.71.3-1.37.8-1.83A5.5 5.5 0 0 0 10 8.66V10h3.87l-1.24-2.23a1.5 1.5 0 0 0-1.3-.77h-.54c.1-.32.16-.66.19-1h.34c.91 0 1.75.5 2.19 1.29l1.54 2.77 2.1.56A2.5 2.5 0 0 1 19 13.04v1.21c0 .7-.42 1.32-1.02 1.6a2.5 2.5 0 0 1-4.93.15h-4.1a2.5 2.5 0 0 1-4.93-.16A1.75 1.75 0 0 1 3 14.25v-1.69Zm2 2.94a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm9 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
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