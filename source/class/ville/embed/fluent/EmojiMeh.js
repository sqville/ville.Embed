/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EmojiMeh",
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

   var pathdregular = "M7.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-7 3.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z";
   var pathdfilled = "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.5-1.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-6.5 3c0 .28.22.5.5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5Z";
   
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