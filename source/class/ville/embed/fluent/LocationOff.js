/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LocationOff",
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

   var pathdregular = "M2.15 2.15c.2-.2.5-.2.7 0l15 15a.5.5 0 0 1-.7.7l-3.06-3.05-.27.27-2.43 2.37a2 2 0 0 1-2.64.12l-.14-.12-2.04-1.99-1.52-1.5a7 7 0 0 1-.78-8.97L2.15 2.85a.5.5 0 0 1 0-.7Zm8.93 9.63A2.98 2.98 0 0 1 7 9c0-.38.07-.74.2-1.07L4.99 5.7a6.01 6.01 0 0 0 .59 7.37l.17.18.58.57 2.98 2.9.09.08a1 1 0 0 0 1.2 0l.1-.08 2.22-2.17.47-.45-2.31-2.32Zm.77-2.05.75.75A3 3 0 0 0 8.52 6.4l.74.74A1.99 1.99 0 0 1 12 8.99a2 2 0 0 1-.15.74Zm-5.5-5.5a6 6 0 0 1 8.42 8.42l.71.71a7 7 0 0 0-9.84-9.84l.71.71Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7l2.12 2.13a7 7 0 0 0 .78 8.98l1.52 1.5 2.04 1.98.14.12a2 2 0 0 0 2.64-.12l2.43-2.37.27-.27 3.06 3.05a.5.5 0 0 0 .7-.7l-15-15Zm8.23 9.63A2.98 2.98 0 0 1 7 9c0-.38.07-.74.2-1.07l3.87 3.86ZM12.99 9c0 .54-.14 1.05-.4 1.49l2.9 2.88a7 7 0 0 0-9.85-9.84L8.52 6.4A3 3 0 0 1 13 9Z";
   
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