/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DeleteOff",
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

   var pathdregular = "M3.3 4 2.14 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-2-2A3 3 0 0 1 12.27 18H7.73a3 3 0 0 1-2.98-2.66L3.55 5H2.5a.5.5 0 0 1 0-1h.8Zm10.99 11L12 12.7V14a.5.5 0 0 1-1 0v-2.3l-2-2V14a.5.5 0 0 1-1 0V8.7L4.6 5.3l1.14 9.93A2 2 0 0 0 7.73 17h4.54a2 2 0 0 0 1.99-1.77l.03-.24ZM11 8.87l1 1V8a.5.5 0 0 0-1 0v.88ZM15.44 5l-.86 7.46.9.9.97-8.36h1.05a.5.5 0 0 0 0-1h-5a2.5 2.5 0 0 0-5 0H6.12l1 1h8.32ZM11.5 4h-3a1.5 1.5 0 1 1 3 0Z";
   var pathdfilled = "M3.3 4 2.14 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-2-2A3 3 0 0 1 12.27 18H7.73a3 3 0 0 1-2.98-2.66L3.55 5H2.5a.5.5 0 0 1 0-1h.8Zm8.7 8.7-1-1V14a.5.5 0 0 0 1 0v-1.3Zm-3-3-1-1V14a.5.5 0 0 0 1 0V9.7ZM12 8v1.88l3.48 3.48.97-8.36h1.05a.5.5 0 0 0 0-1h-5a2.5 2.5 0 0 0-5 0H6.12L11 8.88V8a.5.5 0 0 1 1 0Zm-.5-4h-3a1.5 1.5 0 1 1 3 0Z";
   
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