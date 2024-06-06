/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DoorTag",
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

   var pathdregular = "M9.3 6.3A1 1 0 1 1 10 8H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V7.05a4.98 4.98 0 0 0-8.54-3.59A2 2 0 1 0 9.3 6.3ZM11.4 8.4A2 2 0 1 0 8.6 5.6a1 1 0 0 1-1.42-1.42A4 4 0 0 1 14 7V16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h3a2 2 0 0 0 1.41-.59ZM8 14a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H8Z";
   var pathdfilled = "M9.3 6.3A1 1 0 1 1 10 8H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V7.05a4.98 4.98 0 0 0-8.54-3.59A2 2 0 1 0 9.3 6.3ZM8 14h4a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1Z";
   
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