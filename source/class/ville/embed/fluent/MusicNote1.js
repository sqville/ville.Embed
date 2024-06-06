/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MusicNote1",
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

   var pathdregular = "M10.15 2.02a.5.5 0 0 0-.65.48v9.9A3.24 3.24 0 0 0 4 14.75a3.25 3.25 0 1 0 6.5-.25V7.18l5.85 1.8A.5.5 0 0 0 17 8.5V5.98a2.5 2.5 0 0 0-1.76-2.4l-5.1-1.56ZM16 7.82l-5.5-1.69V3.18l4.44 1.36c.63.2 1.06.78 1.06 1.44v1.84ZM5 14.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z";
   var pathdfilled = "M10.15 2.02a.5.5 0 0 0-.65.48v9.9A3.24 3.24 0 0 0 4 14.75a3.25 3.25 0 1 0 6.5-.25V7.18l5.85 1.8A.5.5 0 0 0 17 8.5V5.98a2.5 2.5 0 0 0-1.76-2.4l-5.1-1.56Z";
   
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