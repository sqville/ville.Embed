/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SettingsChat",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M1.91 7.38A8.5 8.5 0 0 1 3.7 4.3a.5.5 0 0 1 .54-.13l1.92.68a1 1 0 0 0 1.32-.76l.36-2a.5.5 0 0 1 .4-.4 8.53 8.53 0 0 1 3.55 0c.2.04.35.2.38.4l.37 2a1 1 0 0 0 1.32.76l1.92-.68a.5.5 0 0 1 .54.13 8.5 8.5 0 0 1 1.78 3.08c.06.2 0 .4-.15.54l-1.56 1.32-.07.06c-.33-.11-.68-.2-1.04-.25a2 2 0 0 1 .47-.57l1.29-1.1a7.5 7.5 0 0 0-1.25-2.16l-1.6.58a2 2 0 0 1-2.63-1.53l-.3-1.67a7.55 7.55 0 0 0-2.5 0l-.3 1.67A2 2 0 0 1 5.81 5.8l-1.6-.58a7.5 7.5 0 0 0-1.24 2.16l1.3 1.1a2 2 0 0 1 0 3.04l-1.3 1.1c.3.79.72 1.51 1.25 2.16l1.6-.58a2 2 0 0 1 2.63 1.53l.3 1.67.53.07-.22.7-.05.27a8.48 8.48 0 0 1-.79-.13.5.5 0 0 1-.39-.4l-.36-2a1 1 0 0 0-1.32-.76l-1.92.68a.5.5 0 0 1-.54-.13 8.5 8.5 0 0 1-1.78-3.08.5.5 0 0 1 .15-.54l1.56-1.32a1 1 0 0 0 0-1.52L2.06 7.92a.5.5 0 0 1-.15-.54Zm8.1 11.12a.4.4 0 0 0 .52.48l1.79-.54a4.5 4.5 0 1 0 .13-7.94 4.48 4.48 0 0 0-1.89 6.19l-.24.8-.3.98v.03ZM14.5 15a.5.5 0 0 1 0 1h-2a.5.5 0 1 1 0-1h2Zm2-1h-4a.5.5 0 1 1 0-1h4a.5.5 0 1 1 0 1ZM10 7.5a2.5 2.5 0 0 1 2.43 1.9c-.33.14-.64.3-.93.5a1.5 1.5 0 1 0-1.6 1.6c-.2.29-.36.6-.5.93A2.5 2.5 0 0 1 10 7.5Z",
    FILLED : "M1.91 7.38A8.5 8.5 0 0 1 3.7 4.3a.5.5 0 0 1 .54-.13l1.92.68a1 1 0 0 0 1.32-.76l.36-2a.5.5 0 0 1 .4-.4 8.53 8.53 0 0 1 3.55 0c.2.04.35.2.38.4l.37 2a1 1 0 0 0 1.32.76l1.92-.68a.5.5 0 0 1 .54.13 8.5 8.5 0 0 1 1.78 3.08c.06.2 0 .4-.15.54l-1.56 1.32-.07.06a5.5 5.5 0 0 0-4.35.32 2 2 0 1 0-2.34 2.34 5.48 5.48 0 0 0-.13 4.81l-.43 1.4-.05.27a8.48 8.48 0 0 1-.79-.13.5.5 0 0 1-.39-.4l-.36-2a1 1 0 0 0-1.32-.76l-1.92.68a.5.5 0 0 1-.54-.13 8.5 8.5 0 0 1-1.78-3.08.5.5 0 0 1 .15-.54l1.56-1.32a1 1 0 0 0 0-1.52L2.06 7.92a.5.5 0 0 1-.15-.54Zm8.1 11.12a.4.4 0 0 0 .52.48l1.79-.54A4.5 4.5 0 1 0 14.5 10a4.49 4.49 0 0 0-2.72.92 4.48 4.48 0 0 0-1.21 5.77l-.55 1.78v.03ZM14.5 15a.5.5 0 0 1 0 1h-2a.5.5 0 1 1 0-1h2Zm-2-2h4a.5.5 0 1 1 0 1h-4a.5.5 0 1 1 0-1Z"
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