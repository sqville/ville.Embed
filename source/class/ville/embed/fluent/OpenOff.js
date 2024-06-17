/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.OpenOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m2.85 2.15 15 15a.5.5 0 0 1-.7.7l-1.41-1.4c-.5.34-1.1.55-1.74.55H6a3 3 0 0 1-3-3V6c0-.65.2-1.25.55-1.74l-1.4-1.4a.5.5 0 1 1 .7-.71Zm12.17 13.57L4.28 4.98A2 2 0 0 0 4 6v8c0 1.1.9 2 2 2h8a2 2 0 0 0 1.02-.28Zm1.88-.94-.9-.9V11.5a.5.5 0 0 1 1 0V14a3 3 0 0 1-.1.78ZM5.22 3.1l.9.9H8.5a.5.5 0 0 0 0-1H6a3 3 0 0 0-.78.1Zm5.78.4c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V4.7l-4.15 4.15a.5.5 0 0 1-.7-.7L15.29 4H11.5a.5.5 0 0 1-.5-.5Z",
    FILLED : "m2.85 2.15 15 15a.5.5 0 0 1-.7.7l-1.48-1.48c-.54.4-1.2.63-1.92.63h-7.5A3.25 3.25 0 0 1 3 13.75v-7.5c0-.72.23-1.38.63-1.92L2.15 2.85a.5.5 0 1 1 .7-.7Zm11.73 13.14L4.71 5.42c-.13.25-.21.53-.21.83v7.5c0 .97.78 1.75 1.75 1.75h7.5c.3 0 .59-.08.83-.21Zm-4.01-6.85.99 1a.75.75 0 0 0 .22-.16l3.72-3.72v3.19a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0 0 1.5h3.19l-3.72 3.72a.75.75 0 0 0-.15.22Zm6.28 6.29-1.35-1.35v-1.63a.75.75 0 0 1 1.5 0v2c0 .34-.05.67-.15.98ZM5.27 3.15 6.62 4.5h1.63a.75.75 0 0 0 0-1.5h-2c-.34 0-.67.05-.98.15Z"
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