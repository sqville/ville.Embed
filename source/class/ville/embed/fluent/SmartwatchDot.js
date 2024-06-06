/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SmartwatchDot",
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

   var pathdregular = "M16.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-3 .68A2 2 0 0 0 12 2H8a2 2 0 0 0-2 2v1.27A2 2 0 0 0 5 7v6a2 2 0 0 0 1 1.73V16c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2v-1.27A2 2 0 0 0 15 13v-2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.34a3.5 3.5 0 0 1-1-.71A1 1 0 0 1 14 7v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6a1 1 0 0 1 .37.07 3.49 3.49 0 0 1 .14-3.39ZM13 4.5V5H7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.5ZM7 15h6v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1Z";
   var pathdfilled = "M13.5 2.68A2 2 0 0 0 12 2H8a2 2 0 0 0-2 2v.17A3 3 0 0 1 7 4h6.04c.06-.48.23-.92.47-1.32ZM13.05 5H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2v-2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.34A3.5 3.5 0 0 1 13.04 5ZM7 16a3 3 0 0 1-1-.17V16c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2v-.17a3 3 0 0 1-1 .17H7ZM19 4.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z";
   
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