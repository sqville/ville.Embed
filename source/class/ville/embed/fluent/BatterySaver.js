/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BatterySaver",
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

   var pathdregular = "M9 9.56c0-1.23-.62-3.03-1.83-5.27-.21-.39-.76-.38-1-.02-.32.51-.8 1.03-1.45 1.56l-.29.22-.65.51C2.43 7.64 1.9 8.61 2.02 10.03c.1 1.25.85 2.15 2.15 2.56-.46.54-1.06.96-1.81 1.28a.6.6 0 0 0-.32.77c.13.3.47.44.77.32a5.55 5.55 0 0 0 3.04-2.86c.22-.48.4-.96.53-1.44l.03-.12.08-.32.05-.26.04-.19.05-.37c.03-.3.05-.6.04-.88V8.5c.01-.3.26-.56.57-.56.32 0 .59.25.6.58a9.02 9.02 0 0 1-.7 3.5l-.01.07c-.02.07 0 .15.02.21.08.18.3.26.47.18l.09-.04.15-.11A3.81 3.81 0 0 0 9 9.56Zm7-2.2A2.5 2.5 0 0 0 13.5 5H9.53c-.3 0-.53.14-.53.5s.2.5.53.5h4.34c.64.06 1.13.6 1.13 1.24v5.63c-.06.63-.6 1.13-1.25 1.13H6c-.3 0-.5.2-.5.5s.2.5.5.5h7.65A2.5 2.5 0 0 0 16 12.5v-.82H17.28a.83.83 0 0 0 .72-.83V9.08a.83.83 0 0 0-.84-.73L16 8.33v-.98Z";
   var pathdfilled = "m9.59 5 3.91.01A2.5 2.5 0 0 1 16 7.37v.98h1.17a.83.83 0 0 1 .82.73l.01.1v1.67a.83.83 0 0 1-.72.82l-.11.01H16v.83a2.5 2.5 0 0 1-2.35 2.5h-.15L6 15c-.18 0-.5-.12-.5-.5s.3-.5.5-.5h.04C7.32 14 10 13.01 10 9.72c0-1.02-.45-2.68-.96-3.92a.58.58 0 0 1 .47-.8h.08Zm-2.42-.71C8.38 6.53 9 8.33 9 9.56c0 1.24-.58 2.28-1.14 2.77a.93.93 0 0 1-.15.1l-.1.05a.35.35 0 0 1-.46-.18.36.36 0 0 1-.02-.2l.02-.08c.47-1.19.7-2.36.68-3.5a.59.59 0 0 0-.59-.58.59.59 0 0 0-.57.56v.02c0 .29 0 .58-.04.88l-.05.37-.04.19-.05.26-.08.32-.03.12c-.13.48-.31.96-.53 1.44a5.55 5.55 0 0 1-3.04 2.86.58.58 0 0 1-.77-.32.6.6 0 0 1 .32-.77 4.69 4.69 0 0 0 1.8-1.28c-1.29-.4-2.04-1.3-2.14-2.56-.12-1.42.41-2.39 1.76-3.47l.65-.5.29-.23a6.89 6.89 0 0 0 1.46-1.56c.23-.36.78-.37.99.02Z";
   
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