/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShoppingBag",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2.5a2.5 2.5 0 0 0-4 2V6H5a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3h6.5a2.5 2.5 0 0 0 2.5-2.5V7a1 1 0 0 0-1-1h-1V4.5a2.5 2.5 0 0 0-4-2Zm-3 2a1.5 1.5 0 1 1 3 0V6H7V4.5Zm3.67-1.25A1.5 1.5 0 0 1 13 4.5V6h-2V4.5c0-.45-.12-.88-.33-1.25ZM7 17a2 2 0 0 1-2-2V7h6v8.5c0 .56.19 1.08.5 1.5H7Zm8-1.5a1.5 1.5 0 0 1-3 0V7h3v8.5Z",
    FILLED : "M6 6V4.5a2.42 2.42 0 0 1 .73-1.77A2.43 2.43 0 0 1 8.5 2a2.43 2.43 0 0 1 1.5.5 2.44 2.44 0 0 1 2.48-.3 2.53 2.53 0 0 1 1.32 1.33c.13.3.2.63.2.97V6h1a1 1 0 0 1 1 1v8a2.95 2.95 0 0 1-1.47 2.58l-.59-.26-.5-.22-.2-.11-.23-.17-.24-.21-.27-.29A2 2 0 0 1 12 15V6h1V4.5a1.47 1.47 0 0 0-.44-1.06A1.48 1.48 0 0 0 11.5 3c-.3 0-.58.09-.83.26A2.5 2.5 0 0 1 11 4.5V15a2.95 2.95 0 0 0 .77 2l.3.33.31.27.31.23.31.17H7a3 3 0 0 1-3-3V7a1 1 0 0 1 1-1h1Zm1 0h3V4.5a1.47 1.47 0 0 0-.44-1.06A1.48 1.48 0 0 0 8.5 3a1.47 1.47 0 0 0-1.06.44A1.48 1.48 0 0 0 7 4.5V6Z"
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