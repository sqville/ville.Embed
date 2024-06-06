/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.RectangleLandscapeHintCopy",
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

   var pathdregular = "M5 5c0-1.1.9-2 2-2h1.5a.5.5 0 0 1 0 1H7a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V5Zm5-1.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm6-.5a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0V5a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1 0-1H16Zm-6 10.5c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5ZM7 14a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 1 0v.5a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H7Zm11-2a2 2 0 0 1-2 2h-1.5a.5.5 0 0 1 0-1H16a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 1 0v.5ZM5.5 7a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm11.5.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2ZM2 7.41c0-.94.38-1.8 1-2.41v7.5A3.5 3.5 0 0 0 6.5 16H16a3.4 3.4 0 0 1-2.41 1H6.5A4.5 4.5 0 0 1 2 12.5V7.41Z";
   var pathdfilled = "M17 5.5a.5.5 0 0 0 1 0V5a2 2 0 0 0-2-2h-1.5a.5.5 0 0 0 0 1H16a1 1 0 0 1 1 1v.5Zm-8-2a.5.5 0 0 1-.5.5H7a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V5c0-1.1.9-2 2-2h1.5c.27 0 .5.22.5.5ZM5.5 11c.28 0 .5.22.5.5v.5a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H7a2 2 0 0 1-2-2v-.5c0-.28.22-.5.5-.5Zm11.5.5a.5.5 0 0 1 1 0v.5a2 2 0 0 1-2 2h-1.5a.5.5 0 1 1 0-1H16a1 1 0 0 0 1-1v-.5Zm-4-8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2c.28 0 .5.22.5.5ZM5.5 7c.28 0 .5.23.5.5v2a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Zm12.5.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM12.5 14a.5.5 0 1 0 0-1h-2a.5.5 0 1 0 0 1h2ZM2 7.41c0-1.38.82-2.57 2-3.1v7.94A2.75 2.75 0 0 0 6.75 15h9.95a3.41 3.41 0 0 1-3.11 2H6.5A4.5 4.5 0 0 1 2 12.5V7.41Z";
   
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