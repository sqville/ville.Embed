/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FlashCheckmark",
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

   var pathdregular = "M6.19 2.77c.13-.46.55-.77 1.02-.77h5.25c.73 0 1.24.71 1 1.4L12.2 7h2.57c.94 0 1.4 1.14.76 1.81l-.24.25a5.55 5.55 0 0 0-1.37-.03l.9-.91a.06.06 0 0 0 .01-.03v-.05a.08.08 0 0 0-.03-.03L14.77 8H11.5a.5.5 0 0 1-.47-.67l1.49-4.25a.06.06 0 0 0-.06-.08H7.21a.06.06 0 0 0-.06.05L4.9 10.92c-.01.04.02.08.06.08h1.9a.5.5 0 0 1 .5.62l-1.33 5.3v.04l.03.03.04.01h.01l.02-.02 2.89-2.95a5.57 5.57 0 0 0 .05 1.38l-2.22 2.26c-.75.79-2.05.06-1.8-1L6.24 12H4.96c-.7 0-1.21-.68-1.02-1.36l2.25-7.87ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z";
   var pathdfilled = "M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l2.21-2.27a5.5 5.5 0 0 1 6.22-6.35l.24-.24c.65-.68.18-1.82-.76-1.82H12.2l1.27-3.6c.23-.69-.28-1.4-1.01-1.4H7.21ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z";
   
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