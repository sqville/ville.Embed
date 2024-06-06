/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableMultiple",
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

   var pathdregular = "M5.67 17h7.84c.95 0 1.82-.39 2.45-1.01l.02-.02A3.49 3.49 0 0 0 17 13.5V5.67c.63.77 1 1.76 1 2.83v5a4.5 4.5 0 0 1-4.5 4.5h-5a4.48 4.48 0 0 1-2.83-1Zm9.6-14.27c.47.47.73 1.1.73 1.77v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 13.5v-9A2.5 2.5 0 0 1 4.5 2h9c.66 0 1.3.26 1.77.73ZM4.5 3h-.14A1.5 1.5 0 0 0 3 4.5V6h3V3H4.5ZM11 3H7v3h4V3Zm4 1.5v-.14A1.5 1.5 0 0 0 13.5 3H12v3h3V4.5ZM7 7v4h4V7H7Zm8 0h-3v4h3V7Zm-8 5v3h4v-3H7Zm8 0h-3v3H13.64A1.5 1.5 0 0 0 15 13.5V12ZM3.5 14.61c.27.25.63.39 1 .39H6v-3H3V13.64c.04.38.22.72.5.97ZM3 7v4h3V7H3Z";
   var pathdfilled = "M17 13.5a3.5 3.5 0 0 1-3.5 3.5H5.67c.78.63 1.76 1 2.83 1h5a4.5 4.5 0 0 0 4.5-4.5v-5c0-1.07-.37-2.06-1-2.83v7.83ZM4.5 16H6v-4H2v1.5A2.5 2.5 0 0 0 4.5 16ZM6 7v4H2V7h4Zm5 4H7V7h4v4Zm-4 1h4v4H7v-4Zm5-5v4h4V7h-4Zm0 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H12v-4ZM2 6h4V2H4.5A2.5 2.5 0 0 0 2 4.5V6Zm5 0V2h4v4H7Zm5 0V2h1.5A2.5 2.5 0 0 1 16 4.5V6h-4Z";
   
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