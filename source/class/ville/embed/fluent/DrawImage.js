/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DrawImage",
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

   var pathdregular = "M14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3c-.34.02-.68.1-1 .23V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8.83c0 .17.21.26.34.14l.8-.8 1.05-1.03.2-.2 2.56-2.5a1.5 1.5 0 0 1 2.1 0l1.75 1.7-.71.71-1.74-1.7a.5.5 0 0 0-.7 0l-2.76 2.7-1.85 1.83A1.2 1.2 0 0 1 3 14.83V6Zm.4 11.04c.37.18.83.33 1.22.24.25-.05.57-.19.94-.34.88-.37 2-.85 2.86-.5.64.26.59.98.4 1.33-.03.07 0 .16.07.18.27.06.65.1 1.11.09 0-.05.02-.1.03-.14l.37-1.5c.1-.39.3-.74.58-1.02l4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.22.3c-1.12.33-2.8.23-3.31-.18a1.05 1.05 0 0 1-.32-1.24c.04-.08-.02-.18-.1-.17-.5.07-.9.25-1.3.43-.6.25-1.16.5-1.98.4a1.7 1.7 0 0 1-1.33-.82c-.12-.2.15-.4.36-.28Z";
   var pathdfilled = "M6 3a3 3 0 0 0-3 3v9.08c0 .45.55.68.87.36L5.2 14.1l3.74-3.68a1.5 1.5 0 0 1 2.1 0l1.74 1.72 2.31-2.3c.53-.54 1.21-.82 1.9-.85V6a3 3 0 0 0-3-3H6Zm8 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-2.73 7.17 1.82-1.81-1.74-1.71a.5.5 0 0 0-.7 0L5.43 15.3c-.23.23-.01.58.3.47l.32-.11c.7-.26 1.76-.55 2.75-.16.28.12.5.28.68.48.15-.5.42-.95.8-1.32Zm.71.7 4.83-4.82a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.22.3c-1.12.33-2.8.23-3.31-.18a1.05 1.05 0 0 1-.32-1.24c.04-.08-.02-.18-.1-.17-.5.07-.9.25-1.3.43-.6.25-1.16.5-1.98.4a1.7 1.7 0 0 1-1.33-.82c-.12-.2.15-.4.36-.28.37.18.83.33 1.22.24.25-.05.57-.19.94-.34.88-.37 2-.85 2.86-.5.64.26.59.98.4 1.33-.03.07 0 .16.07.18.27.06.65.1 1.11.09 0-.05.02-.1.03-.14l.37-1.5c.1-.39.3-.74.58-1.02Z";
   
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