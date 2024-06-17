/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TetrisApp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.25 2C6.56 2 6 2.56 6 3.25v2.5c0 .14-.11.25-.25.25h-2.5C2.56 6 2 6.56 2 7.25v2.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.14.11-.25.25-.25h2.5C14.44 7 15 6.44 15 5.75v-2.5C15 2.56 14.44 2 13.75 2h-6.5Zm6.5 4H11V3h2.75c.14 0 .25.11.25.25v2.5c0 .14-.11.25-.25.25Zm-3.72 1c-.02.08-.03.16-.03.25v2.5c0 .14-.11.25-.25.25H7V7h3.03ZM6 7v3H3.25A.25.25 0 0 1 3 9.75v-2.5c0-.14.11-.25.25-.25H6Zm.97-1C7 5.92 7 5.84 7 5.75v-2.5c0-.14.11-.25.25-.25H10v3H6.97Zm7.28 3c-.69 0-1.25.56-1.25 1.25v2.5c0 .14-.11.25-.25.25h-6.5C5.56 13 5 13.56 5 14.25v2.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5C18 9.56 17.44 9 16.75 9h-2.5Zm-.28 4c.02-.08.03-.16.03-.25v-2.5c0-.14.11-.25.25-.25h2.5c.14 0 .25.11.25.25V13h-3.03Zm.03 1h3v2.75c0 .14-.11.25-.25.25H14v-3Zm-1 0v3h-3v-3h3Zm-4 0v3H6.25a.25.25 0 0 1-.25-.25v-2.5c0-.14.11-.25.25-.25H9Z",
    FILLED : "M7 2.75c0-.41.34-.75.75-.75H11v4H7V2.75ZM2.75 7a.75.75 0 0 0-.75.75v2.5c0 .41.34.75.75.75H6V7H2.75ZM11 7H7v4h3.25c.41 0 .75-.34.75-.75V7Zm4.25-5H12v4h3.25c.41 0 .75-.34.75-.75v-2.5a.75.75 0 0 0-.75-.75ZM4 14.75c0-.41.34-.75.75-.75H8v4H4.75a.75.75 0 0 1-.75-.75v-2.5ZM13 18v-4H9v4h4Zm5-4v3.25c0 .41-.34.75-.75.75H14v-4h4Zm-3.25-5a.75.75 0 0 0-.75.75V13h4V9.75a.75.75 0 0 0-.75-.75h-2.5Z"
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