/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CloudEdit",
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

   var pathdregular = "M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25H5.1A3.34 3.34 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h3.2c.1-.36.28-.7.5-1h-3.7A2.33 2.33 0 0 1 3 11.62a2.33 2.33 0 0 1 2.28-2.37h.07a1 1 0 0 0 1-.9C6.55 6.32 7.89 5 10 5c2.1 0 3.45 1.32 3.65 3.35a1 1 0 0 0 .32.63l.13-.14c.25-.25.54-.45.85-.59H14.65Zm.16 1.3-4.83 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z";
   var pathdfilled = "M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25h-.07A3.33 3.33 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h3.2c.15-.5.42-.96.8-1.33l4.82-4.83c.25-.25.54-.45.85-.59H14.65Zm.16 1.3-4.83 4.83a2.2 2.2 0 0 0-.58 1.02l-.37 1.5a.89.89 0 0 0 1.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 0 0-2.64-2.64Z";
   
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