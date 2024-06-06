/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentBulletListMultiple",
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

   var pathdregular = "M6.5 10a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM6 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2-2c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM6 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 9.59 2H6ZM5 4a1 1 0 0 1 1-1h3v3.5c0 .83.67 1.5 1.5 1.5H14v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm5 2.5V3.2L13.8 7h-3.3a.5.5 0 0 1-.5-.5ZM16 8a1 1 0 0 1 1 1v5.06A3.94 3.94 0 0 1 13.06 18H7a1 1 0 0 1-1-1h7a3 3 0 0 0 3-3V8Z";
   var pathdfilled = "M9 6.5V2H5.5C4.67 2 4 2.67 4 3.5v11c0 .83.67 1.5 1.5 1.5H13a2 2 0 0 0 2-2V8h-4.5A1.5 1.5 0 0 1 9 6.5Zm-3 4a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm.5 2.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm2-2a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4ZM8 12.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm2-6V2.25L14.75 7H10.5a.5.5 0 0 1-.5-.5ZM17 9a1 1 0 0 0-1-1v6a3 3 0 0 1-3 3H6a1 1 0 0 0 1 1h6.06A3.94 3.94 0 0 0 17 14.06V9Z";
   
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