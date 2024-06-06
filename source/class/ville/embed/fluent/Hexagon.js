/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Hexagon",
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

   var pathdregular = "M6.83 4a.5.5 0 0 0-.44.25l-3.17 5.5a.5.5 0 0 0 0 .5l3.17 5.5a.5.5 0 0 0 .44.25h6.35a.5.5 0 0 0 .43-.25l3.17-5.5a.5.5 0 0 0 0-.5l-3.17-5.5a.5.5 0 0 0-.43-.25H6.83Zm-1.3-.25A1.5 1.5 0 0 1 6.83 3h6.35c.53 0 1.03.29 1.3.75l3.17 5.5a1.5 1.5 0 0 1 0 1.5l-3.17 5.5a1.5 1.5 0 0 1-1.3.75H6.83a1.5 1.5 0 0 1-1.3-.75l-3.18-5.5a1.5 1.5 0 0 1 0-1.5l3.18-5.5Z";
   var pathdfilled = "M6.83 3a1.5 1.5 0 0 0-1.3.75l-3.18 5.5a1.5 1.5 0 0 0 0 1.5l3.18 5.5c.26.46.76.75 1.3.75h6.35a1.5 1.5 0 0 0 1.3-.75l3.17-5.5a1.5 1.5 0 0 0 0-1.5l-3.17-5.5a1.5 1.5 0 0 0-1.3-.75H6.83Z";
   
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