/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PhoneUpdate",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 6c.28 0 .5.22.5.5v5.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2A.5.5 0 0 1 10 14a.5.5 0 0 1-.35-.15l-2-2a.5.5 0 0 1 .7-.7l1.15 1.14V6.5c0-.28.22-.5.5-.5ZM5 3.5C5 2.67 5.67 2 6.5 2h7c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 16.5v-13ZM6.5 3a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-7Z",
    FILLED : "M5 3.5C5 2.67 5.67 2 6.5 2h7c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 16.5v-13Zm5.5 3a.5.5 0 0 0-1 0v5.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 0 0-.7-.7l-1.15 1.14V6.5Z"
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