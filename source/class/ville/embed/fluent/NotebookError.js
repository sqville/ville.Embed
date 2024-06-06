/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NotebookError",
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

   var pathdregular = "M5 2a2 2 0 0 0-2 2v5.6c.32-.16.65-.3 1-.4V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2.6c-.18.36-.4.7-.66 1H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3.5v2c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5ZM6 6h6v1H6V6Zm10 0h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13Zm-6 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM5.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z";
   var pathdfilled = "M3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.74A5.5 5.5 0 0 0 3 9.6V4Zm2.5 1a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7Zm11 1H16v2.5h.5A.5.5 0 0 0 17 8V6.5a.5.5 0 0 0-.5-.5ZM16 9.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm.5 3.5H16v2.5h.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm-11 6a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM5 12.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm1.13 4a.62.62 0 1 1-1.25 0 .62.62 0 0 1 1.25 0Z";
   
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