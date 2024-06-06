/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableChecker",
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

   var pathdregular = "M16 5.5V11h1V5.5A2.5 2.5 0 0 0 14.5 3H9v1h5.5c.83 0 1.5.67 1.5 1.5ZM3 9v5.5A2.5 2.5 0 0 0 5.5 17H11v-1H5.5A1.5 1.5 0 0 1 4 14.5V9H3Zm2.5-6H8v4h5v5h4v2.5a2.5 2.5 0 0 1-2.5 2.5H12v-4H7V8H3V5.5A2.5 2.5 0 0 1 5.5 3Zm9 13c.78 0 1.42-.6 1.5-1.36V13h-3v3h1.5ZM12 8H8v4h4V8ZM4 7h3V4H5.5c-.78 0-1.42.6-1.5 1.36V7Z";
   var pathdfilled = "M7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm5 5H8v4h4V8Zm1 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13v-4ZM8 4h6.5c.83 0 1.5.67 1.5 1.5V12h1V5.5A2.5 2.5 0 0 0 14.5 3H8v1ZM5.5 16H12v1H5.5A2.5 2.5 0 0 1 3 14.5V8h1v6.5c0 .83.67 1.5 1.5 1.5Z";
   
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