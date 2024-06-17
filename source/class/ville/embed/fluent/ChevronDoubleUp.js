/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ChevronDoubleUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.15 9.65a.5.5 0 0 0 .7.7L10 5.2l5.15 5.16a.5.5 0 1 0 .7-.7L10.4 4.16a.55.55 0 0 0-.78 0L4.15 9.65Zm0 5a.5.5 0 0 0 .7.7L10 10.2l5.15 5.16a.5.5 0 1 0 .7-.7L10.4 9.16a.55.55 0 0 0-.78 0l-5.46 5.49Z",
    FILLED : "M4.2 15.27a.75.75 0 0 1 .03-1.06l5.25-5a.75.75 0 0 1 1.04 0l5.25 5a.75.75 0 0 1-1.04 1.08L10 10.8l-4.73 4.5a.75.75 0 0 1-1.06-.02Zm0-5a.75.75 0 0 1 .03-1.06l5.25-5a.75.75 0 0 1 1.04 0l5.25 5a.75.75 0 0 1-1.04 1.08L10 5.8l-4.73 4.5a.75.75 0 0 1-1.06-.02Z"
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