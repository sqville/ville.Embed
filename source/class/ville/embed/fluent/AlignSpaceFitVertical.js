/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AlignSpaceFitVertical",
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

   var pathdregular = "M6 1a2 2 0 0 0-2 2v4.5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6ZM5 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3Z";
   var pathdfilled = "M6 1a2 2 0 0 0-2 2v4.5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6Z";
   
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