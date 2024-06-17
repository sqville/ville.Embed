/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WindowInprivateAccount",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.66c-.1-.32-.15-.65-.16-1H5.5A1.5 1.5 0 0 1 4 14.5V7h13V5.5A2.5 2.5 0 0 0 14.5 3h-9ZM16 5.5V6H4v-.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5ZM15 12a1.5 1.5 0 0 1 0-3h2a2.5 2.5 0 1 0 0 3h-2Zm-2.45 3c-.11 0-.25.06-.37.2a.68.68 0 0 0-.18.42v.32c0 .89.97 2.06 3 2.06h2.99c-.71.6-1.75 1-2.99 1-2.37 0-4-1.43-4-3.06v-.32c0-.4.17-.8.43-1.1.27-.28.66-.52 1.12-.52h4.9c.46 0 .86.24 1.12.53.12.14.22.3.3.47h-6.32Zm4.95-4.5c0 .17-.02.34-.05.5H15v-1h2.45c.03.16.05.33.05.5ZM15 17h3.76c.15-.32.23-.65.24-1h-4v1Z",
    FILLED : "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5V6H3v1h12a3.5 3.5 0 0 0-2.45 6 2.5 2.5 0 0 0-1.86.86c-.4.45-.69 1.08-.69 1.76v.32c0 .37.06.73.16 1.06H5.5A2.5 2.5 0 0 1 3 14.5v-9ZM15 13a2.5 2.5 0 1 1 2-4h-2v1h2.45a2.51 2.51 0 0 1 0 1H15v1h2c-.46.6-1.18 1-2 1Zm-2.45 1c-.46 0-.86.24-1.12.53-.26.29-.43.69-.43 1.09v.32c0 1.63 1.63 3.06 4 3.06 1.24 0 2.28-.4 2.99-1H15v-1h3.76c.15-.32.23-.65.24-1h-4v-1h3.87a1.78 1.78 0 0 0-.3-.47 1.5 1.5 0 0 0-1.12-.53h-4.9Z"
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