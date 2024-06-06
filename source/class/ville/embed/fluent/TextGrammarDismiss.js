/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextGrammarDismiss",
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

   var pathdregular = "M17.5 5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm0 3a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm-7.24 3c-.26.3-.48.64-.66 1H2.5a.5.5 0 0 1 0-1h7.76ZM9 14.5c0 .17 0 .34.02.5H2.5a.5.5 0 0 1 0-1h6.52l-.02.5Zm5.5 4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm1.15-2.65-1.15-1.14-1.15 1.14a.5.5 0 0 1-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 0 1 .7-.7l1.15 1.14 1.15-1.14a.5.5 0 0 1 .7.7l-1.14 1.15 1.14 1.15a.5.5 0 0 1-.7.7Z";
   var pathdfilled = "M18 5.75a.75.75 0 0 0-.75-.75H2.75a.75.75 0 1 0 0 1.5h14.5c.41 0 .75-.34.75-.75Zm0 3a.75.75 0 0 0-.75-.75H2.75a.75.75 0 1 0 0 1.5h9.46a5.48 5.48 0 0 1 4.58 0h.46c.41 0 .75-.34.75-.75ZM9.1 15.5H2.74a.75.75 0 0 1 0-1.5h6.27a5.57 5.57 0 0 0 .07 1.5Zm.27-3H2.75a.75.75 0 0 1 0-1.5h7.5a5.5 5.5 0 0 0-.88 1.5Zm9.63 2a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.5.7 1.15 1.15a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14Z";
   
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