/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ChatArrowDoubleBack",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2a8 8 0 0 1 8 8.25 5.5 5.5 0 0 0-1.01-.66 7 7 0 1 0-13.1 3.83.5.5 0 0 1 .07.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 0 1 .19-.01l.09.02.09.04c.92.51 1.94.82 3.01.88.19.36.4.7.66 1a7.93 7.93 0 0 1-3.86-.85l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm9 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-5.65-1.15a.5.5 0 0 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Zm1.86.65.64-.65a.5.5 0 0 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65H17v.5a.5.5 0 0 0 1 0V15a1 1 0 0 0-1-1h-1.8Z",
    FILLED : "M10 2a8 8 0 0 1 8 8.25A5.5 5.5 0 0 0 10.26 18a7.93 7.93 0 0 1-3.87-.85l-.12-.07-3.65.92a.5.5 0 0 1-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 0 1-.83-2.9l-.02-.37L2 10a8 8 0 0 1 8-8Zm9 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-5.65-1.15a.5.5 0 0 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Zm1.86.65.64-.65a.5.5 0 0 0-.7-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 0 0 .7-.7l-.64-.65H17v.5a.5.5 0 0 0 1 0V15a1 1 0 0 0-1-1h-1.8Z"
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