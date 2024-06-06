/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WeatherBlowingSnow",
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

   var pathdregular = "M4 4.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.75 3.5a3.25 3.25 0 0 0-3.18 2.61l-.06.3a.5.5 0 1 0 .98.19l.06-.3A2.25 2.25 0 1 1 9.75 9H2.5a.5.5 0 1 0 0 1h7.25a3.25 3.25 0 0 0 0-6.5ZM15.5 8a2.5 2.5 0 0 0-2.5 2.5.5.5 0 0 0 1 0 1.5 1.5 0 1 1 1.5 1.5h-13a.5.5 0 1 0 0 1h9.75a1.25 1.25 0 1 1 0 2.5c-.62 0-1.15-.45-1.25-1.05v-.03a.5.5 0 1 0-1 .16l.01.03a2.26 2.26 0 0 0 4.49-.36c0-.46-.14-.9-.38-1.25h1.38a2.5 2.5 0 0 0 0-5Zm-7.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16 5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z";
   var pathdfilled = "M9.5 3a3.5 3.5 0 0 0-3.43 2.81l-.06.3a.75.75 0 0 0 1.48.29l.05-.3A2 2 0 1 1 9.5 8.5H2.75a.75.75 0 1 0 0 1.5H9.5a3.5 3.5 0 0 0 0-7Zm6.05 5c-.93 0-1.78.52-2.19 1.35l-.03.06a.75.75 0 1 0 1.34.68l.03-.07a.95.95 0 0 1 1.8.43v.05a1 1 0 0 1-1 1H2.75a.75.75 0 0 0 0 1.5H12.38a.88.88 0 1 1 0 1.75.88.88 0 0 1-.74-.39l-.02-.02a.75.75 0 0 0-1.24.83l.01.02A2.38 2.38 0 0 0 14.6 13h.91a2.5 2.5 0 0 0 2.5-2.5v-.05C18 9.1 16.9 8 15.55 8ZM4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8-10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z";
   
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