/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AnimalRabbitOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7L7.3 8.01c-.24.02-.48.06-.7.12A2.5 2.5 0 1 0 4 11.95v.93c0 1.18.95 2.13 2.12 2.13h6.51c.47 0 .9-.15 1.26-.41l3.26 3.25a.5.5 0 0 0 .7-.7l-15-15Zm10.32 11.73c-.16.08-.34.13-.54.13h-1.62v-.1C11 12.78 9.99 12 8.89 12H7.5a.5.5 0 0 0 0 1h1.39c.69 0 1.12.46 1.12.91v.1H6.12c-.62 0-1.12-.5-1.12-1.13v-1.33A2.55 2.55 0 0 1 7.54 9h.75l4.88 4.88ZM5.66 8.54a3.55 3.55 0 0 0-1.6 2.38 1.5 1.5 0 1 1 1.6-2.38Zm10.71 3.48c-.44.44-1.02.65-1.6.62l.9.9a3.15 3.15 0 0 0 1.41-5.26l-4.22-4.22c-.59-.59-1.55-.59-2.14 0-.6.6-.6 1.56 0 2.15l1.34 1.33c-.12.16-.22.33-.3.5a3.55 3.55 0 0 0-.54-.05h-1.1l1 1h.1c.23 0 .46.03.68.1l.42.11.18-.4c.1-.26.26-.57.47-.79l.5-.48-2.04-2.02a.52.52 0 0 1 0-.74c.2-.2.52-.2.72 0L16.38 9c.84.84.84 2.2 0 3.04Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7L7.3 8.01c-.44.02-.86.13-1.25.3A2.12 2.12 0 1 0 4 11.22v2.21C4 14.3 4.7 15 5.56 15H10v-1.25c0-.16-.08-.34-.28-.49-.2-.15-.49-.26-.82-.26H7.5a.5.5 0 0 1 0-1h1.4c.54 0 1.05.17 1.43.47.39.3.67.74.67 1.28V15h1.74c.43 0 .82-.18 1.1-.45l3.3 3.3a.5.5 0 0 0 .71-.7l-15-15Zm14.06 10.39c-.42.42-.94.67-1.48.77l-5.3-5.3h.67c.47 0 .92.09 1.33.25l.08-.13c.11-.19.23-.4.38-.55l-1.55-1.56a1.16 1.16 0 1 1 1.64-1.64l4.23 4.23a2.78 2.78 0 0 1 0 3.93Z";
   
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