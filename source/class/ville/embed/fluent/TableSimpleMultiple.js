/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableSimpleMultiple",
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

   var pathdregular = "M4.5 2A2.5 2.5 0 0 0 2 4.5v8A2.5 2.5 0 0 0 4.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 12.5 2h-8ZM14 8H9V3h3.5c.83 0 1.5.67 1.5 1.5V8ZM8 8H3V4.5C3 3.67 3.67 3 4.5 3H8v5ZM3 9h5v5H4.5A1.5 1.5 0 0 1 3 12.5V9Zm6 0h5v3.5c0 .83-.67 1.5-1.5 1.5H9V9Zm-1.5 9a2.5 2.5 0 0 1-2.45-2H6.1c.2.58.76 1 1.41 1h5.75A3.75 3.75 0 0 0 17 13.25V7.5c0-.65-.42-1.2-1-1.41V5.05a2.5 2.5 0 0 1 2 2.45v5.75A4.75 4.75 0 0 1 13.25 18H7.5Z";
   var pathdfilled = "M4.5 2A2.5 2.5 0 0 0 2 4.5V8h6V2H4.5ZM2 12.5V9h6v6H4.5A2.5 2.5 0 0 1 2 12.5ZM9 15V9h6v3.5a2.5 2.5 0 0 1-2.5 2.5H9Zm6-10.5V8H9V2h3.5A2.5 2.5 0 0 1 15 4.5ZM7.5 18a2.5 2.5 0 0 1-2.45-2h7.45a3.5 3.5 0 0 0 3.5-3.5V5.05a2.5 2.5 0 0 1 2 2.45v5.75A4.75 4.75 0 0 1 13.25 18H7.5Z";
   
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