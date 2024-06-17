/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleCab",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM7 3h-.86a2.5 2.5 0 0 0-2.45 2.01l-.2.99h-.74a.75.75 0 0 0 0 1.5h.44l-.11.56A1.5 1.5 0 0 0 2 9.5v5c0 .83.67 1.5 1.5 1.5H4v1a1 1 0 1 0 2 0v-1h8v1a1 1 0 1 0 2 0v-1h.5c.83 0 1.5-.67 1.5-1.5v-5a1.5 1.5 0 0 0-1.08-1.44l-.11-.56h.54a.75.75 0 0 0 .65-.75v-.1a.75.75 0 0 0-.75-.65h-.74l-.2-.99A2.5 2.5 0 0 0 13.86 3H13V1.75a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75V3Zm1 0V2h4v1H8ZM3.5 9h13c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5Zm2.64-5h7.72c.72 0 1.33.5 1.47 1.2L15.9 8H4.11l.56-2.8C4.8 4.5 5.42 4 6.14 4Z",
    FILLED : "M7.75 1a.75.75 0 0 0-.75.75V3h-.86a2.5 2.5 0 0 0-2.45 2.01l-.2.99h-.74a.75.75 0 0 0 0 1.5h.44l-.11.56A1.5 1.5 0 0 0 2 9.5v4c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-4a1.5 1.5 0 0 0-1.08-1.44l-.11-.56h.54a.75.75 0 0 0 .65-.75v-.1a.75.75 0 0 0-.75-.65h-.74l-.2-.99A2.5 2.5 0 0 0 13.86 3H13V1.75a.75.75 0 0 0-.75-.75h-4.5ZM6.14 4h7.72c.72 0 1.33.5 1.47 1.2L15.9 8H4.11l.56-2.8C4.8 4.5 5.42 4 6.14 4ZM5 11.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm8 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM6 17v-1H4v1a1 1 0 1 0 2 0Zm10-1v1a1 1 0 1 1-2 0v-1h2Z"
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