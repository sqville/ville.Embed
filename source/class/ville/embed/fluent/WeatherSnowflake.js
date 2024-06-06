/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WeatherSnowflake",
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

   var pathdregular = "M10 2c.28 0 .5.22.5.5v3.04l1.9-1.9a.5.5 0 0 1 .7.71l-2.6 2.6V9.5h2.54l2.6-2.6a.5.5 0 0 1 .71.7l-1.9 1.9h3.05a.5.5 0 0 1 0 1h-3.04l1.9 1.9a.5.5 0 0 1-.71.7l-2.6-2.6H10.5v2.54l2.6 2.6a.5.5 0 0 1-.7.71l-1.9-1.9v3.05a.5.5 0 0 1-1 0v-3.04l-1.9 1.9a.5.5 0 0 1-.7-.71l2.6-2.6V10.5H6.96l-2.6 2.6a.5.5 0 0 1-.71-.7l1.9-1.9H2.5a.5.5 0 0 1 0-1h3.04l-1.9-1.9a.5.5 0 1 1 .71-.7l2.6 2.6H9.5V6.96l-2.6-2.6a.5.5 0 1 1 .7-.71l1.9 1.9V2.5c0-.28.22-.5.5-.5Z";
   var pathdfilled = "M10 2c.41 0 .75.34.75.75v2.19l1.47-1.47a.75.75 0 1 1 1.06 1.06l-2.53 2.53v2.19h2.19l2.53-2.53a.75.75 0 1 1 1.06 1.06l-1.47 1.47h2.19a.75.75 0 0 1 0 1.5h-2.19l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2.53-2.53h-2.19v2.19l2.53 2.53a.75.75 0 1 1-1.06 1.06l-1.47-1.47v2.19a.75.75 0 0 1-1.5 0v-2.19l-1.47 1.47a.75.75 0 0 1-1.06-1.06l2.53-2.53v-2.19H7.06l-2.53 2.53a.75.75 0 0 1-1.06-1.06l1.47-1.47H2.75a.75.75 0 0 1 0-1.5h2.19L3.47 7.78a.75.75 0 0 1 1.06-1.06l2.53 2.53h2.19V7.06L6.72 4.53a.75.75 0 0 1 1.06-1.06l1.47 1.47V2.75c0-.41.34-.75.75-.75Z";
   
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