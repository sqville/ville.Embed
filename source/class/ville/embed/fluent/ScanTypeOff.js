/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ScanTypeOff",
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

   var pathdregular = "M2.41 3.12C2.15 3.52 2 4 2 4.5v2a.5.5 0 0 0 1 0v-2c0-.23.05-.45.15-.65L6 6.71v.79a.5.5 0 0 0 .97.18L9.5 10.2V13H9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-.5v-1.8l5.65 5.65c-.2.1-.42.15-.65.15h-2a.5.5 0 0 0 0 1h2c.5 0 .98-.15 1.38-.41l.27.26a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7l.26.27ZM8.12 6l1 1h.38v.38l1 1V7H13v.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5H8.12ZM18 15.5c0 .12 0 .24-.02.35l-.98-.97V13.5a.5.5 0 0 1 1 0v2ZM4.15 2.02l.97.98H6.5a.5.5 0 0 0 0-1h-2c-.12 0-.24 0-.35.02ZM4.5 17A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 4.5 18h2a.5.5 0 0 0 0-1h-2ZM17 4.5c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0v-2Z";
   var pathdfilled = "M2.41 3.12C2.15 3.52 2 4 2 4.5v2.25a.75.75 0 0 0 1.5 0V4.5a1 1 0 0 1 .03-.26L5.8 6.5a.75.75 0 0 0-.04.25v1a.75.75 0 0 0 1.48.18l2.02 2.03v2.54H9A.75.75 0 0 0 9 14h2a.75.75 0 0 0 0-1.5h-.25v-1.04l5 5a1 1 0 0 1-.25.04h-2.25a.75.75 0 0 0 0 1.5h2.25c.5 0 .98-.15 1.38-.41l.27.26a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7l.26.27ZM8.12 6l2.63 2.63V7.5h2v.25a.75.75 0 0 0 1.5 0v-1A.75.75 0 0 0 13.5 6H8.12Zm8.38 8.38 1.48 1.47.02-.35v-2.25a.75.75 0 0 0-1.5 0v1.13ZM4.15 2.02 5.62 3.5h1.13a.75.75 0 0 0 0-1.5H4.5c-.12 0-.24 0-.35.02ZM4.5 16.5a1 1 0 0 1-1-1v-2.25a.75.75 0 0 0-1.5 0v2.25A2.5 2.5 0 0 0 4.5 18h2.25a.75.75 0 0 0 0-1.5H4.5Zm12-12a1 1 0 0 0-1-1h-2.25a.75.75 0 0 1 0-1.5h2.25A2.5 2.5 0 0 1 18 4.5v2.25a.75.75 0 0 1-1.5 0V4.5Z";
   
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