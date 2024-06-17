/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ChevronDownUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.85 3.15a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l4.5-4.5a.5.5 0 0 0-.7-.7L10 7.29 5.85 3.15Zm9 13-4.5-4.5a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 0 0 .7.7L10 12.71l4.15 4.14a.5.5 0 0 0 .7-.7Z",
    FILLED : "M6.28 2.97a.75.75 0 0 0-1.06 1.06l4.25 4.25c.3.3.77.3 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L10 6.69 6.28 2.97Zm8.5 13-4.25-4.25a.75.75 0 0 0-1.06 0l-4.25 4.25a.75.75 0 1 0 1.06 1.06L10 13.31l3.72 3.72a.75.75 0 1 0 1.06-1.06Z"
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