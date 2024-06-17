/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentQueue",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.5 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM6 7.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM6.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm3.98-7h.04c.45.01.88.2 1.2.51l3.77 3.77A1.75 1.75 0 0 1 16 7.5v6.75c0 .97-.78 1.75-1.75 1.75h-8.5C4.78 16 4 15.22 4 14.25V3.75C4 2.78 4.78 2 5.75 2h4.73ZM5 3.75v10.5c0 .41.34.75.75.75h8.5c.41 0 .75-.34.75-.75V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H5.75a.75.75 0 0 0-.75.75Zm6 2.75c0 .28.22.5.5.5h3.3l-.02-.01-3.77-3.77-.01-.01V6.5Zm-8 7a.5.5 0 0 0-1 0v1A3.5 3.5 0 0 0 5.5 18h9a3.5 3.5 0 0 0 3.5-3.5v-1a.5.5 0 0 0-1 0v1a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-1Z",
    FILLED : "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v6.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-11C4 2.67 4.67 2 5.5 2H10ZM6.5 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM6 7.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5ZM6.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM11 2.25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM2.5 13c.28 0 .5.22.5.5v1A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 2 14.5v-1c0-.28.22-.5.5-.5Z"
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