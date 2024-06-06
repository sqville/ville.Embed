/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Branch",
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

   var pathdregular = "M10 5a3 3 0 0 1-2.15 2.88A5.76 5.76 0 0 0 12 9.98a3 3 0 1 1 .17 1.01A6.8 6.8 0 0 1 7.5 9v3.05a3 3 0 1 1-1 0V7.96A3 3 0 1 1 10 5ZM7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 3a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z";
   var pathdfilled = "M10 5a3 3 0 0 1-2.15 2.88A5.76 5.76 0 0 0 12 9.98a3 3 0 1 1 .17 1.01A6.8 6.8 0 0 1 7.5 9v3.05a3 3 0 1 1-1 0V7.96A3 3 0 1 1 10 5Z";
   
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