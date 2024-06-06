/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MoneyHand",
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

   var pathdregular = "M4.5 2C3.67 2 3 2.67 3 3.5v13c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V15a.5.5 0 0 0-.5-.5c-.41 0-.68-.1-.86-.24a1.3 1.3 0 0 1-.42-.62A6.69 6.69 0 0 1 11 11.5a.5.5 0 0 0-.15-.35l-.28-.3-1.22-1.2c-.46-.47-.6-.78-.63-.96-.02-.14.03-.23.13-.33.21-.2.36-.34.54-.39.1-.02.33-.04.76.38l3 3a.5.5 0 0 0 .7-.7L13 9.79V6.71l2.56 2.56c.28.28.44.66.44 1.06v7.17a.5.5 0 0 0 1 0v-7.17c0-.66-.26-1.3-.73-1.77L13 5.3V3.5c0-.83-.67-1.5-1.5-1.5h-7ZM12 5.5v3.3l-1.15-1.15c-.57-.58-1.15-.78-1.7-.65-.11.03-.22.07-.31.12A3 3 0 1 0 10 12.23c.01.58.07 1.21.27 1.75.15.41.38.8.76 1.08h.01c-.6.2-1.05.77-1.05 1.44v.5H6v-.5c0-.83-.67-1.5-1.5-1.5H4V5h.5C5.33 5 6 4.33 6 3.5V3h4v.5c0 .83.67 1.5 1.5 1.5h.5v.5Zm0 11a.5.5 0 0 1-.5.5H11v-.5c0-.28.22-.5.5-.5h.5v.5ZM6 10a2 2 0 0 1 1.87-2c-.12.23-.18.51-.13.84.07.48.37.98.9 1.51l.91.91A2 2 0 0 1 6 10ZM5 3v.5a.5.5 0 0 1-.5.5H4v-.5c0-.28.22-.5.5-.5H5ZM4 16h.5c.28 0 .5.22.5.5v.5h-.5a.5.5 0 0 1-.5-.5V16Zm8-12h-.5a.5.5 0 0 1-.5-.5V3h.5c.28 0 .5.22.5.5V4Z";
   var pathdfilled = "M3 3.5C3 2.67 3.67 2 4.5 2h7c.83 0 1.5.67 1.5 1.5v1.8l3.27 3.26c.47.47.73 1.1.73 1.77v7.17a.5.5 0 0 1-1 0v-7.17c0-.4-.16-.78-.44-1.06L13 6.7v3.08l.85.86a.5.5 0 0 1-.7.7l-3-3c-.43-.42-.66-.4-.76-.38-.18.05-.33.19-.54.4-.1.09-.15.18-.13.32.03.18.17.49.63.96.98.97 1.1 1.1 1.22 1.2l.28.3c.1.09.15.22.15.35 0 .77 0 1.55.22 2.14.1.28.24.49.42.62.18.14.45.24.86.24.28 0 .5.22.5.5v1.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 16.5v-13Zm5 4a2.5 2.5 0 1 0 1.9 4.12l-.04-.05-1.21-1.22a2.85 2.85 0 0 1-.91-1.51c-.08-.52.13-.93.41-1.2l.04-.04.1-.08L8 7.5Zm2 9v.5h1v-.5c0-.28.22-.5.5-.5h.5v-.54c-.37-.06-.68-.2-.95-.4-.6.2-1.05.77-1.05 1.44ZM4 5h.5C5.33 5 6 4.33 6 3.5V3H5v.5a.5.5 0 0 1-.5.5H4v1Zm6-1.5c0 .83.67 1.5 1.5 1.5h.5V4h-.5a.5.5 0 0 1-.5-.5V3h-1v.5Zm-4 13c0-.83-.67-1.5-1.5-1.5H4v1h.5c.28 0 .5.22.5.5v.5h1v-.5Z";
   
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