/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalendarMail",
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

   var pathdregular = "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V8h-1V6H3v5.5c0 .83.67 1.5 1.5 1.5H5v1h-.5A2.5 2.5 0 0 1 2 11.5v-7Zm11 0c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5V5h10v-.5ZM8 9a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H8Zm-1 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v.02l-5 2.94-5-2.94V11Zm0 1.18 4.62 2.72c.23.14.53.14.76 0L17 12.18V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3.82Z";
   var pathdfilled = "M4.5 2A2.5 2.5 0 0 0 2 4.5V5h12v-.5A2.5 2.5 0 0 0 11.5 2h-7ZM14 6H2v5.5A2.5 2.5 0 0 0 4.5 14H5v-3a3 3 0 0 1 3-3h6V6Zm-7.93 4.48A2 2 0 0 1 8 9h8a2 2 0 0 1 1.93 1.48L12 13.96l-5.93-3.48Zm6.31 4.42L18 11.6V16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4.4l5.62 3.3c.23.14.53.14.76 0Z";
   
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