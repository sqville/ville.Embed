/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Markdown",
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

   var pathdregular = "M16 4.5a.5.5 0 0 0-1 0v8.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 0 0-.7-.7L16 13.29V4.5ZM2.32 4.03a.5.5 0 0 1 .55.14L7 8.75l4.13-4.58a.5.5 0 0 1 .87.33v10a.5.5 0 1 1-1 0V5.8L7.37 9.83a.5.5 0 0 1-.74 0L3 5.8v8.7a.5.5 0 1 1-1 0v-10c0-.2.13-.4.32-.47Z";
   var pathdfilled = "M2.5 4.05c.29-.11.62-.03.82.21L7 8.6l3.68-4.33a.75.75 0 0 1 1.32.49v9.5a.75.75 0 0 1-1.5 0V6.79l-2.93 3.45a.75.75 0 0 1-1.14 0L3.5 6.79v7.46a.75.75 0 0 1-1.5 0v-9.5c0-.31.2-.6.5-.7Zm10.72 7.67c.3-.3.77-.3 1.06 0l.72.72V4.75a.75.75 0 0 1 1.5 0v7.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 0 1 0-1.06Z";
   
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