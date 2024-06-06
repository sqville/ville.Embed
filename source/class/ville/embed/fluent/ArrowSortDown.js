/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowSortDown",
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

   var pathdregular = "m10 15.29 2.65-2.64a.5.5 0 0 1 .7.7L9.9 16.82a.5.5 0 0 1-.74.03h-.01l-3.5-3.5a.5.5 0 1 1 .71-.7L9 15.29V3.5a.5.5 0 0 1 1 0v11.79Z";
   var pathdfilled = "M9.75 17c.23 0 .45-.1.59-.28l2.94-2.94a.75.75 0 0 0-1.06-1.06l-1.72 1.71V3.75a.75.75 0 0 0-1.5 0v10.7L7.28 12.7a.75.75 0 1 0-1.06 1.06l3 3.01c.15.15.34.22.53.22Z";
   
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