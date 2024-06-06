/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DesktopOff",
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

   var pathdregular = "m2.28 2.98-.13-.13a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L14.29 15H13v2h1.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1H7v-2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 .28-1.02ZM13.29 14 3.03 3.74A1 1 0 0 0 3 4v9a1 1 0 0 0 1 1h9.3ZM17 13a1 1 0 0 1-.89 1l.8.78A2 2 0 0 0 18 13V4a2 2 0 0 0-2-2H4.12l1 1H16a1 1 0 0 1 1 1v9Zm-5 2H8v2h4v-2Z";
   var pathdfilled = "m14.3 15 2.85 2.85a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 0 0-.7.7c-.1.2-.15.42-.15.65v10c0 .83.67 1.5 1.5 1.5H7v2H5.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H13v-2h1.3Zm3.7-1.5c0 .64-.4 1.2-.97 1.4L4.13 2H16.5c.83 0 1.5.67 1.5 1.5v10ZM12 15v2H8v-2h4Z";
   
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