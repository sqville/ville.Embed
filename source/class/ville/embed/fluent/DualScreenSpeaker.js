/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DualScreenSpeaker",
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

   var pathdregular = "M17.65 2.2c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 0 1-.85-.52l.12-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 1 1 .8-.6Zm-3.96-.16c.19.08.31.26.31.46v6a.5.5 0 0 1-.85.35L11.29 7h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm2.53 1.93c-.1-.3-.2-.55-.27-.7a.5.5 0 1 0-.9.45 4.59 4.59 0 0 1 .45 1.78 3.94 3.94 0 0 1-.37 1.6l-.08.18a.5.5 0 1 0 .9.44 5.5 5.5 0 0 0 .55-2.22c0-.5-.1-1.02-.28-1.53ZM17 14V9.98c.34.06.7 0 1-.18V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h5.09a1.5 1.5 0 0 0-.09.5V5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V7.62c.27.24.62.38 1 .38v7H16a1 1 0 0 0 1-1Zm-11-.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z";
   var pathdfilled = "M17.65 2.2c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 0 1-.85-.52l.12-.19a5.9 5.9 0 0 0 .58-2.6 5.9 5.9 0 0 0-.58-2.58l-.07-.11a.5.5 0 1 1 .8-.6Zm-3.96-.16c.19.08.31.26.31.46v6a.5.5 0 0 1-.85.35L11.29 7h-.79a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 0 1 .54-.11Zm2.53 1.93c-.1-.3-.2-.55-.27-.7a.5.5 0 1 0-.9.45 4.59 4.59 0 0 1 .45 1.78 3.94 3.94 0 0 1-.37 1.6l-.08.18a.5.5 0 1 0 .9.44 5.5 5.5 0 0 0 .55-2.22c0-.5-.1-1.02-.28-1.53Zm.13 5.73a1.5 1.5 0 0 1-.53-.74 1.5 1.5 0 0 1-.87-.07 1.5 1.5 0 0 1-2.51.67L10.88 8h-.38v8H16a2 2 0 0 0 2-2V9.8c-.5.29-1.15.27-1.65-.1ZM9.5 16V7.62A1.5 1.5 0 0 1 9 6.5v-2c0-.18.03-.34.09-.5H4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h5.5ZM6 13.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm6.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Z";
   
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