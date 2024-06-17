/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Smartwatch",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 5.27V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v1.27c.6.34 1 .99 1 1.73v1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2a2 2 0 0 1-1 1.73V16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1.27A2 2 0 0 1 5 13V7a2 2 0 0 1 1-1.73ZM8 3a1 1 0 0 0-1 1v1h6V4a1 1 0 0 0-1-1H8Zm6 10V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1Zm-7 3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H7v1Z",
    FILLED : "M8 2a2 2 0 0 0-2 2v.17A3 3 0 0 1 7 4h6a3 3 0 0 1 1 .17V4a2 2 0 0 0-2-2H8ZM7 5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2v-2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1V7a2 2 0 0 0-2-2H7Zm0 11a3 3 0 0 1-1-.17V16c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2v-.17a3 3 0 0 1-1 .17H7Z"
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