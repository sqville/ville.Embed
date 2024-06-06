/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DesktopTower",
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

   var pathdregular = "M4 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h2.09a1.5 1.5 0 0 1 0-1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2H4Zm1 5c0-1.1.9-2 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v2h1.5a.5.5 0 0 1 0 1h-8a.5.5 0 0 1 0-1H9v-2H7a2 2 0 0 1-2-2V7Zm5 10h3v-2h-3v2Zm6-3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9Z";
   var pathdfilled = "M4 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h2.09a1.5 1.5 0 0 1 1.41-2H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3a2 2 0 0 0-2-2H4Zm3 3a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h2v2H7.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H14v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm6 12h-3v-2h3v2Z";
   
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