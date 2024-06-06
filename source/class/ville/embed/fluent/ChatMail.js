/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ChatMail",
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

   var pathdregular = "M6 6c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 6Zm.5 1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM8 1a6 6 0 0 0-5.27 8.87l-.71 2.5a.5.5 0 0 0 .64.6L5 12.2A6 6 0 1 0 8 1ZM3 7a5 5 0 1 1 2.33 4.23.5.5 0 0 0-.43-.06l-1.66.56.51-1.79a.5.5 0 0 0-.05-.39A4.97 4.97 0 0 1 3 7Zm9.28 7.95-2.4-1.2c.43-.13.86-.29 1.26-.5l1.36.7 4.5-2.26V11a1 1 0 0 0-1-1h-1.67c.15-.32.28-.65.38-1H16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2.07c.33.05.66.07 1 .07v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3.2l-4.28 2.15a.5.5 0 0 1-.44 0Z";
   var pathdfilled = "M2 7a6 6 0 1 1 3 5.2l-2.34.77a.5.5 0 0 1-.64-.6l.71-2.5A5.98 5.98 0 0 1 2 7Zm4.5-1.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm2 2h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1Z";
   
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