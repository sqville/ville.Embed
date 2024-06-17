/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingShop",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11 11.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Zm1 2.5v-2h2v2h-2ZM5 2a.5.5 0 0 0-.38.18l-2.5 3A.5.5 0 0 0 2 5.5V7a3 3 0 0 0 1 2.24v8.26c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V9.24A3 3 0 0 0 18 7V5.48c0-.09 0-.16-.12-.3l-2.5-3A.5.5 0 0 0 15 2H5Zm0 7a2 2 0 0 1-2-2V6h4v1a2 2 0 0 1-2 2Zm5 0a2 2 0 0 1-2-2V6h4v1a2 2 0 0 1-2 2Zm5 0a2 2 0 0 1-2-2V6h4v1a2 2 0 0 1-2 2ZM5 17H4V9.83a3 3 0 0 0 3.5-1.17 3 3 0 0 0 5 0A3 3 0 0 0 16 9.83V17h-6v-5.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V17ZM7.14 5H3.57l1.66-2h2.58l-.67 2Zm4.67 0H8.19l.67-2h2.28l.67 2Zm1.05 0-.67-2h2.58l1.66 2h-3.57ZM6 17v-5h3v5H6Z",
    FILLED : "M12 12h2v2h-2v-2ZM5 2h10a.5.5 0 0 1 .38.18l2.5 3c.12.14.12.21.12.3V7a3 3 0 0 1-1 2.24v8.26a.5.5 0 0 1-.5.5H10v-6.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V18H3.5a.5.5 0 0 1-.5-.5V9.24A3 3 0 0 1 2 7V5.5a.5.5 0 0 1 .12-.32l2.5-3A.5.5 0 0 1 5 2ZM3 6v1a2 2 0 1 0 4 0V6H3Zm5 0v1a2 2 0 1 0 4 0V6H8Zm5 0v1a2 2 0 1 0 4 0V6h-4ZM5.23 3 3.57 5h3.57l.67-2H5.23Zm6.58 2-.67-2H8.86l-.67 2h3.62Zm1.05 0h3.57l-1.66-2h-2.58l.67 2ZM11 11.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM9 18v-6H6v6h3Z"
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