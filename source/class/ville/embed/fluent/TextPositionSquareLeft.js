/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextPositionSquareLeft",
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

   var pathdregular = "M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM12 6a.5.5 0 0 0 0 1h4.5a.5.5 0 0 0 0-1H12Zm-.5 3.5c0-.28.22-.5.5-.5h4.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM12 12a.5.5 0 0 0 0 1h4.5a.5.5 0 0 0 0-1H12Zm-9 3.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm1-7a2.5 2.5 0 0 1 5 0v5a.5.5 0 0 0 1 0v-5a3.5 3.5 0 1 0-7 0v5a.5.5 0 0 0 1 0v-5Z";
   var pathdfilled = "M3.5 2.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5h-13Zm8.5 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5H12Zm-.75 3.75c0-.41.34-.75.75-.75h4.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5H12ZM2.75 15.5c0-.41.34-.75.75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75Zm1.5-7a2.25 2.25 0 0 1 4.5 0v5a.75.75 0 0 0 1.5 0v-5a3.75 3.75 0 1 0-7.5 0v5a.75.75 0 0 0 1.5 0v-5Z";
   
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