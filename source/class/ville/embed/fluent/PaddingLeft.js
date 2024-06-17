/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PaddingLeft",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 3.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm0 3a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm0 4a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm0 4a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm2.15-4.65a.5.5 0 0 1 0-.7l4.5-4.5a.5.5 0 1 1 .7.7L5.71 9h9.79a.5.5 0 0 1 0 1H5.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5ZM17 3.5a.5.5 0 0 1 1 0v12a.5.5 0 0 1-1 0v-12Z",
    FILLED : "M2.75 3.75A.75.75 0 0 0 2 4.5v1.31a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 0-.75-.75Zm0 3.94a.75.75 0 0 0-.75.75v2.62a.75.75 0 0 0 1.5 0V8.44a.75.75 0 0 0-.75-.75Zm0 5.25a.75.75 0 0 0-.75.75V15a.75.75 0 0 0 1.5 0v-1.31a.75.75 0 0 0-.75-.75Zm14.5-9.19a.75.75 0 0 0-.75.75V15a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 0-.75-.75ZM4.72 10.28a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 1 1 1.06 1.06L7.06 9h7.19a.75.75 0 0 1 0 1.5H7.06l2.97 2.97a.75.75 0 1 1-1.06 1.06l-4.25-4.25Z"
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