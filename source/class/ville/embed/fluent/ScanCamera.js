/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ScanCamera",
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

   var pathdregular = "M4.5 3C3.67 3 3 3.67 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1h-2Zm0 14A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 4.5 18h2a.5.5 0 0 0 0-1h-2ZM17 4.5c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0v-2ZM15.5 17c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 0 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1 0-1h2Zm-4.25-6.7c0 .69-.56 1.24-1.25 1.24s-1.25-.55-1.25-1.23c0-.68.56-1.23 1.25-1.23s1.25.55 1.25 1.23ZM5 9.09v3.69c0 .68.56 1.23 1.25 1.23h7.5c.69 0 1.25-.55 1.25-1.23v-3.7c0-.67-.56-1.22-1.25-1.22H12.5l-.88-1.3A1.26 1.26 0 0 0 10.58 6H9.42c-.42 0-.8.2-1.04.55l-.88 1.3H6.25C5.56 7.85 5 8.4 5 9.08Zm5-1.23c1.38 0 2.5 1.1 2.5 2.46a2.48 2.48 0 0 1-2.5 2.46c-1.38 0-2.5-1.1-2.5-2.46A2.48 2.48 0 0 1 10 7.85Z";
   var pathdfilled = "M4.5 3.5a1 1 0 0 0-1 1v2.25a.75.75 0 0 1-1.5 0V4.5A2.5 2.5 0 0 1 4.5 2h2.25a.75.75 0 0 1 0 1.5H4.5Zm0 13a1 1 0 0 1-1-1v-2.25a.75.75 0 0 0-1.5 0v2.25A2.5 2.5 0 0 0 4.5 18h2.25a.75.75 0 0 0 0-1.5H4.5Zm12-12a1 1 0 0 0-1-1h-2.25a.75.75 0 0 1 0-1.5h2.25A2.5 2.5 0 0 1 18 4.5v2.25a.75.75 0 0 1-1.5 0V4.5Zm-1 12a1 1 0 0 0 1-1v-2.25a.75.75 0 0 1 1.5 0v2.25a2.5 2.5 0 0 1-2.5 2.5h-2.25a.75.75 0 0 1 0-1.5h2.25Zm-4.25-6.2c0 .69-.56 1.24-1.25 1.24s-1.25-.55-1.25-1.23c0-.68.56-1.23 1.25-1.23s1.25.55 1.25 1.23ZM5 9.09v3.69c0 .68.56 1.23 1.25 1.23h7.5c.69 0 1.25-.55 1.25-1.23v-3.7c0-.67-.56-1.22-1.25-1.22H12.5l-.88-1.3A1.26 1.26 0 0 0 10.58 6H9.42c-.42 0-.8.2-1.04.55l-.88 1.3H6.25C5.56 7.85 5 8.4 5 9.08Zm5-1.23c1.38 0 2.5 1.1 2.5 2.46a2.48 2.48 0 0 1-2.5 2.46c-1.38 0-2.5-1.1-2.5-2.46A2.48 2.48 0 0 1 10 7.85Z";
   
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