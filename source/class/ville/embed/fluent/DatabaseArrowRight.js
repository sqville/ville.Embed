/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DatabaseArrowRight",
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

   var pathdregular = "M4 5c0-1 .88-1.76 1.9-2.22 1.3-.54 2.7-.8 4.1-.78 1.4-.03 2.8.24 4.1.78C15.13 3.24 16 3.99 16 5v4.2c-.32-.08-.66-.15-1-.18V6.7c-.28.2-.58.38-.9.52-1.3.54-2.7.8-4.1.78-1.4.03-2.8-.24-4.1-.78A4.92 4.92 0 0 1 5 6.7V15c0 .37.36.87 1.32 1.31A9.2 9.2 0 0 0 9.6 17c.18.36.4.7.66 1H10c-1.4.03-2.8-.24-4.1-.78C4.87 16.75 4 16.01 4 15V5Zm1 0c0 .37.36.87 1.32 1.31A9.2 9.2 0 0 0 10 7a9.2 9.2 0 0 0 3.68-.69C14.64 5.87 15 5.37 15 5c0-.37-.36-.88-1.32-1.31A9.2 9.2 0 0 0 10 3a9.2 9.2 0 0 0-3.68.69C5.36 4.12 5 4.63 5 5Zm9.5 5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z";
   var pathdfilled = "M10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3Zm4.69.02c.47-.24.93-.54 1.31-.9v2.09A5.5 5.5 0 0 0 10.26 18H10c-3.31 0-6-1.34-6-3V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98ZM14.5 10a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm2.35 4.85a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z";
   
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