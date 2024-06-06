/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextGrammarLightning",
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

   var pathdregular = "M2 5.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h11.08c-.6 0-1.15.36-1.38.92l-.03.08H2.5a.5.5 0 0 1-.5-.5Zm8.09 5.5c-.12.34-.11.7 0 1H2.5a.5.5 0 0 1 0-1h7.59Zm.83-2H2.5a.5.5 0 0 1 0-1h8.83l-.41 1Zm.58 3h1.75l-.59 2.36c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-1.1l.78-2.34a.5.5 0 0 0-.47-.66h-3.47a.5.5 0 0 0-.47.3l-2.08 5c-.14.34.1.7.46.7Z";
   var pathdfilled = "M2 5.75c0-.41.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.75Zm0 3c0-.41.34-.75.75-.75h10.83c-.6 0-1.15.36-1.38.92l-.24.58H2.75A.75.75 0 0 1 2 8.75ZM10.09 14a1.5 1.5 0 0 0 .3 1.5H2.74a.75.75 0 0 1 0-1.5h7.34Zm.62-1.5H2.75a.75.75 0 0 1 0-1.5h8.58l-.62 1.5Zm.8 2.5h1.74l-.59 2.36c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 0 0-.51-1.3h-1.1l.78-2.34a.5.5 0 0 0-.47-.66h-3.47a.5.5 0 0 0-.47.3l-2.08 5c-.14.34.1.7.46.7Z";
   
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