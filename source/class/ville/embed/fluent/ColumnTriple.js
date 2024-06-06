/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ColumnTriple",
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

   var pathdregular = "M3 17a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3Zm-1-2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10Zm7 2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9Zm-1-2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10Zm7 2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1Zm-1-2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v10Z";
   var pathdfilled = "M3 17a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3Zm6 0a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9Zm6 0a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1Z";
   
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