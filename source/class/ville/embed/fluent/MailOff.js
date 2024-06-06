/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7L3.5 4.21A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11c.24 0 .47-.03.7-.1l.95.95a.5.5 0 0 0 .7-.7l-15-15ZM15.3 16H4.5A1.5 1.5 0 0 1 3 14.5V7.96l6.75 3.97.08.04c.14.05.3.04.42-.04l.61-.36L15.3 16Zm-5.16-5.16-.13.08L3 6.8v-.3c0-.76.57-1.4 1.3-1.49l5.83 5.83ZM17 6.8l-5.09 3 .73.72L17 7.96v6.54c0 .12-.01.23-.04.34l.78.78c.17-.34.26-.72.26-1.12v-8A2.5 2.5 0 0 0 15.5 4H6.12l1 1h8.38c.83 0 1.5.67 1.5 1.5v.3Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7L3.5 4.21a2.5 2.5 0 0 0-1.48 2.01l7.98 4.7.13-.08.73.73-.6.36a.5.5 0 0 1-.51 0L2 7.37v7.13A2.5 2.5 0 0 0 4.5 17h11c.24 0 .47-.03.7-.1l.95.95a.5.5 0 0 0 .7-.7l-15-15Zm9.8 8.37 5.09 5.1c.17-.34.26-.72.26-1.12V7.37l-5.35 3.15ZM6.12 4l5.8 5.8 6.06-3.58A2.5 2.5 0 0 0 15.5 4H6.12Z";
   
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