/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.InprivateAccount",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 6a4 4 0 0 1 7.12-2.5H10V3a3 3 0 0 0 0 6v-.5h3.12A4 4 0 0 1 6 6Zm7.7 1.5H10v-1h3.97c-.04.35-.13.68-.26 1Zm.27-2a3.97 3.97 0 0 0-.26-1H10v1h3.97ZM3 13a2 2 0 0 1 2-2h10a2 2 0 0 1 1.73 1H5a1 1 0 0 0-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 10 17h4.52c-1.24.68-2.83 1-4.52 1a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 13Zm7 1v-1h7c0 .35-.04.68-.1 1H10Zm6.54 1c-.18.36-.42.7-.7 1h-1.59.01H10v-1h6.54Z",
    FILLED : "M10 2a4 4 0 1 0 3.12 6.5H10v-1h3.7c.14-.32.23-.65.27-1H10v-1h3.97a3.97 3.97 0 0 0-.26-1H10v-1h3.12A4 4 0 0 0 10 2Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c1.7 0 3.28-.32 4.52-1H10v-1h5.84c.28-.3.52-.64.7-1H10v-1h6.9c.06-.32.1-.65.1-1h-7v-1h6.73A2 2 0 0 0 15 11H5Z"
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