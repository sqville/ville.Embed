/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShapeSubtract",
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

   var pathdregular = "M4.5 2A2.5 2.5 0 0 0 2 4.5V10.56c.01.48.16.94.41 1.32l.02.02A2.52 2.52 0 0 0 4.3 13H7v2.5A2.5 2.5 0 0 0 9.5 18h6a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 15.5 7H13V4.5a2.52 2.52 0 0 0-.41-1.38l-.02-.02A2.51 2.51 0 0 0 10.51 2H4.5Zm.64 1L3 5.14V4.5C3 3.67 3.67 3 4.5 3h.64ZM3 6.56 6.56 3h1.58L3 8.14V6.56ZM9.56 3h.94c.23 0 .45.05.65.15l-8 8A1.5 1.5 0 0 1 3 10.5v-.94L9.56 3Zm2.3.85c.09.2.14.42.14.65v.8L10.3 7h-.8c-.36 0-.7.07-1 .2l3.35-3.35ZM7.2 8.5c-.14.3-.21.64-.21 1v.8L5.3 12h-.8a1.5 1.5 0 0 1-.65-.15L7.21 8.5Zm.79 1C8 8.67 8.67 8 9.5 8h6c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 8 15.5v-6Z";
   var pathdfilled = "M4.5 2A2.5 2.5 0 0 0 2 4.5v6A2.5 2.5 0 0 0 4.5 13H7v2.5A2.5 2.5 0 0 0 9.5 18h6a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 15.5 7H13V4.5A2.5 2.5 0 0 0 10.5 2h-6ZM8 9.5C8 8.67 8.67 8 9.5 8h6c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0 1 8 15.5v-6Z";
   
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