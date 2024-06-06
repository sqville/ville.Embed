/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableLink",
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

   var pathdregular = "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h3.84a3.48 3.48 0 0 1-.3-1H8v-3h2.05a3.49 3.49 0 0 1 2.45-1h.5V8h3v4h.5c.17 0 .34.01.5.04V5.5ZM12 8v4H8V8h4Zm-8 6.5V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 7H8V4h4v3Zm1-3H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm3 7.5a2.5 2.5 0 0 1 2.5-2.5h.5a.5.5 0 0 1 0 1h-.5a1.5 1.5 0 0 0 0 3h.5a.5.5 0 0 1 0 1h-.5a2.5 2.5 0 0 1-2.5-2.5Zm5.5-2c0-.28.22-.5.5-.5h.5a2.5 2.5 0 0 1 0 5H16a.5.5 0 0 1 0-1h.5a1.5 1.5 0 0 0 0-3H16a.5.5 0 0 1-.5-.5Zm-3 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z";
   var pathdfilled = "M9 15.5c0 .54.12 1.05.34 1.5H8v-4h2.05A3.49 3.49 0 0 0 9 15.5ZM13 8v4h3.5c.17 0 .34.01.5.04V8h-4Zm-1 4V8H8v4h4Zm-5 0V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm3 12.5a2.5 2.5 0 0 1 2.5-2.5h.5a.5.5 0 0 1 0 1h-.5a1.5 1.5 0 0 0 0 3h.5a.5.5 0 0 1 0 1h-.5a2.5 2.5 0 0 1-2.5-2.5Zm5.5-2c0-.28.22-.5.5-.5h.5a2.5 2.5 0 0 1 0 5H16a.5.5 0 0 1 0-1h.5a1.5 1.5 0 0 0 0-3H16a.5.5 0 0 1-.5-.5Zm-3 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z";
   
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