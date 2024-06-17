/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EqualOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7L6.29 7H3.5a.5.5 0 0 0 0 1h3.8l4 4H3.5a.5.5 0 0 0 0 1h8.8l4.85 4.85a.5.5 0 0 0 .7-.7l-15-15ZM14.12 12l1 1h1.38a.5.5 0 0 0 0-1h-2.38Zm-5-5 1 1h6.38a.5.5 0 0 0 0-1H9.12Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7L5.79 6.5H3.75a.75.75 0 0 0 0 1.5h3.54l3.5 3.5H3.75a.75.75 0 0 0 0 1.5h8.54l4.86 4.85a.5.5 0 0 0 .7-.7l-15-15Zm10.77 9.35 1.5 1.5h1.13a.75.75 0 0 0 0-1.5h-2.63Zm-5-5 1.5 1.5h6.13a.75.75 0 0 0 0-1.5H8.62Z"
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