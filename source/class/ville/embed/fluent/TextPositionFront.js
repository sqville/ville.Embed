/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextPositionFront",
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

   var pathdregular = "M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm3 8h1v2.5a.5.5 0 0 1-1 0V11Zm7 0h-1v2.5a.5.5 0 0 0 1 0V11Zm3-2a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h13ZM10 5a3.5 3.5 0 0 1 3.46 3h-1.01a2.5 2.5 0 0 0-4.9 0H6.54c.24-1.7 1.7-3 3.46-3ZM3.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Z";
   var pathdfilled = "M2.75 3.5c0-.41.34-.75.75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75ZM10 6.25c-.98 0-1.81.63-2.12 1.5H6.33a3.75 3.75 0 0 1 7.35 0h-1.56A2.25 2.25 0 0 0 10 6.25Zm-3.75 5h1.5v2.25a.75.75 0 0 1-1.5 0v-2.25Zm7.5 0h-1.5v2.25a.75.75 0 0 0 1.5 0v-2.25ZM3.5 14.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Zm0-6a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Z";
   
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