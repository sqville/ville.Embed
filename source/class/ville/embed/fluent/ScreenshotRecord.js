/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ScreenshotRecord",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 5.75A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75V9.6c-.32-.16-.65-.3-1-.4V5.76C16 4.78 15.22 4 14.25 4h-8.5C4.78 4 4 4.78 4 5.75v8.5c0 .97.78 1.75 1.75 1.75h3.46c.1.35.23.68.39 1H5.75A2.75 2.75 0 0 1 3 14.25v-8.5ZM15 8.5a.5.5 0 0 1-1 0v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2c.83 0 1.5.67 1.5 1.5v2ZM8.5 14a.5.5 0 0 1 0 1h-2A1.5 1.5 0 0 1 5 13.5v-2a.5.5 0 0 1 1 0v2c0 .28.22.5.5.5h2Zm-2-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2C5 5.67 5.67 5 6.5 5h2a.5.5 0 0 1 0 1h-2Zm8 5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0 8a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2.5-4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
    FILLED : "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6A5.5 5.5 0 0 1 17 9.6V6a3 3 0 0 0-3-3H6Zm8.5 6a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2c.83 0 1.5.67 1.5 1.5v2a.5.5 0 0 1-.5.5ZM9 14.5a.5.5 0 0 1-.5.5h-2A1.5 1.5 0 0 1 5 13.5v-2a.5.5 0 0 1 1 0v2c0 .28.22.5.5.5h2c.28 0 .5.22.5.5ZM6.5 6a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2C5 5.67 5.67 5 6.5 5h2a.5.5 0 0 1 0 1h-2Zm8 5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0 8a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2.5-4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
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