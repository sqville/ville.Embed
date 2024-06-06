/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PositionToFront",
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

   var pathdregular = "M3 1a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h1v-.5c0-.17.01-.34.04-.5H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.04C7.16 4 7.33 4 7.5 4H8V3a2 2 0 0 0-2-2H3Zm9 16v-1h.5c.17 0 .34-.01.5-.04V17a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-1.04c.03-.16.04-.33.04-.5V12h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2ZM5 7.5A2.5 2.5 0 0 1 7.5 5h5A2.5 2.5 0 0 1 15 7.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 5 12.5v-5Zm2.28-1.48a1.5 1.5 0 0 0-1.26 1.26l1.26-1.26ZM6 10.29 10.3 6H8.7L6 8.7v1.6ZM11.7 6 6 11.7v.8c0 .23.05.45.15.65l7-7A1.5 1.5 0 0 0 12.5 6h-.8Zm-4.2 8h.8L14 8.3v-.8c0-.23-.05-.45-.15-.65l-7 7c.2.1.42.15.65.15Zm2.2 0h1.6l2.7-2.7V9.7L9.7 14Zm3.02-.02a1.5 1.5 0 0 0 1.26-1.26l-1.26 1.26Z";
   var pathdfilled = "M1 3c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v1h-.5c-.17 0-.34.01-.5.04V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1.04C4 7.16 4 7.33 4 7.5V8H3a2 2 0 0 1-2-2V3Zm11 13v1c0 1.1.9 2 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1v.5c0 .17-.01.34-.04.5H17a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1.04c-.16.03-.33.04-.5.04H12ZM5 7.5A2.5 2.5 0 0 1 7.5 5h5A2.5 2.5 0 0 1 15 7.5v5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 5 12.5v-5Z";
   
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