/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DataPie",
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

   var pathdregular = "M9 12a1 1 0 0 1-1-1V5.08A6 6 0 1 0 14.92 12H9ZM8 4.07c.55-.08 1 .38 1 .93v6h6c.55 0 1 .45.93 1A7 7 0 1 1 8 4.07ZM11 9V3a6 6 0 0 1 6 6h-6Zm6.06 1c.5 0 .93-.37.94-.86V9a7 7 0 0 0-7.14-7c-.5.01-.86.44-.86.94V9a1 1 0 0 0 1 1h6.06Z";
   var pathdfilled = "M8 4.07c.55-.08 1 .38 1 .93v6h6c.55 0 1 .45.93 1A7 7 0 1 1 8 4.07ZM17.06 10c.5 0 .93-.37.94-.86V9a7 7 0 0 0-7.14-7c-.5.01-.86.44-.86.94V9a1 1 0 0 0 1 1h6.06Z";
   
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