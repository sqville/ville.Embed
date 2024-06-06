/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CubeQuick",
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

   var pathdregular = "M13.27 5.56a.5.5 0 0 1 .46 0l3 1.54a.5.5 0 0 1 .27.44v3.92a.5.5 0 0 1-.27.44l-3 1.54a.5.5 0 0 1-.46 0l-3-1.54a.5.5 0 0 1-.27-.44V7.54c0-.18.1-.36.27-.44l3-1.54Zm.92-.9a1.5 1.5 0 0 0-1.38 0l-3 1.55c-.5.26-.81.77-.81 1.33v3.92c0 .56.31 1.07.81 1.33l3 1.54c.43.22.95.22 1.38 0l3-1.54c.5-.25.81-.77.81-1.33V7.54a1.5 1.5 0 0 0-.81-1.33l-3-1.54ZM3 6.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm-1 3c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm1 3c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm8.05-4.72a.5.5 0 0 1 .67-.23l1.78.9 1.78-.9a.5.5 0 1 1 .44.9L14 9.3v2.19a.5.5 0 1 1-1 0V9.3l-1.72-.85a.5.5 0 0 1-.23-.67Z";
   var pathdfilled = "M12.81 4.67a1.5 1.5 0 0 1 1.38 0l3 1.54c.5.26.81.77.81 1.33v3.92a1.5 1.5 0 0 1-.81 1.33l-3 1.54a1.5 1.5 0 0 1-1.38 0l-3-1.54A1.5 1.5 0 0 1 9 11.46V7.54c0-.56.31-1.07.81-1.33l3-1.54Zm-1.76 3.1a.5.5 0 0 0 .23.68L13 9.3v2.2a.5.5 0 0 0 1 0V9.3l1.72-.86a.5.5 0 1 0-.44-.9l-1.78.9-1.78-.9a.5.5 0 0 0-.67.23ZM3.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-1 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm1 3a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1h-4Z";
   
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