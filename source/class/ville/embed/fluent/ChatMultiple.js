/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ChatMultiple",
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

   var pathdregular = "M8.54 2a6.5 6.5 0 0 0-5.68 9.67l-.8 2.08a1 1 0 0 0 1.21 1.32l2.49-.7A6.5 6.5 0 1 0 8.54 2Zm-5.5 6.5a5.5 5.5 0 1 1 3 4.9l-.18-.09-2.86.8.97-2.53-.13-.21a5.47 5.47 0 0 1-.8-2.87ZM11.5 18a6.49 6.49 0 0 1-4.93-2.26 7.5 7.5 0 0 0 1.76.26 5.47 5.47 0 0 0 5.67.4l.18-.09 2.86.8-.97-2.53.13-.21a5.47 5.47 0 0 0-.16-5.98c-.01-.6-.1-1.2-.24-1.76a6.48 6.48 0 0 1 1.38 8.04l.8 2.08a1 1 0 0 1-1.21 1.32l-2.49-.7c-.84.4-1.79.63-2.78.63Z";
   var pathdfilled = "M8.54 2a6.5 6.5 0 0 0-5.68 9.67l-.8 2.08a1 1 0 0 0 1.21 1.32l2.49-.7A6.5 6.5 0 1 0 8.54 2ZM6.57 15.74a6.49 6.49 0 0 0 7.71 1.64l2.49.7a1 1 0 0 0 1.2-1.33l-.8-2.08a6.47 6.47 0 0 0-1.37-8.04c.15.56.23 1.15.24 1.76a5.47 5.47 0 0 1 .16 5.98l-.13.2.97 2.54-2.86-.8-.18.09a5.47 5.47 0 0 1-5.67-.4 7.5 7.5 0 0 1-1.76-.26Z";
   
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