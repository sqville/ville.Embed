/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Blur",
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

   var pathdregular = "M10 2a8 8 0 1 0 5.3 14H10v1a7 7 0 1 1 0-14h3.88A7.96 7.96 0 0 0 10 2Zm0 2h5.3c.34.3.66.64.95 1H10V4Zm6.93 2H10v1h7.42c-.14-.35-.3-.68-.49-1ZM10 8h7.75c.08.33.15.66.19 1H10V8Zm8 2h-8v1h7.94c.04-.33.06-.66.06-1Zm-8 2h7.75c-.09.34-.2.68-.33 1H10v-1Zm6.93 2H10v1h6.25a8 8 0 0 0 .68-1Z";
   var pathdfilled = "M10 2a8 8 0 1 0 5.3 14H10v-1h6.25a8 8 0 0 0 .68-1H10v-1h7.42c.13-.32.24-.66.33-1H10v-1h7.94c.04-.33.06-.66.06-1h-8V9h7.94c-.04-.34-.1-.67-.2-1H10V7h7.42c-.14-.35-.3-.68-.49-1H10V5h6.25c-.3-.36-.61-.7-.96-1H10V3h3.88A7.96 7.96 0 0 0 10 2Z";
   
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