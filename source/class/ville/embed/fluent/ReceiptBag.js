/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ReceiptBag",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 5c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3h-5v-1h4V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3.17A3 3 0 0 0 4 8V5Zm7.5 5H8.83a3 3 0 0 0-.6-1h3.27a.5.5 0 0 1 0 1Zm3.5 3v3a2 2 0 0 0 2-2v-1h-2ZM7 6.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM4 9a2 2 0 0 1 1 .27A2 2 0 0 1 8 11v1h.5c.28 0 .5.22.5.5V17a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4.5c0-.28.22-.5.5-.5H2v-1c0-1.1.9-2 2-2Zm1 3v-1a1 1 0 1 0-2 0v1h2Zm.75-1.97A2 2 0 0 1 6 11v1h1v-1a1 1 0 0 0-1.25-.97Z",
    FILLED : "M4 5c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3h-5v-4.5c0-.65-.42-1.2-1-1.41V11a3 3 0 0 0-.17-1h2.67a.5.5 0 0 0 0-1H8.24A3 3 0 0 0 5 8.17 3 3 0 0 0 4 8V5Zm11 11a2 2 0 0 0 2-2v-1h-2v3ZM7.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM4 9a2 2 0 0 1 1 .27A2 2 0 0 1 8 11v1h.5c.28 0 .5.22.5.5V17a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4.5c0-.28.22-.5.5-.5H2v-1c0-1.1.9-2 2-2Zm1 3v-1a1 1 0 1 0-2 0v1h2Zm.75-1.97A2 2 0 0 1 6 11v1h1v-1a1 1 0 0 0-1.25-.97Z"
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