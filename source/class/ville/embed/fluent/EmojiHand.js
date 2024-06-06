/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EmojiHand",
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

   var pathdregular = "M4.5 1c-.65 0-1.2.42-1.41 1H3a2 2 0 0 0-2 2v4.8c0 .54.13 1.07.37 1.56L2 11.62A2.5 2.5 0 0 0 4.24 13h1.82a3.1 3.1 0 0 0 2.52-1.5 8.04 8.04 0 0 1 3.62-3.04.5.5 0 0 0 .29-.58 2.17 2.17 0 0 0-.8-1.28 1.9 1.9 0 0 0-1.13-.35c-.2 0-.4.03-.56.06V4a2 2 0 0 0-2-2h-.09c-.2-.58-.76-1-1.41-1h-2Zm0 1H5v4.5a.5.5 0 0 0 1 0V2h.5c.28 0 .5.22.5.5v4a.5.5 0 1 0 1 0V3a1 1 0 0 1 1 1v3a.5.5 0 0 0 .72.45h.01a1.51 1.51 0 0 1 .24-.1 2 2 0 0 1 .6-.1c.2 0 .39.05.53.15.1.07.19.17.28.34-1.87.9-3 2.22-3.64 3.21-.4.63-1.04 1.05-1.68 1.05H4.24a1.5 1.5 0 0 1-1.35-.83l-.63-1.26A2.5 2.5 0 0 1 2 8.79V4a1 1 0 0 1 1-1v3.5a.5.5 0 1 0 1 0v-4c0-.28.22-.5.5-.5Zm8.76 5.05a5.5 5.5 0 1 1-6.1 6.78c.33-.11.64-.27.93-.45a4.5 4.5 0 1 0 5.4-5.27c.02-.16 0-.32-.03-.47-.06-.2-.12-.4-.2-.59Zm-2.51 5.45a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm4.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-4.05 2.53a.5.5 0 1 0-.9.44c.25.5 1.05 1.28 2.45 1.28 1.4 0 2.2-.78 2.45-1.28a.5.5 0 1 0-.9-.44c-.08.17-.55.72-1.55.72s-1.47-.55-1.55-.72Z";
   var pathdfilled = "M5.5 1c.28 0 .5.22.5.5v5a.5.5 0 0 0 1 0v-4a.5.5 0 0 1 1 0v4.25l.31-.06c.32-.04.7-.02 1.07.14.38.16.74.44 1.04.9a.5.5 0 0 1-.22.73 5.26 5.26 0 0 0-2.71 2.37C6.94 11.86 5.89 13 4.5 13h-.26A2.5 2.5 0 0 1 2 11.62l-.63-1.26A3.5 3.5 0 0 1 1 8.79V2.5a.5.5 0 0 1 1 0v4a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-5c0-.28.22-.5.5-.5Zm2.87 10.3c-.28.54-.74 1.18-1.35 1.7a5.5 5.5 0 1 0 4.21-5.85l.02.02a1.5 1.5 0 0 1-.66 2.2 4.27 4.27 0 0 0-2.22 1.92Zm2.38 1.2a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm4.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-4.05 2.53c.08.17.55.72 1.55.72s1.47-.55 1.55-.72a.5.5 0 1 1 .9.44c-.25.5-1.05 1.28-2.45 1.28-1.4 0-2.2-.78-2.45-1.28a.5.5 0 1 1 .9-.44Z";
   
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