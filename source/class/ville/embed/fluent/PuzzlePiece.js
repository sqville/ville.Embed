/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PuzzlePiece",
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

   var pathdregular = "M11.1 2c-1.07.08-1.94.9-2.08 1.94V4H6.35A1.5 1.5 0 0 0 5 5.5v2.27h-.06A2.25 2.25 0 0 0 3 10v.16c.08 1.06.9 1.93 1.94 2.07H5v2.42A1.5 1.5 0 0 0 6.5 16h2.02v.06A2.25 2.25 0 0 0 10.75 18h.16a2.25 2.25 0 0 0 2.07-1.94V16h2.52c.83 0 1.5-.67 1.5-1.5v-3.25h-1.87A1.25 1.25 0 0 1 14 10v-.12c.06-.63.6-1.13 1.25-1.13H17V5.36A1.5 1.5 0 0 0 15.5 4h-2.02v-.06A2.25 2.25 0 0 0 11.25 2h-.15Zm.15 1c.69 0 1.25.56 1.25 1.25V5h3l.1.01a.5.5 0 0 1 .4.5v2.24h-.75c-1.17 0-2.15.9-2.24 2.07l-.01.16c0 1.2.9 2.17 2.07 2.26l.16.01H16v2.25a.5.5 0 0 1-.5.5H12v.75a1.25 1.25 0 0 1-2.5 0V15h-3a.5.5 0 0 1-.5-.5v-3.25h-.75a1.25 1.25 0 0 1 0-2.5H6V5.5c0-.27.23-.5.5-.5H10v-.75c0-.69.56-1.25 1.25-1.25Z";
   var pathdfilled = "M11 2a2 2 0 0 1 2 2v.06h3a1 1 0 0 1 1 1V8h-1a2 2 0 0 0-2 1.85V10a2 2 0 0 0 1.85 2H17v3.06a1 1 0 0 1-1 1h-3v.09a2 2 0 0 1-4-.1H6a1 1 0 0 1-1-1V12a2 2 0 1 1 0-4V5.06a1 1 0 0 1 1-1h3V4c0-1.1.9-2 2-2Z";
   
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