/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ReceiptSearch",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3a2 2 0 0 0-2 2v4.26c.32-.12.65-.2 1-.23V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v11h-3.88l1 1H15a3 3 0 0 0 3-3v-2h-3V5a2 2 0 0 0-2-2H6Zm2.33 7h3.17a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.45.28c.47.17.9.41 1.28.72ZM15 16v-3h2v1a2 2 0 0 1-2 2ZM7.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-2 11c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L8.3 15.6A3.5 3.5 0 1 0 5.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
    FILLED : "M4 5c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3h-3.88l-1.56-1.56A4.48 4.48 0 0 0 8.33 10h3.17a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.45.28A4.5 4.5 0 0 0 4 9.26V5Zm11 11a2 2 0 0 0 2-2v-1h-2v3ZM7.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-2 11c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L8.3 15.6A3.5 3.5 0 1 0 5.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
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