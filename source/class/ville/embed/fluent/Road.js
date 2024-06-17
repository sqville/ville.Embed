/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Road",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0v-15Zm11 0a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0v-15Zm-5.5 0a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Zm-1 9a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Zm0 3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3Z",
    FILLED : "M5 2.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0V2.75Zm11.5 0a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0V2.75Zm-5.75 0a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Zm-1.5 8.5a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Zm0 3.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0v-2.5Z"
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