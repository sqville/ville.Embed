/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.KeyboardShiftUppercase",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.14 2.53a1.5 1.5 0 0 0-2.28 0l-6.62 7.8A1 1 0 0 0 3 11.98h3V15a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.02h3a1 1 0 0 0 .76-1.65l-6.62-7.8Zm-1.52.65a.5.5 0 0 1 .76 0l6.62 7.8h-3.5a.5.5 0 0 0-.5.5V15H7v-3.52a.5.5 0 0 0-.5-.5H3l6.62-7.8ZM6.5 17a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
    FILLED : "M11.14 2.53a1.5 1.5 0 0 0-2.28 0l-6.62 7.8A1 1 0 0 0 3 11.98h3V15a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.02h3a1 1 0 0 0 .76-1.65l-6.62-7.8ZM6.5 17a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z"
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