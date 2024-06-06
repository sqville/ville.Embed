/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowWrapOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7l1.17 1.18A.5.5 0 0 0 3.5 5h.8l4 4H6a3 3 0 1 0 0 6h8.3l1.35 1.35 1.5 1.5a.5.5 0 0 0 .7-.7l-15-15ZM13.3 14H6a2 2 0 1 1 0-4h3.3l4 4Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7l.98.98A.75.75 0 0 0 3.75 5h.54l3.5 3.5H6.25a3.25 3.25 0 1 0 0 6.5h8.04l.71.7a.75.75 0 0 0 .8.8l1.35 1.35a.5.5 0 0 0 .7-.7l-15-15ZM12.8 13.5H6.25a1.75 1.75 0 1 1 0-3.5h3.04l3.5 3.5Z";
   
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