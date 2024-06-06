/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentHeart",
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

   var pathdregular = "M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 0 1-2 2H8.45l1-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v5.17c-.33-.1-.66-.15-1-.17V4Zm7-.8v3.3c0 .28.22.5.5.5h3.3L11 3.2ZM5.65 18.69a.5.5 0 0 0 .7 0l3.82-3.81a2.85 2.85 0 1 0-4.03-4.04l-.14.14-.13-.14a2.85 2.85 0 1 0-4.04 4.04l3.82 3.81Z";
   var pathdfilled = "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5V9c.7.03 1.4.25 2 .66a3.85 3.85 0 0 1 4.88 5.91L8.45 18h6.05c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Zm-4.86 4.33a2.85 2.85 0 1 1 4.03 4.04l-3.82 3.81a.5.5 0 0 1-.7 0l-3.82-3.81a2.85 2.85 0 1 1 4.03-4.04l.14.14.14-.14Zm4.03 4.04-.36-.36Z";
   
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