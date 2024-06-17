/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextHanging",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16.5 4a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13Zm-4 10a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1h9Zm.5-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5Zm2.15 2.15 1.5-1.5a.5.5 0 0 1 .7.7L16.21 12l1.14 1.15a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7Z",
    FILLED : "M16.25 3.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5h12.5Zm-5 10a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h7.5ZM12 9.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h7.5c.41 0 .75-.34.75-.75Zm3.72 1.47a.75.75 0 1 1 1.06 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06l1.5-1.5Z"
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