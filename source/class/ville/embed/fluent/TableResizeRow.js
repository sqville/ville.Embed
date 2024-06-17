/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableResizeRow",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.85 7.35a.5.5 0 0 1-.7 0l-.65-.64v6.58l.65-.64a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V6.71l-.65.64a.5.5 0 1 1-.7-.7l1.5-1.5c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7ZM14 17a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8Zm2-4h-3c0 .36-.13.72-.38 1H16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2h3.38A1.5 1.5 0 0 1 7 13H4V7h3c0-.36.13-.72.38-1H4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2h-3.38c.25.28.38.64.38 1h3v6Z",
    FILLED : "M17 14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3h4.38l.06.06 1.5 1.5a1.5 1.5 0 0 0 2.12 0l1.5-1.5.06-.06H17Zm0-1h-4a1.5 1.5 0 0 0-1.5-1.5v-3A1.5 1.5 0 0 0 13 7h4v6ZM7.44 8.06A1.5 1.5 0 0 1 7 7H3v6h4a1.5 1.5 0 0 1 1.5-1.5v-3a1.5 1.5 0 0 1-1.06-.44ZM3 6h4.38l.06-.06 1.5-1.5a1.5 1.5 0 0 1 2.12 0l1.5 1.5.06.06H17a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3Zm8.85 1.35a.5.5 0 0 1-.7 0l-.65-.64v6.58l.65-.64a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V6.71l-.65.64a.5.5 0 1 1-.7-.7l1.5-1.5c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7Z"
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