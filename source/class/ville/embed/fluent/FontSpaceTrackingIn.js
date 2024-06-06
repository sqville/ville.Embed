/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FontSpaceTrackingIn",
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

   var pathdregular = "M13 12c.2 0 .38-.12.46-.32l3.5-9.02a.5.5 0 1 0-.93-.36L13 10.12 9.95 2.3a.5.5 0 1 0-.93.36l3.5 9.02c.08.2.27.32.47.32ZM7.46 2.3a.5.5 0 0 0-.93 0l-2.34 6v.03l-1.17 3a.5.5 0 1 0 .93.35L5.01 9h4l1.04 2.68a.5.5 0 1 0 .93-.36L9.83 8.37a.5.5 0 0 0-.04-.11L7.47 2.3ZM8.61 8H5.4L7 3.86 8.61 8ZM6.5 13.12a.5.5 0 1 0-.65.76L7.15 15H3.5a.5.5 0 0 0 0 1h3.65l-1.3 1.12a.5.5 0 1 0 .64.76l2.33-2a.5.5 0 0 0 0-.76l-2.33-2Zm7.72 4.7a.5.5 0 0 1-.7.06l-2.34-2a.5.5 0 0 1 0-.76l2.33-2a.5.5 0 1 1 .65.76L12.85 15h3.65a.5.5 0 1 1 0 1h-3.65l1.3 1.12c.21.18.24.5.06.7Z";
   var pathdfilled = "M7.7 2.48a.75.75 0 0 0-1.4 0l-3.25 8.5a.75.75 0 0 0 1.4.53l.77-2.01h3.56l.77 2.01a.75.75 0 0 0 1.4-.53L7.7 2.48ZM8.2 8H5.8L7 4.85 8.2 8Zm-1.46 5.19a.75.75 0 1 0-.99 1.12l.5.44h-2.5a.75.75 0 0 0 0 1.5h2.5l-.5.44a.75.75 0 1 0 1 1.12l2-1.75a.75.75 0 0 0 0-1.13l-2-1.74ZM13 12c.31 0 .59-.2.7-.48l3.25-8.5a.75.75 0 1 0-1.4-.53L13 9.15 10.45 2.5a.75.75 0 0 0-1.4.53l3.25 8.5c.11.29.39.48.7.48Zm1.31 5.74a.75.75 0 0 1-1.05.07l-2-1.74a.75.75 0 0 1 0-1.13l2-1.75a.75.75 0 1 1 .98 1.12l-.5.44h2.51a.75.75 0 0 1 0 1.5h-2.5l.5.44c.3.27.34.74.06 1.05Z";
   
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