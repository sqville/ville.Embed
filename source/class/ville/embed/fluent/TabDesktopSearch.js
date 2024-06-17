/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TabDesktopSearch",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 3A2.5 2.5 0 0 0 3 5.5v3.26c.3-.2.64-.38 1-.5V5.5C4 4.67 4.67 4 5.5 4H8v1.5C8 6.33 8.67 7 9.5 7H16v7.5c0 .83-.68 1.5-1.5 1.5h-3.38l.44.44c.16.16.28.36.35.56h2.59a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM16 5.5V6H9.5a.5.5 0 0 1-.5-.5V4h5.5c.82 0 1.5.67 1.5 1.5ZM5.5 16c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L8.3 14.6A3.5 3.5 0 1 0 5.5 16Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
    FILLED : "M3 5.5A2.5 2.5 0 0 1 5.5 3H8v2.5C8 6.33 8.67 7 9.5 7H17v7.5a2.5 2.5 0 0 1-2.5 2.5H11.9a1.5 1.5 0 0 0-.35-.56l-2-2A4.5 4.5 0 0 0 3 8.76V5.5Zm6 0V3h5.5A2.5 2.5 0 0 1 17 5.5V6H9.5a.5.5 0 0 1-.5-.5ZM5.5 16c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L8.3 14.6A3.5 3.5 0 1 0 5.5 16Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
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