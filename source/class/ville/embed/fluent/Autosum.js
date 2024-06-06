/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Autosum",
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

   var pathdregular = "M4.04 3.8a.5.5 0 0 1 .46-.3h11a.5.5 0 1 1 0 1H5.67l4.56 4.73a.5.5 0 0 1 .02.67l-4.68 5.6h9.93a.5.5 0 1 1 0 1h-11a.5.5 0 0 1-.38-.82L9.2 9.6 4.14 4.35a.5.5 0 0 1-.1-.55Z";
   var pathdfilled = "M3.81 3.7a.75.75 0 0 1 .69-.45h11a.75.75 0 0 1 0 1.5H6.26l4.15 4.3c.26.28.28.72.03 1l-4.34 5.2h9.4a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.58-1.23l4.94-5.9-4.9-5.1a.75.75 0 0 1-.15-.81Z";
   
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