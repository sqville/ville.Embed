/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DualScreenTablet",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3v-1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H4V5Zm9 6h.5a.5.5 0 0 0 0-1H13v1ZM2 9c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9Zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.5V8H4Zm6 8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7.5v8H10Zm-1-2a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 0-1H9Zm-5 .5c0-.28.22-.5.5-.5H5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5Z",
    FILLED : "M4 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3v-2h.5a.5.5 0 0 0 0-1H13V9a3 3 0 0 0-3-3H4V5Zm6 12H7.5V7H10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2ZM4 7h2.5v10H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2Zm5.5 7a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 0-1h-.5Zm-6 .5c0 .28.22.5.5.5h.5a.5.5 0 0 0 0-1H4a.5.5 0 0 0-.5.5Z"
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