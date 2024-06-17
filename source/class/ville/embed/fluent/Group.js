/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Group",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7 4.5c0 .17-.02.34-.05.5H10a1 1 0 0 1 1 1v2h-1a2 2 0 0 0-2 2v1H6a1 1 0 0 1-1-1V6.95a2.51 2.51 0 0 1-1 0V10c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h3.05a2.51 2.51 0 0 1 0-1H10a1 1 0 0 1-1-1v-2h1a2 2 0 0 0 2-2V9h2a1 1 0 0 1 1 1v3.05a2.51 2.51 0 0 1 1 0V10a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2H6.95c.03.16.05.33.05.5ZM11 9v1a1 1 0 0 1-1 1H9v-1a1 1 0 0 1 1-1h1ZM6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm11 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0-11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-11 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    FILLED : "M7 4.5c0 .36-.07.7-.2 1H10c.28 0 .5.22.5.5v2H10a2 2 0 0 0-2 2v.5H6a.5.5 0 0 1-.5-.5V6.8a2.5 2.5 0 0 1-1.5.15V10c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h3.05a2.51 2.51 0 0 1 .16-1.5H10a.5.5 0 0 1-.5-.5v-2h.5a2 2 0 0 0 2-2v-.5h2c.28 0 .5.22.5.5v3.2a2.5 2.5 0 0 1 1.5-.15V10a2 2 0 0 0-2-2h-2V6a2 2 0 0 0-2-2H6.95c.03.16.05.33.05.5Zm3.5 5v.5a.5.5 0 0 1-.5.5h-.5V10c0-.28.22-.5.5-.5h.5ZM6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm11 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0-11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-11 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
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