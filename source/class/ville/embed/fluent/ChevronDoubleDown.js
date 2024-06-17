/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ChevronDoubleDown",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15.85 8.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 9.35a.5.5 0 1 1 .7-.7L10 13.8l5.15-5.16c.2-.2.5-.2.7 0Zm0-4c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 5.35a.5.5 0 1 1 .7-.7L10 9.8l5.15-5.16c.2-.2.5-.2.7 0Z",
    FILLED : "M15.8 8.73c.28.3.27.78-.03 1.06l-5.25 5a.75.75 0 0 1-1.04 0l-5.25-5a.75.75 0 0 1 1.04-1.08L10 13.2l4.73-4.5a.75.75 0 0 1 1.06.02Zm0-4c.28.3.27.78-.03 1.06l-5.25 5a.75.75 0 0 1-1.04 0l-5.25-5a.75.75 0 0 1 1.04-1.08L10 9.2l4.73-4.5a.75.75 0 0 1 1.06.02Z"
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