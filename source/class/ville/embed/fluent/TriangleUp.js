/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TriangleUp",
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

   var pathdregular = "M8.68 2.79a1.5 1.5 0 0 1 2.64 0l6.5 12a1.5 1.5 0 0 1-1.32 2.2h-13a1.5 1.5 0 0 1-1.32-2.2l6.5-12Zm1.76.47a.5.5 0 0 0-.88 0l-6.5 12a.5.5 0 0 0 .44.74h13a.5.5 0 0 0 .44-.74l-6.5-12Z";
   var pathdfilled = "M11.32 2.79a1.5 1.5 0 0 0-2.64 0l-6.5 12a1.5 1.5 0 0 0 1.32 2.2h13a1.5 1.5 0 0 0 1.32-2.2l-6.5-12Z";
   
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