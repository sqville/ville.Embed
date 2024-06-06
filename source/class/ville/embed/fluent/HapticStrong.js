/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HapticStrong",
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

   var pathdregular = "M8.62 2.99A.5.5 0 0 0 8.38 2h-.02l-.03.02a7.93 7.93 0 0 0-.61.18c-.4.13-.92.33-1.44.6-.53.25-1.08.6-1.5 1.02-.44.43-.78 1-.78 1.67 0 .69.35 1.22.78 1.63.41.4.95.73 1.43 1.03l.03.01c.5.32.96.6 1.29.93.32.3.47.59.47.9 0 .3-.14.56-.46.84-.3.27-.7.5-1.18.78l-.11.07c-.5.28-1.05.61-1.48 1.04A2.44 2.44 0 0 0 4 14.5c0 .68.34 1.24.77 1.67.43.42.98.77 1.5 1.03a11.19 11.19 0 0 0 2.06.77l.03.01h.01a.5.5 0 0 0 .25-.96L8.57 17a7.66 7.66 0 0 1-.55-.17c-.36-.12-.83-.3-1.3-.54a4.86 4.86 0 0 1-1.25-.84c-.32-.32-.48-.64-.48-.96 0-.42.17-.75.48-1.06.32-.32.76-.6 1.27-.89l.13-.07c.45-.26.94-.55 1.33-.89.43-.39.79-.9.79-1.59 0-.69-.35-1.22-.78-1.63A8.9 8.9 0 0 0 6.8 7.34l-.03-.01c-.5-.32-.96-.6-1.29-.93-.32-.3-.47-.59-.47-.9 0-.32.16-.64.48-.96.32-.32.77-.6 1.24-.84A10.2 10.2 0 0 1 8.58 3l.03-.01h.01Zm6 0a.5.5 0 0 0-.24-.98h-.02l-.03.02a8.13 8.13 0 0 0-.61.18c-.4.13-.92.33-1.44.6-.53.25-1.08.6-1.5 1.02-.44.43-.78 1-.78 1.67 0 .69.35 1.22.78 1.63.41.4.95.73 1.43 1.03l.02.01c.52.32.97.6 1.3.93.32.3.47.59.47.9 0 .3-.14.56-.46.84-.3.27-.7.5-1.18.78l-.11.07c-.5.28-1.05.61-1.48 1.04A2.44 2.44 0 0 0 10 14.5c0 .68.34 1.24.77 1.67.43.42.98.77 1.5 1.03a11.19 11.19 0 0 0 2.06.77l.03.01h.01a.5.5 0 0 0 .25-.96l-.04-.01a7.87 7.87 0 0 1-.55-.17c-.36-.12-.83-.3-1.3-.54a4.86 4.86 0 0 1-1.25-.84c-.32-.32-.48-.64-.48-.96 0-.42.17-.75.48-1.06.32-.32.76-.6 1.27-.89l.13-.07c.45-.26.94-.55 1.33-.89.43-.39.79-.9.79-1.59 0-.69-.35-1.22-.78-1.63-.41-.4-.95-.73-1.43-1.03l-.02-.01c-.52-.32-.97-.6-1.3-.93-.32-.3-.47-.59-.47-.9 0-.32.16-.64.48-.96.32-.32.77-.6 1.24-.84a10.2 10.2 0 0 1 1.86-.7l.03-.01h.01Z";
   var pathdfilled = "M8.93 3.23a.75.75 0 0 0-.36-1.46h-.02l-.04.02a8.25 8.25 0 0 0-.62.19c-.4.13-.93.33-1.48.6-.53.27-1.11.62-1.57 1.08A2.61 2.61 0 0 0 4 5.5c0 .78.4 1.37.86 1.8.43.42.98.77 1.46 1.06l.03.03c.52.32.95.6 1.26.89.3.28.39.5.39.72 0 .2-.09.4-.37.65-.29.26-.67.48-1.16.76l-.1.06c-.49.28-1.07.63-1.53 1.09-.47.48-.84 1.1-.84 1.94 0 .77.39 1.39.84 1.84.46.46 1.04.81 1.57 1.08a11.44 11.44 0 0 0 2.1.8h.05a.75.75 0 0 0 .37-1.45H8.9a6.57 6.57 0 0 1-.54-.17c-.35-.12-.82-.3-1.27-.52-.47-.23-.89-.5-1.18-.8-.3-.3-.41-.55-.41-.78 0-.34.13-.61.4-.88a6 6 0 0 1 1.23-.85l.13-.08c.44-.26.96-.55 1.36-.91.47-.42.88-.99.88-1.78 0-.78-.4-1.37-.86-1.8-.43-.42-.98-.77-1.46-1.06l-.03-.03c-.52-.32-.95-.6-1.26-.89-.3-.28-.39-.5-.39-.72 0-.23.11-.49.4-.78.3-.3.72-.57 1.19-.8a9.95 9.95 0 0 1 1.8-.68l.04-.01Zm6.5 0a.75.75 0 0 0-.36-1.46h-.02l-.04.02a8.22 8.22 0 0 0-.62.19c-.4.13-.93.33-1.48.6-.53.27-1.11.62-1.57 1.08a2.61 2.61 0 0 0-.84 1.84c0 .78.4 1.37.86 1.8.43.42.98.77 1.46 1.06l.03.03c.52.32.95.6 1.26.89.3.28.39.5.39.72 0 .2-.09.4-.37.65-.29.26-.67.48-1.16.76l-.1.06c-.49.28-1.07.63-1.53 1.09-.47.48-.84 1.1-.84 1.94 0 .77.39 1.39.84 1.84.46.46 1.04.81 1.57 1.08a11.44 11.44 0 0 0 2.1.8h.05a.75.75 0 0 0 .37-1.45h-.03a6.45 6.45 0 0 1-.54-.17c-.35-.12-.82-.3-1.27-.52-.47-.23-.89-.5-1.18-.8-.3-.3-.41-.55-.41-.78 0-.34.13-.61.4-.88a6 6 0 0 1 1.23-.85l.13-.08c.44-.26.96-.55 1.36-.91.47-.42.88-.99.88-1.78 0-.78-.4-1.37-.86-1.8a9.06 9.06 0 0 0-1.46-1.06l-.03-.03c-.52-.32-.95-.6-1.26-.89-.3-.28-.39-.5-.39-.72 0-.23.11-.49.4-.78.3-.3.72-.57 1.19-.8a9.95 9.95 0 0 1 1.8-.68l.04-.01Z";
   
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