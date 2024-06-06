/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Bug",
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

   var pathdregular = "M9 2.5a.5.5 0 0 0-1 0V3c0 .4.12.77.32 1.08A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 0 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2c0-.83.67-1.5 1.5-1.5H6a4 4 0 0 0 8 0h.5c.83 0 1.5.67 1.5 1.5v2a.5.5 0 0 0 1 0v-2a2.5 2.5 0 0 0-2.5-2.5H14v-1.5h3.5a.5.5 0 0 0 0-1H14V8h.5A2.5 2.5 0 0 0 17 5.5v-2a.5.5 0 0 0-1 0v2c0 .83-.67 1.5-1.5 1.5H14a3 3 0 0 0-2.32-2.92A2 2 0 0 0 12 3v-.5a.5.5 0 0 0-1 0V3a1 1 0 1 1-2 0v-.5ZM13 7v6a3 3 0 1 1-6 0V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2Z";
   var pathdfilled = "M9 2.5a.5.5 0 0 0-1 0V3c0 .4.12.77.32 1.08A3 3 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 0 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2c0-.83.67-1.5 1.5-1.5H6a4 4 0 0 0 8 0h.5c.83 0 1.5.67 1.5 1.5v2a.5.5 0 0 0 1 0v-2a2.5 2.5 0 0 0-2.5-2.5H14v-1.5h3.5a.5.5 0 0 0 0-1H14V8h.5A2.5 2.5 0 0 0 17 5.5v-2a.5.5 0 0 0-1 0v2c0 .83-.67 1.5-1.5 1.5H14a3 3 0 0 0-2.32-2.92A2 2 0 0 0 12 3v-.5a.5.5 0 0 0-1 0V3a1 1 0 1 1-2 0v-.5Z";
   
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