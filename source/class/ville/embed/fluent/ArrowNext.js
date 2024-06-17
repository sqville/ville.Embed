/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowNext",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.5 5a.5.5 0 0 1 .5.41v9.09a.5.5 0 0 1-1 .09V5.5c0-.28.22-.5.5-.5Zm-7.85.15a.5.5 0 0 1 .63-.06l.07.06 4.5 4.5c.18.17.2.44.06.63l-.06.07-4.5 4.5a.5.5 0 0 1-.76-.63l.06-.07L9.79 10 5.65 5.85a.5.5 0 0 1 0-.7Z",
    FILLED : "M13.75 4.75c.38 0 .7.28.74.65l.01.1v9a.75.75 0 0 1-1.5.1V5.5c0-.41.34-.75.75-.75Zm-8.28.22a.75.75 0 0 1 .98-.07l.08.07 4.5 4.5c.27.27.3.68.07.98l-.07.08-4.5 4.5a.75.75 0 0 1-1.13-.98l.07-.08L9.44 10 5.47 6.03a.75.75 0 0 1 0-1.06Z"
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