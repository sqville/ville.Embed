/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Hd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 7c.28 0 .5.22.5.5V10h2.5V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11H6v1.5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM11 7a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h1.42A2.58 2.58 0 0 0 15 10.42v-.84A2.58 2.58 0 0 0 12.42 7H11Zm1.42 5h-.92V8h.92c.87 0 1.58.7 1.58 1.58v.84c0 .87-.7 1.58-1.58 1.58ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Z",
    FILLED : "M12.42 12h-.92V8h.92c.87 0 1.58.7 1.58 1.58v.84c0 .87-.7 1.58-1.58 1.58ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm-.5 4c.28 0 .5.22.5.5V10h2.5V7.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V11H6v1.5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM11 7h1.42A2.58 2.58 0 0 1 15 9.58v.84A2.58 2.58 0 0 1 12.42 13H11a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5Z"
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