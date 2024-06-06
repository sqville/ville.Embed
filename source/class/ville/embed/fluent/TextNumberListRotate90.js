/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextNumberListRotate90",
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

   var pathdregular = "M18.99 4.61a.5.5 0 0 1-.49.39h-4a.5.5 0 0 1 0-1h2.58c-.2-.22-.38-.48-.53-.78a.5.5 0 1 1 .9-.44 2.96 2.96 0 0 0 1.15 1.2l.12.07c.2.1.32.34.27.56Zm-7.34-1.96c.2-.2.5-.2.7 0h.01v.01a1.3 1.3 0 0 1 .11.12A2.44 2.44 0 0 1 13 4.32c0 .38-.1.79-.35 1.11A1.4 1.4 0 0 1 11.5 6a1.5 1.5 0 0 1-1.2-.57 4.2 4.2 0 0 1-.56-.96c-.16-.3-.3-.54-.47-.7A.93.93 0 0 0 9 3.58V5.5a.5.5 0 1 1-1 0V3c0-.28.22-.5.5-.5.62 0 1.08.2 1.44.52a3.32 3.32 0 0 1 .77 1.15c.13.27.23.47.35.62a.5.5 0 0 0 .44.21c.18 0 .28-.07.35-.16.09-.12.15-.3.15-.53a1.5 1.5 0 0 0-.35-.95v-.01a.5.5 0 0 1 0-.7ZM4.5 3.75c.28 0 .5.22.5.5 0 .34.1.53.18.63.09.1.2.13.3.13.2-.01.52-.19.52-.76 0-.41-.1-.63-.17-.72a.41.41 0 0 0-.07-.1l.02.02h-.01l-.01-.01h-.01a.5.5 0 0 1 .47-.89h.01l.02.02a.83.83 0 0 1 .15.1c.08.07.17.17.27.3.18.28.33.7.33 1.28 0 1.03-.67 1.73-1.48 1.76-.37.01-.74-.12-1.02-.4-.28.28-.65.41-1.02.4C2.68 5.98 2 5.28 2 4.25c0-.59.15-1 .33-1.28a1.4 1.4 0 0 1 .42-.4l.01-.01h.01a.5.5 0 0 1 .48.87.41.41 0 0 0-.08.1c-.07.1-.17.3-.17.72 0 .57.33.75.52.76.1 0 .21-.04.3-.13.08-.1.18-.29.18-.63 0-.28.22-.5.5-.5ZM5.5 8c.28 0 .5.22.5.5v8a.5.5 0 1 1-1 0v-8c0-.28.22-.5.5-.5Zm5 0c.28 0 .5.22.5.5v8a.5.5 0 1 1-1 0v-8c0-.28.22-.5.5-.5Zm5 0c.28 0 .5.22.5.5v8a.5.5 0 1 1-1 0v-8c0-.28.22-.5.5-.5Z";
   var pathdfilled = "M18.99 4.61a.5.5 0 0 1-.49.39h-4a.5.5 0 0 1 0-1h2.58c-.2-.22-.38-.48-.53-.78a.5.5 0 1 1 .9-.44 2.96 2.96 0 0 0 1.15 1.2l.12.07c.2.1.32.34.27.56Zm-7.34-1.96c.2-.2.5-.2.7 0h.01v.01a1.3 1.3 0 0 1 .11.12A2.44 2.44 0 0 1 13 4.32c0 .38-.1.79-.35 1.11A1.4 1.4 0 0 1 11.5 6a1.5 1.5 0 0 1-1.2-.57 4.2 4.2 0 0 1-.56-.96c-.16-.3-.3-.54-.47-.7A.93.93 0 0 0 9 3.58V5.5a.5.5 0 1 1-1 0V3c0-.28.22-.5.5-.5.62 0 1.08.2 1.44.52a3.32 3.32 0 0 1 .77 1.15c.13.27.23.47.35.62a.5.5 0 0 0 .44.21c.18 0 .28-.07.35-.16.09-.12.15-.3.15-.53a1.5 1.5 0 0 0-.35-.95v-.01a.5.5 0 0 1 0-.7ZM5 4.25a.5.5 0 0 0-1 0c0 .34-.1.53-.18.63-.09.1-.2.13-.3.13C3.32 5 3 4.82 3 4.25c0-.41.1-.63.17-.72a.41.41 0 0 1 .07-.1.5.5 0 0 0-.46-.88h-.01l-.02.02a.83.83 0 0 0-.15.1 1.4 1.4 0 0 0-.27.3c-.18.28-.33.7-.33 1.28 0 1.03.67 1.73 1.48 1.76.37.01.74-.12 1.02-.4.28.28.65.41 1.02.4C6.32 5.98 7 5.28 7 4.25c0-.59-.15-1-.33-1.28a1.4 1.4 0 0 0-.42-.4l-.01-.01h-.01a.5.5 0 0 0-.48.87l.08.1c.07.1.17.3.17.72 0 .57-.33.75-.52.76a.37.37 0 0 1-.3-.13C5.1 4.78 5 4.59 5 4.25Zm.75-.82.02.01h-.02ZM5.25 8c.41 0 .75.34.75.75v7.5a.75.75 0 0 1-1.5 0v-7.5c0-.41.34-.75.75-.75Zm5 0c.41 0 .75.34.75.75v7.5a.75.75 0 0 1-1.5 0v-7.5c0-.41.34-.75.75-.75Zm5 0c.41 0 .75.34.75.75v7.5a.75.75 0 0 1-1.5 0v-7.5c0-.41.34-.75.75-.75Z";
   
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