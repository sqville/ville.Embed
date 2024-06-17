/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DeveloperBoardSearch",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM9 1.5a.5.5 0 0 0-1 0V3h-.5A2.5 2.5 0 0 0 5 5.5V6H3.5a.5.5 0 0 0 0 1H5v1.5H3.5a.5.5 0 0 0-.44.74A4.5 4.5 0 0 1 6 9.26V5.5C6 4.67 6.67 4 7.5 4h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H8.97c-.04.35-.11.68-.23 1h1.76v1.5a.5.5 0 0 0 1 0V15H13v1.5a.5.5 0 0 0 1 0V15h.5a2.5 2.5 0 0 0 2.5-2.5V12h1.5a.5.5 0 0 0 0-1H17V9.5h1.5a.5.5 0 0 0 0-1H17V7h1.5a.5.5 0 0 0 0-1H17v-.5A2.5 2.5 0 0 0 14.5 3H14V1.5a.5.5 0 0 0-1 0V3h-1.5V1.5a.5.5 0 0 0-1 0V3H9V1.5ZM4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 0 0 .7-.7L7.3 15.6A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
    FILLED : "M13 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8.5 1c.28 0 .5.22.5.5V3h1.5V1.5a.5.5 0 0 1 1 0V3H13V1.5a.5.5 0 0 1 1 0V3h.5A2.5 2.5 0 0 1 17 5.5V6h1.5a.5.5 0 0 1 0 1H17v1.5h1.5a.5.5 0 0 1 0 1H17V11h1.5a.5.5 0 0 1 0 1H17v.5a2.5 2.5 0 0 1-2.5 2.5H14v1.5a.5.5 0 0 1-1 0V15h-1.5v1.5a.5.5 0 0 1-1 0V15H8.74a4.5 4.5 0 0 0-5.68-5.76.5.5 0 0 1 .44-.74H5V7H3.5a.5.5 0 0 1 0-1H5v-.5A2.5 2.5 0 0 1 7.5 3H8V1.5c0-.28.22-.5.5-.5ZM11 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6.5 5c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 0 0 .7-.7L7.3 15.6A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
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