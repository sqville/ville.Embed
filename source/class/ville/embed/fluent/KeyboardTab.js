/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.KeyboardTab",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.35 4.15a.5.5 0 1 0-.7.7l4.64 4.65H3.5a.5.5 0 0 0 0 1h9.8l-4.65 4.65a.5.5 0 0 0 .7.7l5.5-5.5a.5.5 0 0 0 0-.7l-5.5-5.5ZM17 4.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0v-11Z",
    FILLED : "M17 4.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0V4.75Zm-8.47-.53a.75.75 0 0 0-1.06 1.06l3.97 3.97H2.75a.75.75 0 0 0 0 1.5h8.69l-3.97 3.97a.75.75 0 1 0 1.06 1.06l5.25-5.25c.3-.3.3-.77 0-1.06L8.53 4.22Z"
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