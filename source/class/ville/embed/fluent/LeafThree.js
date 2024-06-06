/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LeafThree",
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

   var pathdregular = "M16 7c0 .34-.03.68-.1 1h.76C17.4 8 18 8.6 18 9.34V13a5 5 0 0 1-8.16 3.87l-.99.98a.5.5 0 0 1-.7-.7l.98-.99a5 5 0 0 1-.79-1.34A5 5 0 0 1 2 10V6.34C2 5.6 2.6 5 3.34 5h3.08A5 5 0 0 1 11 2h3.66C15.4 2 16 2.6 16 3.34V7ZM7.52 5.03a5 5 0 0 1 4.14 3.15A5 5 0 0 1 13 8h1.87A4 4 0 0 0 15 7V3.34a.34.34 0 0 0-.34-.34H11a4 4 0 0 0-3.48 2.03Zm3.03 11.13A4 4 0 0 0 17 13V9.34a.34.34 0 0 0-.34-.34H13a4 4 0 0 0-3.16 6.45l3.3-3.3a.5.5 0 0 1 .71.7l-3.3 3.31ZM8 13c0-.4.05-.79.13-1.16L5.65 9.35a.5.5 0 1 1 .7-.7l2.16 2.15a5.02 5.02 0 0 1 2.22-2.25A4 4 0 0 0 7 6H3.34a.34.34 0 0 0-.34.34V10a4 4 0 0 0 5.07 3.85A5.03 5.03 0 0 1 8 13Z";
   var pathdfilled = "M11 2a5 5 0 0 0-4 2 6 6 0 0 1 5.23 3.05c.25-.03.5-.05.77-.05h3V3.34C16 2.6 15.4 2 14.66 2H11ZM7.34 14.99 7 15a5 5 0 0 1-5-5V6.34C2 5.6 2.6 5 3.34 5H7a5 5 0 0 1 4.2 2.28 6.02 6.02 0 0 0-3.43 2.78L6.35 8.65a.5.5 0 1 0-.7.7l1.68 1.69a6 6 0 0 0 0 3.95ZM8 13a5 5 0 0 1 5-5h3.66C17.4 8 18 8.6 18 9.34V13a5 5 0 0 1-8.16 3.87l-.99.98a.5.5 0 0 1-.7-.7l.98-.99A4.98 4.98 0 0 1 8 13Zm2.55 3.16 3.3-3.3a.5.5 0 0 0-.7-.71l-3.31 3.3c.2.27.44.5.7.71Z";
   
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