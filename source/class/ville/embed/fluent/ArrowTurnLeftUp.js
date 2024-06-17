/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTurnLeftUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.15 8.85a.5.5 0 0 1 0-.7l4-4c.2-.2.5-.2.7 0l4 4a.5.5 0 0 1-.7.7L8 5.71V12c0 1.1.9 2 2 2h6.5a.5.5 0 0 1 0 1H10a3 3 0 0 1-3-3V5.7L3.85 8.86a.5.5 0 0 1-.7 0Z",
    FILLED : "M3.22 9.28a.75.75 0 0 1 0-1.06l4-4c.3-.3.77-.3 1.06 0l4 4a.75.75 0 0 1-1.06 1.06L8.5 6.56V13c0 .83.67 1.5 1.5 1.5h6.25a.75.75 0 0 1 0 1.5H10a3 3 0 0 1-3-3V6.56L4.28 9.28c-.3.3-.77.3-1.06 0Z"
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