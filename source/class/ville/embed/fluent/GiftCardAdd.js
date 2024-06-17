/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GiftCardAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 4.75A2.75 2.75 0 0 1 4.75 2h10.5A2.75 2.75 0 0 1 18 4.75v5.5a5.5 5.5 0 0 0-1-.65V8H8.7l1.65 1.65a.5.5 0 0 1-.7.7L8 8.71V13h1.2c-.08.32-.15.66-.18 1H4.75A2.75 2.75 0 0 1 2 11.25v-6.5ZM4.75 3C3.78 3 3 3.78 3 4.75V7h1.27A2 2 0 0 1 7 4.27V3H4.75ZM8 3v1.27A2 2 0 0 1 10.73 7H17V4.75C17 3.78 16.22 3 15.25 3H8Zm0 4h1a1 1 0 1 0-1-1v1ZM6 5a1 1 0 0 0 0 2h1V6a1 1 0 0 0-1-1Zm-3 6.25c0 .97.78 1.75 1.75 1.75H7V8.7l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 8H3v3.25Zm16 3.25a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    FILLED : "M7 2H4.75A2.75 2.75 0 0 0 2 4.75V7h2.27A2 2 0 0 1 7 4.27V2ZM2 8v3.25A2.75 2.75 0 0 0 4.75 14H7V8.7l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 8H2Zm7.02 6H8V8.7l1.65 1.65a.5.5 0 0 0 .7-.7L8.71 8H18v2.26A5.5 5.5 0 0 0 9.02 14ZM18 7h-7.27A2 2 0 0 0 8 4.27V2h7.25A2.75 2.75 0 0 1 18 4.75V7ZM8 6v1h1a1 1 0 1 0-1-1ZM7 7H6a1 1 0 1 1 1-1v1Zm12 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
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