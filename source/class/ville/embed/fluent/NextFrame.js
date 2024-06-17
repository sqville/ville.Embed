/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NextFrame",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 3c.28 0 .5.22.5.5v13a.5.5 0 0 1-1 0v-13c0-.28.22-.5.5-.5Zm5.45.21A1.25 1.25 0 0 0 8 4.25v11.5c0 1 1.12 1.6 1.95 1.04l8.5-5.8c.73-.5.73-1.58 0-2.07l-8.5-5.7ZM9 4.25c0-.2.22-.32.39-.2l8.5 5.7c.15.1.15.32 0 .42l-8.5 5.79c-.17.11-.39 0-.39-.2V4.25Z",
    FILLED : "M4.5 3c.28 0 .5.22.5.5v13a.5.5 0 0 1-1 0v-13c0-.28.22-.5.5-.5Zm5.45.21A1.25 1.25 0 0 0 8 4.25v11.5c0 1 1.12 1.6 1.95 1.04l8.5-5.8c.73-.5.73-1.58 0-2.07l-8.5-5.7Z"
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