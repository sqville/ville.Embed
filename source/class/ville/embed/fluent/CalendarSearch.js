/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalendarSearch",
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

   var pathdregular = "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v3.76c.32-.12.65-.2 1-.23V7h12v7.5c0 .83-.67 1.5-1.5 1.5H9.12l1 1h4.38a2.5 2.5 0 0 0 2.5-2.5v-9ZM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4Zm1.1 12.3a3.5 3.5 0 1 1 .7-.7l2.55 2.55a.5.5 0 0 1-.7.7L6.6 16.3Zm.4-2.8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z";
   var pathdfilled = "M17 14.5V7H3v2.47a4.5 4.5 0 0 1 6.06 5.97L10.62 17h3.88a2.5 2.5 0 0 0 2.5-2.5Zm0-9A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14v-.5ZM7.1 16.3a3.5 3.5 0 1 1 .7-.7l2.55 2.55a.5.5 0 0 1-.7.7L7.1 16.3Zm.4-2.8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z";
   
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