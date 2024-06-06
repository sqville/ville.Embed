/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EmojiSadSlight",
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

   var pathdregular = "M8.5 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm.3 2.5c-1.27 0-2.52.38-3.58 1.08a.5.5 0 0 0 .56.84c.9-.6 1.95-.92 3.02-.92h.8a.5.5 0 0 0 0-1h-.8ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z";
   var pathdfilled = "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM8.5 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm.3 4.5h.8a.5.5 0 0 1 0 1h-.8c-1.07 0-2.13.32-3.02.92a.5.5 0 1 1-.56-.84A6.45 6.45 0 0 1 12.8 12Z";
   
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