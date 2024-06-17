/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextBaseline",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.46 3.8a.5.5 0 0 0-.92 0l-4 9.5a.5.5 0 1 0 .92.4L8.02 10h3.96l1.56 3.7a.5.5 0 1 0 .92-.4l-4-9.5Zm1.1 5.2H8.44L10 5.29 11.56 9Z",
    FILLED : "M10.7 3.47a.75.75 0 0 0-1.4 0l-3.75 9.5a.75.75 0 0 0 1.4.56l1.2-3.03h3.7l1.2 3.03a.75.75 0 0 0 1.4-.56l-3.75-9.5ZM11.27 9H8.73L10 5.8 11.27 9Z"
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