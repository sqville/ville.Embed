/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowSortUp",
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

   var pathdregular = "M9 4.71 6.35 7.35a.5.5 0 1 1-.7-.7L9.1 3.18a.5.5 0 0 1 .74-.03h.01l3.5 3.5a.5.5 0 1 1-.71.7L10 4.71V16.5a.5.5 0 0 1-1 0V4.71Z";
   var pathdfilled = "M9.75 3c.23 0 .45.1.59.28l2.94 2.94a.75.75 0 0 1-1.06 1.06L10.5 5.57v10.68a.75.75 0 0 1-1.5 0V5.55L7.28 7.3a.75.75 0 1 1-1.06-1.06l3-3.01A.73.73 0 0 1 9.75 3Z";
   
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