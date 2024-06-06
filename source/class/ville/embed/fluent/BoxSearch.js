/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BoxSearch",
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

   var pathdregular = "M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.57.23.94.78.94 1.4v7.64a1.5 1.5 0 0 1-.94 1.4l-5.76 2.3c-.48.19-.99.27-1.5.24a1.5 1.5 0 0 0-.24-.32l-.06-.06V8.84L3 6.24v2.79c-.35.04-.68.11-1 .23V6.18c0-.62.37-1.17.94-1.4l5.76-2.3Zm2.23.93a2.5 2.5 0 0 0-1.86 0l-1.35.54 6.16 2.46 2.27-.91-5.22-2.1Zm1.6 3.54L6.38 4.49l-2.53 1L10 7.97l2.53-1.01ZM17 6.24l-6.5 2.6v7.88c.15-.03.29-.07.43-.13l5.76-2.3a.5.5 0 0 0 .31-.47V6.24ZM3.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L6.3 15.6A3.5 3.5 0 1 0 3.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z";
   var pathdfilled = "m10 7.96 3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 0 0-.36.21L10 7.96Zm-7.96-2.1c-.03.1-.04.2-.04.32v3.08a4.5 4.5 0 0 1 5.56 6.18l1.94 1.94V8.84L2.04 5.85Zm8.46 11.87c.27-.04.54-.1.8-.21l5.76-2.3c.57-.23.94-.78.94-1.4V6.18c0-.11-.01-.22-.04-.33L10.5 8.84v8.9ZM17.42 5l-3.04 1.22-7.5-3 1.82-.73a3.5 3.5 0 0 1 2.6 0l5.76 2.3c.13.06.25.13.36.21ZM3.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L6.3 15.6A3.5 3.5 0 1 0 3.5 17Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z";
   
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