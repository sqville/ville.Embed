/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ScanType",
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

   var pathdregular = "M4.5 3C3.67 3 3 3.67 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h2a.5.5 0 0 1 0 1h-2Zm0 14A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 4.5 18h2a.5.5 0 0 0 0-1h-2ZM17 4.5c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0v-2ZM15.5 17c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 0 1 1 0v2a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1 0-1h2ZM6 6.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0V7h-2.5v6h.5a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1h.5V7H7v.5a.5.5 0 0 1-1 0v-1Z";
   var pathdfilled = "M4.5 3.5a1 1 0 0 0-1 1v2.25a.75.75 0 0 1-1.5 0V4.5A2.5 2.5 0 0 1 4.5 2h2.25a.75.75 0 0 1 0 1.5H4.5Zm0 13a1 1 0 0 1-1-1v-2.25a.75.75 0 0 0-1.5 0v2.25A2.5 2.5 0 0 0 4.5 18h2.25a.75.75 0 0 0 0-1.5H4.5Zm12-12a1 1 0 0 0-1-1h-2.25a.75.75 0 0 1 0-1.5h2.25A2.5 2.5 0 0 1 18 4.5v2.25a.75.75 0 0 1-1.5 0V4.5Zm-1 12a1 1 0 0 0 1-1v-2.25a.75.75 0 0 1 1.5 0v2.25a2.5 2.5 0 0 1-2.5 2.5h-2.25a.75.75 0 0 1 0-1.5h2.25ZM5.75 6.75c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75v1a.75.75 0 0 1-1.5 0V7.5h-2v5H11a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h.25v-5h-2v.25a.75.75 0 0 1-1.5 0v-1Z";
   
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