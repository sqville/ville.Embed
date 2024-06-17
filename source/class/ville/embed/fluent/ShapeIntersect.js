/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShapeIntersect",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V7h2.5A2.5 2.5 0 0 1 18 9.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5V13H4.5A2.5 2.5 0 0 1 2 10.5v-6Zm10 0c0-.83-.67-1.5-1.5-1.5h-6C3.67 3 3 3.67 3 4.5v6c0 .83.67 1.5 1.5 1.5H7V9.5A2.5 2.5 0 0 1 9.5 7H12V4.5Zm-4 6.2V12h.3L12 8.3V8h-1.3L8 10.7Zm.02-1.42 1.26-1.26a1.5 1.5 0 0 0-1.26 1.26ZM13 8v2.5a2.5 2.5 0 0 1-2.5 2.5H8v2.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5H13Zm-3.3 4h.8c.83 0 1.5-.67 1.5-1.5v-.8L9.7 12Z",
    FILLED : "M2 4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V7h2.5A2.5 2.5 0 0 1 18 9.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5V13H4.5A2.5 2.5 0 0 1 2 10.5v-6ZM7 12V9.5A2.5 2.5 0 0 1 9.5 7H12V4.5c0-.83-.67-1.5-1.5-1.5h-6C3.67 3 3 3.67 3 4.5v6c0 .83.67 1.5 1.5 1.5H7Zm1 1v2.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5H13v2.5a2.5 2.5 0 0 1-2.5 2.5H8Z"
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