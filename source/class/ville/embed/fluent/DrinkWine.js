/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DrinkWine",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.45 8.08a.5.5 0 0 0-.98-.17 2.5 2.5 0 0 1-2.05 2.05.5.5 0 0 0 .16 1 3.5 3.5 0 0 0 2.87-2.88ZM5.5 2a.5.5 0 0 0-.5.5V8a5 5 0 0 0 4.5 5v4h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-4.02A5 5 0 0 0 15 8V2.5a.5.5 0 0 0-.5-.5h-9ZM6 5.5V3h8v2.5H6Zm0 1h8V8a4 4 0 0 1-8 0V6.5Z",
    FILLED : "M5.5 2a.5.5 0 0 0-.5.5V8a5 5 0 0 0 4.5 5v4h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-4.02A5 5 0 0 0 15 8V2.5a.5.5 0 0 0-.5-.5h-9ZM6 5.5V3h8v2.5H6Zm7.45 2.58a3.5 3.5 0 0 1-2.87 2.87.5.5 0 1 1-.16-.99 2.5 2.5 0 0 0 2.05-2.05.5.5 0 0 1 .98.17Z"
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