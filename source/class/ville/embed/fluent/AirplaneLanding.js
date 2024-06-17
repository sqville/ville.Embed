/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AirplaneLanding",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m12.36 7-1.5-3.15C10.15 2.41 8 2.91 8 4.5v1.78l-2-.54V4.2c0-1.22-1.61-1.66-2.23-.6L2.24 6.19c-.57.96-.1 2.2.96 2.55l3.42 1.12-1.68 1.52c-1.17 1.08-.08 3 1.45 2.55l6.6-1.99 3.04 1A1.5 1.5 0 0 0 18 11.5V11a4 4 0 0 0-4-4h-1.64Zm-1.1 0h-.5a1 1 0 0 1-.26-.04L9 6.56V4.5c0-.53.72-.7.95-.21L11.25 7ZM2 17.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm11.59-6.41a2 2 0 0 0-1.18-.01L6.1 12.97c-.51.15-.87-.49-.48-.85l1.67-1.53a1 1 0 0 0-.36-1.68L3.52 7.79a.75.75 0 0 1-.42-1.1L4.63 4.1c.1-.17.37-.1.37.1v1.92c0 .22.15.42.37.48l4.87 1.33a2 2 0 0 0 .53.07H14a3 3 0 0 1 3 3v.51a.5.5 0 0 1-.66.48l-2.39-.79-.36-.11Z",
    FILLED : "m11.88 6-1.03-2.15C10.16 2.41 8 2.91 8 4.5v.74l2.77.76h1.11Zm-1.11 1a1 1 0 0 1-.27-.04L6 5.74V4.2c0-1.22-1.61-1.66-2.23-.6L2.24 6.19c-.57.96-.1 2.2.96 2.55l3.42 1.12-1.68 1.52c-1.17 1.08-.08 3 1.45 2.55l6.6-1.99 3.04 1A1.5 1.5 0 0 0 18 11.5V11a4 4 0 0 0-4-4h-3.23ZM2 17.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Z"
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