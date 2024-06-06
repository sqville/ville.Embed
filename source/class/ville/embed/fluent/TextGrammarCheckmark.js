/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextGrammarCheckmark",
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

   var pathdregular = "M17.5 5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm0 3a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15ZM9 14.5c0-.17 0-.34.02-.5H2.5a.5.5 0 0 0 0 1h6.52a5.57 5.57 0 0 1-.02-.5Zm.6-2.5c.18-.36.4-.7.66-1H2.5a.5.5 0 0 0 0 1h7.1Zm4.9-2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm-1.12 5.77-1-1.23-.06-.06a.5.5 0 0 0-.72.7l1.34 1.64.07.07c.2.16.48.15.67-.02l3.5-3.65.07-.06a.5.5 0 0 0-.75-.66l-3.12 3.27Z";
   var pathdfilled = "M18 5.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h14.5c.41 0 .75-.34.75-.75Zm0 3a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 0 0 1.5h9.46a5.48 5.48 0 0 1 4.58 0h.46c.41 0 .75-.34.75-.75ZM9.02 14a5.57 5.57 0 0 0 .07 1.5H2.75a.75.75 0 0 1 0-1.5h6.27Zm1.24-3a5.5 5.5 0 0 0-.89 1.5H2.75a.75.75 0 0 1 0-1.5h7.5ZM19 14.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-2.5-2a.5.5 0 0 1 .75.66l-.06.06-3.51 3.65a.5.5 0 0 1-.67.02l-.07-.07-1.34-1.65a.5.5 0 0 1 .72-.7l.06.07 1 1.23 3.12-3.27Z";
   
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