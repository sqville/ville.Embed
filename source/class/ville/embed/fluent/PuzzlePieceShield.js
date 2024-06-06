/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PuzzlePieceShield",
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

   var pathdregular = "M5 14.5v-1.79a9 9 0 0 0 .54.21c.15.05.3.08.46.08v1.5c0 .28.22.5.5.5h3v.75a1.25 1.25 0 0 0 2.5 0V15h3.5a.5.5 0 0 0 .5-.5v-2.25H15.06A2.25 2.25 0 0 1 13 9.97v-.16a2.25 2.25 0 0 1 2.25-2.07H16V5.5a.5.5 0 0 0-.41-.49H12.5v-.76a1.25 1.25 0 0 0-1.85-1.1c-.24-.28-.59-.47-1-.48.37-.38.88-.63 1.44-.66l.16-.01c1.14 0 2.08.85 2.23 1.94V4h2.02c.78 0 1.42.6 1.5 1.36v3.39h-1.75c-.65 0-1.2.5-1.25 1.13V10c0 .65.5 1.2 1.13 1.24l.12.01H17v3.25c0 .83-.67 1.5-1.5 1.5h-2.52v.06a2.25 2.25 0 0 1-2.08 1.93l-.15.01a2.25 2.25 0 0 1-2.23-1.94V16H6.5A1.5 1.5 0 0 1 5 14.65v-.15ZM8 3.35a4.06 4.06 0 0 0 1.6.32c.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.38.38 0 0 1-.26 0A6.66 6.66 0 0 1 4 11c-.39-.3-.72-.63-.99-1a5.5 5.5 0 0 1-1-3.15L2 6.58v-2.5a.4.4 0 0 1 .4-.41 4.5 4.5 0 0 0 3.32-1.55.39.39 0 0 1 .56 0C6.82 2.7 7.4 3.1 8 3.35Z";
   var pathdfilled = "M5 15.06V12.7c.18.08.36.15.55.21.29.1.61.1.9 0a6.77 6.77 0 0 0 3.39-2.38A6.63 6.63 0 0 0 11 6.58V4.04l-.02-.19v-.04A1.4 1.4 0 0 0 9.5 2.67 2 2 0 0 1 13 4v.06h3a1 1 0 0 1 1 1V8h-1a2 2 0 0 0-2 1.85V10a2 2 0 0 0 1.85 2H17v3.06a1 1 0 0 1-1 1h-3v.09a2 2 0 0 1-4-.1H6a1 1 0 0 1-1-1ZM8 3.35a4.06 4.06 0 0 0 1.6.32c.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.38.38 0 0 1-.26 0A6.66 6.66 0 0 1 4 11c-.39-.3-.72-.63-.99-1a5.5 5.5 0 0 1-1-3.15L2 6.58v-2.5a.4.4 0 0 1 .4-.41 4.5 4.5 0 0 0 3.32-1.55.39.39 0 0 1 .56 0C6.82 2.7 7.4 3.1 8 3.35Z";
   
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