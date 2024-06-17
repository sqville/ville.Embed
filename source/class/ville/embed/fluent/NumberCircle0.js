/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NumberCircle0",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-7 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-2-8c0-1.07.15-1.97.49-2.6.16-.3.36-.51.6-.66.23-.15.52-.24.91-.24s.68.1.92.24c.23.15.43.37.6.67.33.62.48 1.52.48 2.59 0 1.07-.15 1.97-.49 2.6-.16.3-.36.51-.6.66-.23.15-.52.24-.91.24s-.68-.1-.92-.24a1.74 1.74 0 0 1-.6-.67A5.65 5.65 0 0 1 8 10Zm2-4.5c-.55 0-1.04.13-1.45.4-.4.25-.72.61-.94 1.03A6.6 6.6 0 0 0 7 10c0 1.14.16 2.23.6 3.07.23.42.54.78.95 1.04.41.26.9.39 1.45.39.55 0 1.04-.13 1.45-.4.4-.25.72-.61.94-1.03.45-.84.61-1.93.61-3.07a6.6 6.6 0 0 0-.6-3.07 2.74 2.74 0 0 0-.95-1.04c-.41-.26-.9-.39-1.45-.39Z",
    FILLED : "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6 0c0-1.07.15-1.97.49-2.6.16-.3.36-.51.6-.66.23-.15.52-.24.91-.24s.68.1.92.24c.23.15.43.37.6.67.33.62.48 1.52.48 2.59 0 1.07-.15 1.97-.49 2.6-.16.3-.36.51-.6.66-.23.15-.52.24-.91.24s-.68-.1-.92-.24a1.74 1.74 0 0 1-.6-.67A5.65 5.65 0 0 1 8 10Zm2-4.5c-.55 0-1.04.13-1.45.4-.4.25-.72.61-.94 1.03A6.6 6.6 0 0 0 7 10c0 1.14.16 2.23.6 3.07.23.42.54.78.95 1.04.41.26.9.39 1.45.39.55 0 1.04-.13 1.45-.4.4-.25.72-.61.94-1.03.45-.84.61-1.93.61-3.07a6.6 6.6 0 0 0-.6-3.07 2.74 2.74 0 0 0-.95-1.04c-.41-.26-.9-.39-1.45-.39Z"
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