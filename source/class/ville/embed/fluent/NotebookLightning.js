/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NotebookLightning",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 2a2 2 0 0 0-2 2v5.6c.32-.16.65-.3 1-.4V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2.6c-.18.36-.4.7-.66 1H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2ZM6 6v1h6V6H6Zm10 0h.5c.28 0 .5.22.5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5c.28 0 .5.22.5.5V15a.5.5 0 0 1-.5.5H16V13Zm-6 1.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-5.63.84c.16 0 .28.15.24.3l-.24 1.01c-.06.27.25.46.44.27l2.56-2.53c.27-.26.1-.72-.27-.72h-.23a.25.25 0 0 1-.24-.33l.3-.97C7 12.19 6.88 12 6.7 12H4.86c-.1 0-.2.07-.24.17l-1.1 2.78c-.07.19.06.39.24.39h.6Z",
    FILLED : "M3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9.74A5.5 5.5 0 0 0 3 9.6V4Zm2.5 1a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7Zm11 1H16v2.5h.5A.5.5 0 0 0 17 8V6.5a.5.5 0 0 0-.5-.5ZM16 9.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm.5 3.5H16v2.5h.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5Zm-11 6a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-1.13-3.66h-.6c-.2 0-.32-.2-.25-.39l1.1-2.78c.04-.1.13-.17.24-.17h1.83c.18 0 .3.19.25.37l-.31.97c-.05.17.07.33.24.33h.23c.36 0 .54.46.27.72l-2.56 2.53c-.2.2-.5 0-.44-.27l.24-1a.25.25 0 0 0-.24-.31Z"
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