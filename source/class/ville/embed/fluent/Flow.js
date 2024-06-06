/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Flow",
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

   var pathdregular = "M15 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-2.96 1.5a3 3 0 1 1 0 1H12c-.83 0-1.5.67-1.5 1.5v2A2.5 2.5 0 0 1 8 13.5h-.04a3 3 0 1 1 0-1H8c.83 0 1.5-.67 1.5-1.5V9A2.5 2.5 0 0 1 12 6.5h.04ZM5 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z";
   var pathdfilled = "M12.04 7.5H12c-.83 0-1.5.67-1.5 1.5v2A2.5 2.5 0 0 1 8 13.5h-.04a3 3 0 1 1 0-1H8c.83 0 1.5-.67 1.5-1.5V9A2.5 2.5 0 0 1 12 6.5h.04a3 3 0 1 1 0 1Z";
   
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