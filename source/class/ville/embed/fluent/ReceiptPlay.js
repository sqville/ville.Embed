/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ReceiptPlay",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 5c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3h-4.6c.16-.32.3-.65.4-1H14V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v4.02c-.34.03-.68.1-1 .19V5Zm7.5 5H8.66a5.48 5.48 0 0 0-1.58-.77A.5.5 0 0 1 7.5 9h4a.5.5 0 0 1 0 1Zm3.5 6a2 2 0 0 0 2-2v-1h-2v3ZM7 6.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm3 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM4 16c0 .38.42.62.76.42l2.5-1.5a.5.5 0 0 0 0-.85l-2.5-1.5A.5.5 0 0 0 4 13v3Z",
    FILLED : "M4 5c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3h-4.6a5.48 5.48 0 0 0-1.74-7h2.84a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.42.23A5.5 5.5 0 0 0 4 9.21V5Zm11 11a2 2 0 0 0 2-2v-1h-2v3ZM7.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm2.5 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM4 16c0 .38.42.62.76.42l2.5-1.5a.5.5 0 0 0 0-.85l-2.5-1.5A.5.5 0 0 0 4 13v3Z"
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