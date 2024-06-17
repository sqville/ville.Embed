/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.KeyboardShift",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.86 2.53c.6-.7 1.68-.7 2.28 0l6.62 7.8a1 1 0 0 1-.76 1.65h-3V17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-5.02H3a1 1 0 0 1-.76-1.65l6.62-7.8Zm1.52.65a.5.5 0 0 0-.76 0L3 10.98h3.5c.28 0 .5.23.5.5V17h6v-5.52c0-.27.22-.5.5-.5H17l-6.62-7.8Z",
    FILLED : "M11.14 2.53a1.5 1.5 0 0 0-2.28 0l-6.62 7.8A1 1 0 0 0 3 11.98h3V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5.02h3a1 1 0 0 0 .76-1.65l-6.62-7.8Z"
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