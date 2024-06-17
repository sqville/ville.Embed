/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Directions",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.5 8.5C9.67 8.5 9 9.17 9 10v2.5a.5.5 0 1 1-1 0V10a2.5 2.5 0 0 1 2.5-2.5h.8l-.65-.65a.5.5 0 0 1 .7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 1 1-.7-.7l.64-.65h-.79ZM8.23 3.06a2.5 2.5 0 0 1 3.54 0l5.17 5.17a2.5 2.5 0 0 1 0 3.54l-5.17 5.17a2.5 2.5 0 0 1-3.54 0l-5.17-5.17a2.5 2.5 0 0 1 0-3.54l5.17-5.17Zm2.83.7a1.5 1.5 0 0 0-2.12 0L3.77 8.95a1.5 1.5 0 0 0 0 2.12l5.17 5.17a1.5 1.5 0 0 0 2.12 0l5.17-5.17a1.5 1.5 0 0 0 0-2.12l-5.17-5.17Z",
    FILLED : "M11.77 3.06a2.5 2.5 0 0 0-3.54 0L3.06 8.23a2.5 2.5 0 0 0 0 3.54l5.17 5.17a2.5 2.5 0 0 0 3.54 0l5.17-5.17a2.5 2.5 0 0 0 0-3.54l-5.17-5.17Zm-1.12 3.09c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65h-.79C9.67 8.5 9 9.17 9 10v2.5a.5.5 0 0 1-1 0V10a2.5 2.5 0 0 1 2.5-2.5h.8l-.65-.65a.5.5 0 0 1 0-.7Z"
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