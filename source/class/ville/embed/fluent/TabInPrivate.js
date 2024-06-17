/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TabInPrivate",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3ZM4 5.5v1.8L7.3 4H5.5C4.67 4 4 4.67 4 5.5Zm0 3.2v2.6L11.3 4H8.7L4 8.7ZM12.7 4 4 12.7v1.8c0 .23.05.45.15.65l11-11A1.5 1.5 0 0 0 14.5 4h-1.8Zm3.15.85-11 11c.2.1.42.15.65.15h1.8L16 7.3V5.5c0-.23-.05-.45-.15-.65ZM16 8.71 8.7 16h2.6l4.7-4.7V8.7Zm0 4L12.7 16h1.8c.83 0 1.5-.67 1.5-1.5v-1.8Z",
    FILLED : "M5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3Zm-1 2.5v1.3l2.3-2.3H5.5a1 1 0 0 0-1 1Zm0 2.7v2.6l6.3-6.3H8.2L4.5 8.2Zm7.7-3.7-7.7 7.7v2.3a1 1 0 0 0 .03.26L14.76 4.53a1 1 0 0 0-.26-.03h-2.3Zm3.27.74L5.24 15.47a1 1 0 0 0 .26.03h2.3l7.7-7.7V5.5a1 1 0 0 0-.03-.26Zm.03 3.97L9.2 15.5h2.6l3.7-3.7V9.2Zm0 4-2.3 2.29h1.3a1 1 0 0 0 1-1v-1.3Z"
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