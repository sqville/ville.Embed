/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ReceiptCube",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 5c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3H9.94a2 2 0 0 0 .06-.5V16h4V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v4a2 2 0 0 0-.9.21l-.1.05V5Zm3.5 5a.5.5 0 0 1-.03 0l-.35-.18A.5.5 0 0 1 7.5 9h4a.5.5 0 0 1 0 1h-4Zm7.5 3v3a2 2 0 0 0 2-2v-1h-2ZM7 6.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm1.45 5.1-3-1.5a1 1 0 0 0-.9 0l-3 1.5a1 1 0 0 0-.55.9v4a1 1 0 0 0 .55.9l3 1.5a1 1 0 0 0 .9 0l3-1.5a1 1 0 0 0 .55-.9v-4a1 1 0 0 0-.55-.9Zm-6.41 1.13a.5.5 0 0 1 .66-.26l2.3.99 2.3-1a.5.5 0 0 1 .4.93l-2.2.94V17a.5.5 0 1 1-1 0v-2.67l-2.2-.94a.5.5 0 0 1-.26-.66Z",
    FILLED : "M4 5c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3H9.94a2 2 0 0 0 .06-.5v-4a2 2 0 0 0-1.1-1.79L7.46 10a.5.5 0 0 0 .03 0h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.38.82l-1.23-.6a2 2 0 0 0-1.78 0L4 9.25V5Zm11 11a2 2 0 0 0 2-2v-1h-2v3ZM7.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm.95 5.6-3-1.5a1 1 0 0 0-.9 0l-3 1.5a1 1 0 0 0-.55.9v4a1 1 0 0 0 .55.9l3 1.5a1 1 0 0 0 .9 0l3-1.5a1 1 0 0 0 .55-.9v-4a1 1 0 0 0-.55-.9Zm-6.41 1.13a.5.5 0 0 1 .66-.26l2.3.99 2.3-1a.5.5 0 0 1 .4.93l-2.2.94V17a.5.5 0 1 1-1 0v-2.67l-2.2-.94a.5.5 0 0 1-.26-.66Z"
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