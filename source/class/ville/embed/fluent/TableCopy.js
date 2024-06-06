/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableCopy",
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

   var pathdregular = "M3 13.5A3.5 3.5 0 0 0 6.5 17h7.83c-.77.63-1.76 1-2.83 1h-5A4.5 4.5 0 0 1 2 13.5v-5c0-1.07.37-2.06 1-2.83v7.83Zm1.73 1.77A2.5 2.5 0 0 1 4 13.5v-9A2.5 2.5 0 0 1 6.5 2h9A2.5 2.5 0 0 1 18 4.5v9a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-1.77-.73ZM17 6V4.5A1.5 1.5 0 0 0 15.64 3H14v3h3Zm-4-3H9v3h4V3ZM8 3H6.5A1.5 1.5 0 0 0 5 4.36V6h3V3Zm1 4v4h4V7H9Zm-4 4h3V7H5v4Zm4 1v3h4v-3H9Zm-2.5 3H8v-3H5v1.5A1.5 1.5 0 0 0 6.36 15h.14Zm7.5-3v3h1.5a1.5 1.5 0 0 0 1.5-1.36V12h-3Zm0-5v4h3V7h-3Z";
   var pathdfilled = "M3 13.5A3.5 3.5 0 0 0 6.5 17h7.83c-.77.63-1.76 1-2.83 1h-5A4.5 4.5 0 0 1 2 13.5v-5c0-1.07.37-2.06 1-2.83v7.83ZM15.5 16H14v-4h4v1.5a2.5 2.5 0 0 1-2.5 2.5ZM14 7v4h4V7h-4Zm-5 4h4V7H9v4Zm4 1H9v4h4v-4ZM8 7v4H4V7h4Zm0 5H4v1.5A2.5 2.5 0 0 0 6.5 16H8v-4Zm10-6h-4V2h1.5A2.5 2.5 0 0 1 18 4.5V6Zm-5 0V2H9v4h4ZM8 6V2H6.5A2.5 2.5 0 0 0 4 4.5V6h4Z";
   
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