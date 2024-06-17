/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShiftsDay",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.4 7.54c.28-.28.73-.54 1.37-.54.88 0 1.48.56 1.7 1.23.21.66.08 1.46-.5 2-.23.21-.49.39-.72.54l-.02.02c-.23.15-.44.29-.62.44a1.6 1.6 0 0 0-.54.77H9a.5.5 0 1 1 0 1H6.5a.5.5 0 0 1-.5-.5c0-.97.44-1.59.96-2.03.23-.2.48-.36.7-.5l.04-.03c.24-.16.43-.3.58-.44a.93.93 0 0 0 .24-.96.75.75 0 0 0-.75-.54.86.86 0 0 0-.65.24.82.82 0 0 0-.15.22.5.5 0 0 1-.94-.34l.03-.07.07-.14c.05-.1.15-.23.28-.37ZM11.5 7c.28 0 .5.22.5.5v2h1v-2a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-2h-1.5a.5.5 0 0 1-.5-.5V7.5c0-.28.22-.5.5-.5Zm-6-4A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM4 5.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 0 1 4 14.5v-9Z",
    FILLED : "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9Zm3.4 2.04a1.82 1.82 0 0 0-.34.5l-.03.08a.5.5 0 0 0 .94.34l.02-.05.13-.17c.12-.11.3-.24.65-.24.4 0 .64.23.75.54.1.33.03.72-.24.96-.15.15-.34.28-.58.44l-.04.02c-.22.15-.47.31-.7.51A2.52 2.52 0 0 0 6 12.5a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 0-1H7.07c.1-.32.29-.56.54-.77.18-.15.39-.3.62-.44l.02-.02c.23-.15.5-.33.72-.54.58-.54.71-1.34.5-2A1.74 1.74 0 0 0 7.77 7c-.64 0-1.09.26-1.36.54ZM11.5 7a.5.5 0 0 0-.5.5V10a.5.5 0 0 0 .5.5H13v2a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v2h-1v-2a.5.5 0 0 0-.5-.5Z"
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