/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableMoveBelow",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 16.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1 0-1h13c.28 0 .5.22.5.5Zm-.5-4.5h-3.88a1.5 1.5 0 0 0-.62-.41V8H8v3.59a1.5 1.5 0 0 0-.62.41H3.5a.5.5 0 0 1-.5-.5V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v6.5a.5.5 0 0 1-.5.5ZM16 7V5a1 1 0 0 0-1-1h-2v3h3ZM8 4v3h4V4H8ZM7 4H5a1 1 0 0 0-1 1v2h3V4Zm0 4H4v3h3V8Zm9 3V8h-3v3h3Zm-7.15 1.65a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0-.7-.7l-.65.64V10.5a.5.5 0 0 0-1 0v2.8l-.65-.65Z",
    FILLED : "M16.5 17a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1h13ZM12 8v3.59a1.5 1.5 0 0 0-.5-.09v-1a1.5 1.5 0 0 0-3 0v1c-.17 0-.34.03-.5.09V8h4ZM5 3h2v4H3V5c0-1.1.9-2 2-2ZM3 8h4v4H3.5a.5.5 0 0 1-.5-.5V8Zm9-5H8v4h4V3Zm1 9V8h4v3.5a.5.5 0 0 1-.5.5H13Zm0-9h2a2 2 0 0 1 2 2v2h-4V3Zm-4.15 9.65a.5.5 0 0 0-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 0 0-.7-.7l-.65.64V10.5a.5.5 0 0 0-1 0v2.8l-.65-.65Z"
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