/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StarOneQuarter",
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

   var pathdregular = "M10.9 2.9a1 1 0 0 0-1.8 0L8 5.13l-.83 1.68-4.31.63a1 1 0 0 0-.56 1.7l3.13 3.05-.74 4.3a1 1 0 0 0 1.45 1.05L10 15.51l3.86 2.03a1 1 0 0 0 1.45-1.05l-.73-4.3 3.12-3.05a1 1 0 0 0-.55-1.7l-4.32-.63L10.9 2.9ZM8 15.43V7.37a1 1 0 0 0 .07-.12L10 3.35l1.93 3.9c.15.3.43.5.76.55l4.31.63-3.12 3.04a1 1 0 0 0-.29.89l.74 4.3-3.86-2.03a1 1 0 0 0-.93 0l-1.54.8Z";
   var pathdfilled = "M8 5.14 7.17 6.8l-4.31.63a1 1 0 0 0-.56 1.7l3.13 3.05-.74 4.3a1 1 0 0 0 1.45 1.05L8 16.56V5.14Z";
   
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