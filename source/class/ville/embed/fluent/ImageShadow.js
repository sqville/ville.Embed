/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageShadow",
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

   var pathdregular = "M5 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM3 5c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-.28 1.02L9.2 8.49a1.7 1.7 0 0 0-2.4 0l-3.52 3.53A2 2 0 0 1 3 11V5Zm5.5 4.2 3.52 3.52A2 2 0 0 1 11 13H5a2 2 0 0 1-1.02-.28L7.51 9.2a.7.7 0 0 1 .98 0ZM11 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 9a3 3 0 0 0 3 3h3a6 6 0 0 0 6-6V9a3 3 0 0 0-3-3v5a4 4 0 0 1-4 4H6Z";
   var pathdfilled = "M5 2a3 3 0 0 0-3 3v6c0 .65.2 1.25.55 1.74L6.8 8.49a1.7 1.7 0 0 1 2.4 0l4.25 4.25c.34-.5.55-1.1.55-1.74V5a3 3 0 0 0-3-3H5Zm0 12c-.65 0-1.25-.2-1.74-.55L7.51 9.2a.7.7 0 0 1 .98 0l4.25 4.25c-.5.34-1.1.55-1.74.55H5Zm6-8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 9a3 3 0 0 0 3 3h3a6 6 0 0 0 6-6V9a3 3 0 0 0-3-3v5a4 4 0 0 1-4 4H6Z";
   
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