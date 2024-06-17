/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GiftCardArrowRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 4.75A2.75 2.75 0 0 1 4.75 2h10.5A2.75 2.75 0 0 1 18 4.75v5.5a5.5 5.5 0 0 0-1-.65V8H8.7l1.65 1.65a.5.5 0 0 1-.7.7L8 8.71V13h1.2c-.08.32-.15.66-.18 1H4.75A2.75 2.75 0 0 1 2 11.25v-6.5ZM4.75 3C3.78 3 3 3.78 3 4.75V7h1.27A2 2 0 0 1 7 4.27V3H4.75ZM8 3v1.27A2 2 0 0 1 10.73 7H17V4.75C17 3.78 16.22 3 15.25 3H8Zm0 4h1a1 1 0 1 0-1-1v1ZM6 5a1 1 0 0 0 0 2h1V6a1 1 0 0 0-1-1ZM3 8v3.25c0 .97.78 1.75 1.75 1.75H7V8.7l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 8H3Zm16 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z",
    FILLED : "M7 2H4.75A2.75 2.75 0 0 0 2 4.75V7h2.27A2 2 0 0 1 7 4.27V2ZM2 8v3.25A2.75 2.75 0 0 0 4.75 14H7V8.7l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 8H2Zm6 6h1.02A5.5 5.5 0 0 1 18 10.26V8H8.7l1.65 1.65a.5.5 0 0 1-.7.7L8 8.71V14Zm10-7h-7.27A2 2 0 0 0 8 4.27V2h7.25A2.75 2.75 0 0 1 18 4.75V7ZM8 7V6a1 1 0 1 1 1 1H8ZM7 7H6a1 1 0 1 1 1-1v1Zm12 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L15.29 14H12.5a.5.5 0 0 0 0 1h2.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2Z"
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