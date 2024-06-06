/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NotebookAdd",
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

   var pathdregular = "M3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.74c.26-.3.48-.64.66-1H13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5.2c-.35.1-.68.24-1 .4V4Zm2.5.5A.5.5 0 0 0 5 5v2c0 .28.22.5.5.5h7A.5.5 0 0 0 13 7V5a.5.5 0 0 0-.5-.5h-7Zm.5 2v-1h6v1H6ZM16.5 6H16v2.5h.5A.5.5 0 0 0 17 8V6.5a.5.5 0 0 0-.5-.5Zm0 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5Zm0 3.5H16v2.5h.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm-11 6a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H6v1.5a.5.5 0 0 1-1 0V15H3.5a.5.5 0 0 1 0-1H5v-1.5c0-.28.22-.5.5-.5Z";
   var pathdfilled = "M5 2a2 2 0 0 0-2 2v5.6A5.5 5.5 0 0 1 9.74 18H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-7A.5.5 0 0 1 5 7V5Zm11 1h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5ZM16 13h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13Zm-6 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6v-1.5Z";
   
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