/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonVoice",
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

   var pathdregular = "M17.13 1.06a.5.5 0 0 1 .68.2 9.96 9.96 0 0 1 0 9.48.5.5 0 1 1-.88-.48 8.96 8.96 0 0 0 0-8.52.5.5 0 0 1 .2-.68Zm-2.32 1.97a.5.5 0 0 1 .65.27 6.98 6.98 0 0 1 0 5.4.5.5 0 1 1-.92-.39 5.98 5.98 0 0 0 0-4.62.5.5 0 0 1 .27-.66ZM5 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM2 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2c0 1.7-.83 2.97-2.13 3.8A9.14 9.14 0 0 1 9 18a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 2 13Zm2-1a1 1 0 0 0-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 9 17c1.74 0 3.26-.36 4.33-1.05A3.36 3.36 0 0 0 15 13a1 1 0 0 0-1-1H4Z";
   var pathdfilled = "M17.13 1.06a.5.5 0 0 1 .68.2 9.96 9.96 0 0 1 0 9.48.5.5 0 1 1-.88-.48 8.96 8.96 0 0 0 0-8.52.5.5 0 0 1 .2-.68Zm-2.32 1.97a.5.5 0 0 1 .65.27 6.98 6.98 0 0 1 0 5.4.5.5 0 1 1-.92-.39 5.98 5.98 0 0 0 0-4.62.5.5 0 0 1 .27-.66ZM5 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-3 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2c0 1.7-.83 2.97-2.13 3.8A9.14 9.14 0 0 1 9 18a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 2 13Z";
   
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