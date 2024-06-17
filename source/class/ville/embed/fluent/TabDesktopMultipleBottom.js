/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TabDesktopMultipleBottom",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.09 4H5.05A2.5 2.5 0 0 1 7.5 2H14a4 4 0 0 1 4 4v6.5a2.5 2.5 0 0 1-2 2.45v-1.04c.58-.2 1-.76 1-1.41V6a3 3 0 0 0-3-3H7.5c-.65 0-1.2.42-1.41 1ZM9.5 15H3v.5c0 .83.67 1.5 1.5 1.5H10v-1.5a.5.5 0 0 0-.5-.5ZM3 14h6.5c.83 0 1.5.67 1.5 1.5V17h1.5c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-8C3.67 6 3 6.67 3 7.5V14Zm1.5 4A2.5 2.5 0 0 1 2 15.5v-8A2.5 2.5 0 0 1 4.5 5h8A2.5 2.5 0 0 1 15 7.5v8a2.5 2.5 0 0 1-2.5 2.5h-8Z",
    FILLED : "M5.05 4h7.45A3.5 3.5 0 0 1 16 7.5v7.45a2.5 2.5 0 0 0 2-2.45V6a4 4 0 0 0-4-4H7.5a2.5 2.5 0 0 0-2.45 2ZM2 7.5A2.5 2.5 0 0 1 4.5 5h8A2.5 2.5 0 0 1 15 7.5v8a2.5 2.5 0 0 1-2.5 2.5H11v-2.5c0-.83-.67-1.5-1.5-1.5H2V7.5Zm8 8V18H4.5A2.5 2.5 0 0 1 2 15.5V15h7.5c.28 0 .5.22.5.5Z"
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