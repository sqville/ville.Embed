/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextPositionSquareRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.5 3a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13ZM8 6a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1 0-1H8Zm.5 3.5A.5.5 0 0 0 8 9H3.5a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5ZM8 12a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1 0-1H8Zm9 3.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 .5-.5Zm-1-7a2.5 2.5 0 0 0-5 0v5a.5.5 0 0 1-1 0v-5a3.5 3.5 0 1 1 7 0v5a.5.5 0 0 1-1 0v-5Z",
    FILLED : "M16.5 2.75a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1 0-1.5h13Zm-8.5 3a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1 0-1.5H8Zm.75 3.75A.75.75 0 0 0 8 8.75H3.5a.75.75 0 0 0 0 1.5H8c.41 0 .75-.34.75-.75ZM8 11.75a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1 0-1.5H8Zm9.25 3.75a.75.75 0 0 0-.75-.75h-13a.75.75 0 0 0 0 1.5h13c.41 0 .75-.34.75-.75Zm-1.5-7a2.25 2.25 0 0 0-4.5 0v5a.75.75 0 0 1-1.5 0v-5a3.75 3.75 0 1 1 7.5 0v5a.75.75 0 0 1-1.5 0v-5Z"
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