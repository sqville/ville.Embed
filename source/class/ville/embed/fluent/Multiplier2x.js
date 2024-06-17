/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Multiplier2x",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m6 8.09.01-.03.04-.12c.04-.11.1-.25.2-.39.2-.26.56-.55 1.26-.55.64 0 1.04.2 1.26.5.24.3.36.76.25 1.42-.07.38-.26.61-.57.8-.24.16-.52.28-.85.41l-.43.18c-.5.21-1.05.5-1.47 1a3.27 3.27 0 0 0-.69 2.19.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H6.04c.07-.49.23-.81.43-1.05.26-.32.64-.52 1.1-.72.1-.05.2-.1.32-.14.36-.14.77-.3 1.1-.52.48-.31.89-.76 1.01-1.49.14-.84.02-1.62-.44-2.2C9.1 6.29 8.37 6 7.5 6a2.44 2.44 0 0 0-2.48 1.88v.03h-.01c0 .03-.04.27 0 0A.5.5 0 0 0 6 8.1Zm5.86 2.06a.5.5 0 1 0-.7.7L12.3 12l-1.15 1.15a.5.5 0 0 0 .7.7L13 12.71l1.15 1.14a.5.5 0 1 0 .7-.7L13.71 12l1.14-1.15a.5.5 0 0 0-.7-.7L13 11.29l-1.14-1.14Z",
    FILLED : "M5.7 8.75a.75.75 0 0 0 .8-.7l.02-.1c.02-.08.06-.19.13-.3.1-.16.34-.4.95-.4.58 0 .86.19 1 .38.16.22.27.61.16 1.24a.78.78 0 0 1-.4.6c-.2.13-.42.2-.72.31l-.43.17c-.47.18-1.06.45-1.5 1-.46.55-.7 1.3-.7 2.3a.75.75 0 0 0 .74.75H9.5a.75.75 0 0 0 0-1.5H6.58c.07-.28.17-.47.28-.6.2-.24.48-.4.9-.56l.27-.1c.34-.12.77-.28 1.12-.5.52-.32.95-.82 1.09-1.61a3.1 3.1 0 0 0-.42-2.38c-.5-.69-1.3-1-2.22-1-1.13 0-1.83.5-2.2 1.1A2.53 2.53 0 0 0 5 7.92v.02c-.02.41.29.77.7.8Zm6.58 1.47a.75.75 0 1 0-1.06 1.06l.72.72-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72.72.72a.75.75 0 1 0 1.06-1.06l-.72-.72.72-.72a.75.75 0 0 0-1.06-1.06l-.72.72-.72-.72Z"
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