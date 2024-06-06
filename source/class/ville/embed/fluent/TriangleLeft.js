/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TriangleLeft",
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

   var pathdregular = "M2.79 11.32a1.5 1.5 0 0 1 0-2.64l12-6.5c1-.54 2.2.18 2.2 1.32v13a1.5 1.5 0 0 1-2.2 1.32l-12-6.5Zm.47-1.76a.5.5 0 0 0 0 .88l12 6.5a.5.5 0 0 0 .74-.44v-13a.5.5 0 0 0-.74-.44l-12 6.5Z";
   var pathdfilled = "M2.79 8.68a1.5 1.5 0 0 0 0 2.64l12 6.5a1.5 1.5 0 0 0 2.2-1.32v-13a1.5 1.5 0 0 0-2.2-1.32l-12 6.5Z";
   
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