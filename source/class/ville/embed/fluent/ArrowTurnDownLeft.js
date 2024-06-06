/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTurnDownLeft",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M8.85 16.85a.5.5 0 0 1-.7 0l-4-4a.5.5 0 0 1 0-.7l4-4a.5.5 0 1 1 .7.7L5.71 12H12a2 2 0 0 0 2-2V3.5a.5.5 0 0 1 1 0V10a3 3 0 0 1-3 3H5.7l3.15 3.15c.2.2.2.5 0 .7Z";
   var pathdfilled = "M9.28 16.78c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L6.56 11.5H13c.83 0 1.5-.67 1.5-1.5V3.75a.75.75 0 0 1 1.5 0V10a3 3 0 0 1-3 3H6.56l2.72 2.72c.3.3.3.77 0 1.06Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});