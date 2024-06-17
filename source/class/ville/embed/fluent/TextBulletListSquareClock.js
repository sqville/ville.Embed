/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextBulletListSquareClock",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.75 3h8.5A2.75 2.75 0 0 1 17 5.75V9.6c-.32-.16-.65-.3-1-.4V5.76C16 4.78 15.22 4 14.25 4h-8.5C4.78 4 4 4.78 4 5.75v8.5c0 .97.78 1.75 1.75 1.75h3.46c.1.35.23.68.39 1H5.75A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3Zm3.75 7h1.84c-.4.28-.77.62-1.08 1H9.5a.5.5 0 0 1 0-1ZM6.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9 7.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm10 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z",
    FILLED : "M5.75 3A2.75 2.75 0 0 0 3 5.75v8.5A2.75 2.75 0 0 0 5.75 17H9.6a5.48 5.48 0 0 1 .66-6H9.5a.5.5 0 0 1 0-1h1.84A5.47 5.47 0 0 1 17 9.6V5.75A2.75 2.75 0 0 0 14.25 3h-8.5ZM7.5 7.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 9.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm.75 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.5 8a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4Zm5 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-.5-6.5a.5.5 0 0 1 1 0V14h1a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5v-2Z"
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