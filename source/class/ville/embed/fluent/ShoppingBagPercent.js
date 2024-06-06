/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShoppingBagPercent",
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

   var pathdregular = "M8.5 2c.56 0 1.08.19 1.5.5a2.5 2.5 0 0 1 4 2V6h1a1 1 0 0 1 1 1v3.88l-1 1V7h-3v2a3 3 0 0 0-1 .17V7H5v8c0 1.1.9 2 2 2h3.09a1.5 1.5 0 0 0 0 1H7a3 3 0 0 1-3-3V7a1 1 0 0 1 1-1h1V4.5A2.5 2.5 0 0 1 8.5 2Zm0 1C7.67 3 7 3.67 7 4.5V6h3V4.5C10 3.67 9.33 3 8.5 3Zm3 0c-.3 0-.6.1-.83.25.2.37.33.8.33 1.25V6h2V4.5c0-.83-.67-1.5-1.5-1.5Zm.5 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm.85-4.15a.5.5 0 0 0-.7-.7l-6 6a.5.5 0 0 0 .7.7l6-6Z";
   var pathdfilled = "M6 4.5V6H5a1 1 0 0 0-1 1v8a2.93 2.93 0 0 0 .88 2.13A3 3 0 0 0 7 18h3.09a1.5 1.5 0 0 1 .35-1.56l.56-.56v-1.05a3 3 0 0 1 0-5.66V4.5a2.48 2.48 0 0 0-.33-1.24 1.48 1.48 0 0 1 2.21.66c.08.18.12.37.12.58V6h-1v3a3 3 0 0 1 3 2.88l1-1V7a1 1 0 0 0-1-1h-1V4.5a2.48 2.48 0 0 0-4-2A2.54 2.54 0 0 0 8.5 2a2.42 2.42 0 0 0-1.77.73A2.43 2.43 0 0 0 6 4.5Zm4 0V6H7V4.5a1.48 1.48 0 0 1 .91-1.38 1.48 1.48 0 0 1 1.97.8c.08.18.12.37.12.58Zm2 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm.85-4.15a.5.5 0 0 0-.7-.7l-6 6a.5.5 0 0 0 .7.7l6-6Z";
   
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