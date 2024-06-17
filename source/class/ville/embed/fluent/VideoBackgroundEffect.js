/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoBackgroundEffect",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.2 4 2 8.2V6.8L4.8 4h1.4ZM3.5 16H5v-1.7l-1.7 1.69.2.01Zm11.7 0H15v-1.2l3-3v1.4L15.2 16ZM18 9.7l-3.1 3.1a2.5 2.5 0 0 0-.5-.92L18 8.3v1.42ZM12.5 12a1.5 1.5 0 0 1 1.5 1.5V16h-1v-2.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V16H6v-2.5c0-.08 0-.15.02-.22A1.5 1.5 0 0 1 7.5 12h5Zm-2.78-1.02a2.49 2.49 0 0 1-2.21-2.7 2.5 2.5 0 1 1 2.21 2.7ZM10 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-7.88 5.09 4.84-4.85a3.48 3.48 0 0 1-.39-1.02L2 13.79v.71c0 .2.04.4.12.59Zm9.62-9.63a3.48 3.48 0 0 0-1.02-.39L11.79 4h1.42l-1.47 1.46Zm1.58 1.93a3.49 3.49 0 0 0-.48-.94L15.29 4h1.21l.2.01-3.38 3.38ZM12.45 11c.44-.43.76-.98.93-1.59l4.5-4.5c.08.18.12.38.12.59v.7l-4.87 4.88a2.5 2.5 0 0 0-.63-.08h-.05ZM2 11.7 9.7 4H8.3L2 10.3v1.4Z",
    FILLED : "M6.2 4 2 8.2V6.8L4.8 4h1.4Zm7 0-1.46 1.46a3.48 3.48 0 0 0-1.02-.39L11.79 4h1.42Zm-1.08 3.17a2.51 2.51 0 0 0-2.34-1.16 2.5 2.5 0 1 0 2.34 1.16Zm.72-.72c.2.29.37.6.48.94L16.69 4 16.5 4h-1.2l-2.46 2.45ZM7.5 12c-.08 0-.15 0-.22.02A1.5 1.5 0 0 0 6 13.5V16h8v-2.5a1.5 1.5 0 0 0-1.5-1.5h-5Zm5-1c.22 0 .43.03.63.08L18 6.2V5.5c0-.2-.04-.4-.12-.59l-4.5 4.5a3.5 3.5 0 0 1-.93 1.59h.05Zm1.9.88c.23.27.4.58.5.93L18 9.7V8.29l-3.6 3.6ZM15 16v-1.2l3-3v1.4L15.2 16H15Zm-10-.3v-1.4l-1.7 1.69.2.01h1.2l.3-.3Zm1.57-6.48c.08.36.21.7.4 1.02L2.11 15.1A1.5 1.5 0 0 1 2 14.5v-.7l4.57-4.58ZM9.71 4 2 11.7v-1.4L8.3 4h1.4Z"
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