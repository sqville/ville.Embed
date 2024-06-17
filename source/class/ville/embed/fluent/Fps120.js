/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Fps120",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 10a.5.5 0 0 1-.5-.5V3.93c-.33.34-.75.7-1.24 1a.5.5 0 1 1-.52-.86 5.58 5.58 0 0 0 1.83-1.82.5.5 0 0 1 .93.26V9.5a.5.5 0 0 1-.5.5ZM12 4.5a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm4 0a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0v-3Zm-13 8c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1H4v2h1.5a.5.5 0 0 1 0 1H4v1.5a.5.5 0 0 1-1 0v-5Zm5 0c0-.28.22-.5.5-.5H10a2 2 0 1 1 0 4H9v1.5a.5.5 0 0 1-1 0v-5ZM9 15h1a1 1 0 1 0 0-2H9v2Zm5.75-3a1.75 1.75 0 1 0 0 3.5h.5a.75.75 0 0 1 0 1.5h-.76a.49.49 0 0 1-.49-.49v-.01a.5.5 0 0 0-1 0v.01c0 .82.67 1.49 1.49 1.49h.76a1.75 1.75 0 1 0 0-3.5h-.5a.75.75 0 0 1 0-1.5h.76c.27 0 .49.22.49.49v.01a.5.5 0 0 0 1 0v-.01c0-.82-.67-1.49-1.49-1.49h-.76ZM6.99 4.08a.5.5 0 0 1-.57.41C5.94 4.41 6 3.92 6 3.92v-.04a1.66 1.66 0 0 1 .09-.28c.06-.18.17-.41.34-.65A2.44 2.44 0 0 1 8.5 2c.86 0 1.59.3 2.05.88.46.58.59 1.36.44 2.2a2.12 2.12 0 0 1-1 1.49c-.34.21-.75.38-1.1.52l-.33.14c-.46.2-.84.4-1.1.72-.2.24-.36.56-.43 1.05h3.47a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5c0-.97.25-1.67.69-2.19.42-.5.98-.79 1.47-1l.43-.18c.33-.13.6-.25.85-.4.3-.2.5-.43.57-.81.11-.66-.01-1.13-.24-1.42-.23-.3-.63-.5-1.27-.5-.7 0-1.06.29-1.26.55a1.5 1.5 0 0 0-.25.53Z",
    FILLED : "M5 2.75a.75.75 0 0 0-1.4-.39 1.71 1.71 0 0 1-.1.16l-.33.41c-.3.33-.72.68-1.2.87a.75.75 0 0 0 .56 1.4c.36-.15.69-.34.97-.55v4.6a.75.75 0 0 0 1.5 0v-6.5Zm8 1.75a2.5 2.5 0 1 1 5 0v3a2.5 2.5 0 0 1-5 0v-3Zm3.5 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3ZM3 12.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1H4v2h1.5a.5.5 0 0 1 0 1H4v1.5a.5.5 0 0 1-1 0v-5Zm5 0c0-.28.22-.5.5-.5H10a2 2 0 0 1 0 4H9v1.5a.5.5 0 0 1-1 0v-5ZM9 15h1a1 1 0 1 0 0-2H9v2Zm5.75-3a1.75 1.75 0 0 0 0 3.5h.5a.75.75 0 0 1 0 1.5h-.76a.49.49 0 0 1-.49-.49v-.01a.5.5 0 0 0-1 0v.01c0 .82.67 1.49 1.49 1.49h.76a1.75 1.75 0 1 0 0-3.5h-.5a.75.75 0 0 1 0-1.5h.76c.27 0 .49.22.49.49v.01a.5.5 0 1 0 1 0v-.01c0-.82-.67-1.49-1.49-1.49h-.76ZM7.99 4.37v.01a.75.75 0 0 1-1.48-.25c-.07.41 0 0 0 0a1.71 1.71 0 0 1 .1-.37A2.7 2.7 0 0 1 9.25 2c.96 0 1.73.38 2.22 1 .48.61.65 1.4.52 2.13-.14.81-.6 1.3-1.15 1.63a6.7 6.7 0 0 1-1.48.59c-.45.16-.76.33-.98.57-.11.13-.22.3-.3.58h3.17a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75c0-1.01.27-1.77.76-2.33.48-.53 1.09-.8 1.59-.98l.45-.16c.32-.1.56-.2.79-.32.24-.14.37-.3.42-.59a1.2 1.2 0 0 0-.22-.94c-.18-.23-.5-.43-1.04-.43-.62 0-.9.25-1.06.45a1.25 1.25 0 0 0-.2.43Z"
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