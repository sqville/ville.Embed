/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DesktopPulse",
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

   var pathdregular = "M4 2a2 2 0 0 0-2 2v4h1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4h1V4a2 2 0 0 0-2-2H4ZM2 13v-2h1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2h1v2a2 2 0 0 1-2 2h-3v2h1.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1H7v-2H4a2 2 0 0 1-2-2Zm10 2H8v2h4v-2ZM7.98 4.35a.5.5 0 0 0-.94-.04L5.16 9H2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .46-.31l1.48-3.7 2.08 6.66a.5.5 0 0 0 .93.07L13 7.62l1.05 2.1a.5.5 0 0 0 .45.28h3a.5.5 0 1 0 0-1h-2.7l-1.35-2.72a.5.5 0 0 0-.9 0l-2.44 4.89-2.13-6.82Z";
   var pathdfilled = "M2 4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4h-2.57l-1.09-2.17a1.5 1.5 0 0 0-2.68 0L10.32 8.5 8.93 4.05a1.5 1.5 0 0 0-2.82-.1L4.49 8H2V4Zm12.5 7H18v2a2 2 0 0 1-2 2h-3v2h1.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1H7v-2H4a2 2 0 0 1-2-2v-2h3.5a1.5 1.5 0 0 0 1.4-.94l.43-1.09 1.24 3.98a1.5 1.5 0 0 0 2.77.22L13 9.85l.16.32c.25.5.77.83 1.34.83ZM12 17v-2H8v2h4ZM7.98 4.35a.5.5 0 0 0-.94-.04L5.16 9H2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .47-.31l1.47-3.7 2.08 6.66a.5.5 0 0 0 .93.07L13 7.62l1.05 2.1a.5.5 0 0 0 .45.28h3a.5.5 0 0 0 0-1h-2.7l-1.35-2.72a.5.5 0 0 0-.9 0l-2.44 4.89-2.13-6.82Z";
   
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