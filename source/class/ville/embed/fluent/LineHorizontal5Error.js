/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LineHorizontal5Error",
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

   var pathdregular = "M2.5 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 6a.5.5 0 0 0 0 1h7.76c.31-.38.67-.72 1.08-1H2.5Zm0 3h6.7c-.08.32-.15.66-.18 1H2.5a.5.5 0 0 1 0-1Zm0 3h6.7c.1.35.24.68.4 1H2.5a.5.5 0 0 1 0-1Zm0-9a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15ZM19 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z";
   var pathdfilled = "M2.75 3a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm0 6a.75.75 0 0 0 0 1.5h7.14c.38-.59.87-1.1 1.45-1.5H2.75Zm0 3h6.46c-.14.48-.21.98-.21 1.5H2.75a.75.75 0 0 1 0-1.5Zm0 3h6.46c.15.54.38 1.04.68 1.5H2.75a.75.75 0 0 1 0-1.5Zm0-9a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75ZM19 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z";
   
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