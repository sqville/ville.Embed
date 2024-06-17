/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextHeader3Lines",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.5 2c.28 0 .5.22.5.5V5h3V2.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0V6H3v2.5a.5.5 0 1 1-1 0v-6c0-.28.23-.5.5-.5Zm0 14a.5.5 0 1 0 0 1h15a.5.5 0 0 0 0-1h-15ZM2 12.5c0-.28.22-.5.5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm8.73-9.44c-.56-.17-1.4.01-1.86.52a.5.5 0 0 1-.74-.68 2.95 2.95 0 0 1 2.9-.79c.6.19 1.09.62 1.32 1.16.24.56.2 1.2-.19 1.77-.13.19-.28.34-.43.46.16.12.3.27.43.46.4.57.43 1.22.2 1.77-.24.54-.72.97-1.34 1.16-.9.29-2.15.01-2.89-.79a.5.5 0 0 1 .74-.68c.47.51 1.3.7 1.86.52.35-.1.6-.35.7-.6a.8.8 0 0 0-.09-.81c-.31-.45-.82-.52-1.38-.53h-.21a.5.5 0 1 1 0-1h.21c.56 0 1.07-.07 1.38-.53a.8.8 0 0 0 .1-.8c-.12-.26-.36-.5-.71-.6Z",
    FILLED : "M9.3 3.77c.52-.56 1.01-.59 1.42-.45.5.16.65.67.42 1.03a.8.8 0 0 1-.5.34c-.17.05-.35.06-.5.06h-.09a.75.75 0 0 0 0 1.5h.1c.14 0 .32.01.5.06a.8.8 0 0 1 .49.34c.23.36.08.87-.42 1.03-.4.14-.9.1-1.42-.45a.75.75 0 0 0-1.1 1.03c.93.99 2.04 1.16 3 .85 1.28-.43 2.04-1.98 1.2-3.28a2.25 2.25 0 0 0-.26-.33c.09-.1.18-.2.26-.33.84-1.3.08-2.85-1.2-3.28a2.77 2.77 0 0 0-3 .85.75.75 0 1 0 1.1 1.03ZM2 16.25c0-.42.34-.75.75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm.75-4.75a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75Zm.75-8.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-2h2v2a.75.75 0 0 0 1.5 0v-5.5a.75.75 0 1 0-1.5 0v2h-2v-2Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
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
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});