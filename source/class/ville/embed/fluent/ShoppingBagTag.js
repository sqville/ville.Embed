/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShoppingBagTag",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2.5a2.5 2.5 0 0 0-4 2V6H5a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3h4.53l-.98-1H7a2 2 0 0 1-2-2V7h6v2.05c.16-.03.34-.05.51-.05H12V7h3v2.08c.37.09.7.27 1 .51V7a1 1 0 0 0-1-1h-1V4.5a2.5 2.5 0 0 0-4-2Zm-3 2a1.5 1.5 0 1 1 3 0V6H7V4.5Zm3.67-1.25A1.5 1.5 0 0 1 13 4.5V6h-2V4.5c0-.45-.12-.88-.33-1.25Zm-.24 12.2a1.51 1.51 0 0 1-.43-1.06v-2.88c0-.83.68-1.51 1.51-1.51h2.87c.4 0 .8.16 1.07.45l3.11 3.14c.6.6.58 1.57-.02 2.15l-2.95 2.84a1.5 1.5 0 0 1-2.12-.03l-3.04-3.1Zm1.57-2.7a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z",
    FILLED : "M6 6V4.5a2.42 2.42 0 0 1 .73-1.77A2.43 2.43 0 0 1 8.5 2a2.43 2.43 0 0 1 1.5.5 2.44 2.44 0 0 1 2.48-.3 2.53 2.53 0 0 1 1.32 1.33c.13.3.2.63.2.97V6h1a1 1 0 0 1 1 1v2.6a2.5 2.5 0 0 0-1.62-.6H12V6h1V4.5a1.47 1.47 0 0 0-.44-1.06A1.48 1.48 0 0 0 11.5 3c-.3 0-.58.09-.83.26A2.5 2.5 0 0 1 11 4.5v4.55c-1.14.24-2 1.25-2 2.46v2.88c0 .66.26 1.29.72 1.76L11.53 18H7a3 3 0 0 1-3-3V7a1 1 0 0 1 1-1h1Zm4 0V4.5a1.47 1.47 0 0 0-.44-1.06A1.48 1.48 0 0 0 8.5 3a1.47 1.47 0 0 0-1.06.44A1.48 1.48 0 0 0 7 4.5V6h3Zm.43 9.45a1.51 1.51 0 0 1-.43-1.06v-2.88c0-.83.68-1.51 1.51-1.51h2.87c.4 0 .8.16 1.07.45l3.11 3.14c.6.6.58 1.57-.02 2.15l-2.95 2.84a1.5 1.5 0 0 1-2.12-.03l-3.04-3.1Zm1.57-2.7a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
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