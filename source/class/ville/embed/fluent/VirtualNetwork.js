/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VirtualNetwork",
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

   var pathdregular = "M4.83 6.12c.2.18.23.5.05.7L2.16 10l2.72 3.17a.5.5 0 1 1-.76.66l-3-3.5a.5.5 0 0 1 0-.66l3-3.5a.5.5 0 0 1 .7-.05Zm10.29 7.05a.5.5 0 0 0 .76.66l3-3.5a.5.5 0 0 0 0-.66l-3-3.5a.5.5 0 1 0-.76.66L17.84 10l-2.72 3.17ZM6 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z";
   var pathdfilled = "M4.7 6.16c.34.25.4.72.14 1.05L2.7 10l2.14 2.8a.75.75 0 1 1-1.18.9l-2.5-3.24a.75.75 0 0 1 0-.92l2.5-3.25a.75.75 0 0 1 1.05-.13Zm10.46 6.63a.75.75 0 1 0 1.18.92l2.5-3.25c.21-.27.21-.65 0-.92l-2.5-3.25a.75.75 0 1 0-1.18.92L17.3 10l-2.14 2.8ZM6 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z";
   
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