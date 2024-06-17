/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GiftCard",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25v-6.5ZM3 10v3.25c0 .97.78 1.75 1.75 1.75H7v-4.3l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 10H3Zm1.27-1A2 2 0 0 1 7 6.27V5H4.75C3.78 5 3 5.78 3 6.75V9h1.27ZM6 9h1V8a1 1 0 1 0-1 1Zm2-1v1h1a1 1 0 1 0-1-1Zm2.73 1H17V6.75C17 5.78 16.22 5 15.25 5H8v1.27A2 2 0 0 1 10.73 9Zm-2.02 1 1.64 1.65a.5.5 0 0 1-.7.7L8 10.71V15h7.25c.97 0 1.75-.78 1.75-1.75V10H8.7Z",
    FILLED : "M7 4H4.75A2.75 2.75 0 0 0 2 6.75V9h2.27A2 2 0 0 1 7 6.27V4Zm1 4v1h1a1 1 0 1 0-1-1Zm2.73 1A2 2 0 0 0 8 6.27V4h7.25A2.75 2.75 0 0 1 18 6.75V9h-7.27Zm-2.02 1 1.64 1.65a.5.5 0 0 1-.7.7L8 10.71V16h7.25A2.75 2.75 0 0 0 18 13.25V10H8.7ZM7 16v-5.3l-1.65 1.65a.5.5 0 0 1-.7-.7L6.29 10H2v3.25A2.75 2.75 0 0 0 4.75 16H7Zm0-8a1 1 0 1 0-1 1h1V8Z"
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