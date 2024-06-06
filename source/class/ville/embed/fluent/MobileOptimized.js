/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MobileOptimized",
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

   var pathdregular = "M5 2.5a.5.5 0 0 0-1 0V4H2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5v-2Zm11 0a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1H16V2.5ZM7 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7Zm0 1h6v8H7V6ZM4.5 18a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1H4v1.5c0 .28.22.5.5.5Zm11 0a.5.5 0 0 0 .5-.5V16h1.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5Zm-7-10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z";
   var pathdfilled = "M4.5 2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H4V2.5c0-.28.22-.5.5-.5Zm11 0c.28 0 .5.22.5.5V4h1.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5Zm-11 16a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1H4v1.5c0 .28.22.5.5.5Zm11 0a.5.5 0 0 0 .5-.5V16h1.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5ZM6 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6Zm2 2.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm0 2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z";
   
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