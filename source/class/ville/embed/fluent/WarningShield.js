/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WarningShield",
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

   var pathdregular = "M10.31 1.85a1.5 1.5 0 0 0-2.62 0L1.13 13.78A1.5 1.5 0 0 0 2.44 16h7.94a6.7 6.7 0 0 1-.26-1H2.44a.5.5 0 0 1-.44-.74L8.56 2.33a.5.5 0 0 1 .88 0l3.73 6.8c.27-.18.53-.4.79-.66L10.3 1.85Z";
   var pathdfilled = "M7.69 1.85 1.13 13.78A1.5 1.5 0 0 0 2.44 16h7.94a7.27 7.27 0 0 1-.38-2.12v-2.79c0-.75.59-1.42 1.4-1.42.9 0 1.73-.35 2.56-1.2L10.3 1.85a1.5 1.5 0 0 0-2.62 0ZM9 5.75c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75Zm.75 7a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z";
   
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