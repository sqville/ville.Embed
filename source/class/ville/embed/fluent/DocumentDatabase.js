/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentDatabase",
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

   var pathdregular = "M6 2a2 2 0 0 0-2 2v3.13c.32-.06.66-.1 1-.12V4a1 1 0 0 1 1-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 0 1-1 1h-3.05c-.08.37-.24.7-.45 1H14a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 10.59 2H6Zm8.8 5h-3.3a.5.5 0 0 1-.5-.5V3.2L14.8 7ZM6.87 8.12c.4.07.78.17 1.12.3 1.2.45 2 1.21 2 2.08 0 1.38-2.01 2.5-4.5 2.5S1 11.88 1 10.5 3.01 8 5.5 8c.48 0 .94.04 1.38.12ZM5.5 14c1.38 0 2.68-.3 3.67-.86.3-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S1 17.88 1 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85Z";
   var pathdfilled = "M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5h-4c.3-.43.5-.93.5-1.5V10.3c-.11-1.42-1.4-2.36-2.65-2.83A8.86 8.86 0 0 0 4 7.12V3.5C4 2.67 4.67 2 5.5 2H10Zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25ZM6.88 8.12c.4.07.78.17 1.12.3 1.2.45 2 1.21 2 2.08 0 1.38-2.01 2.5-4.5 2.5S1 11.88 1 10.5 3.01 8 5.5 8c.48 0 .94.04 1.38.12ZM5.5 14c1.38 0 2.68-.3 3.67-.86.3-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S1 17.88 1 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85Z";
   
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