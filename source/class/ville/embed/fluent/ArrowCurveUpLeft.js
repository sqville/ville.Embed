/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowCurveUpLeft",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.85 6.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0l4 4a.5.5 0 0 1-.7.7L10 3.71V10c0 1.96.25 3.38.76 4.47a5.96 5.96 0 0 0 2.5 2.6.5.5 0 0 1-.52.86 6.95 6.95 0 0 1-2.88-3.03C9.26 13.62 9 12.04 9 10V3.7L5.85 6.86Z",
    FILLED : "M6.03 7.03a.75.75 0 0 1-1.06-1.06l4-4c.3-.3.77-.3 1.06 0l4 4a.75.75 0 0 1-1.06 1.06l-2.72-2.72v5.44c0 1.95.25 3.32.74 4.37a5.71 5.71 0 0 0 2.4 2.49.75.75 0 1 1-.78 1.28 7.2 7.2 0 0 1-2.98-3.13 11.6 11.6 0 0 1-.88-5.01V4.31L6.03 7.03Z"
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