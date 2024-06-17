/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SubtractParentheses",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.8 4.4a.5.5 0 0 0-.6-.8 7.99 7.99 0 0 0 0 12.8.5.5 0 0 0 .6-.8 6.99 6.99 0 0 1 0-11.2Zm9-.8a.5.5 0 0 0-.6.8 6.99 6.99 0 0 1 0 11.2.5.5 0 1 0 .6.8 7.99 7.99 0 0 0 0-12.8ZM6.5 9.5a.5.5 0 1 0 0 1h7a.5.5 0 1 0 0-1h-7Z",
    FILLED : "M5.77 5.07a.75.75 0 1 0-.98-1.14 7.98 7.98 0 0 0 0 12.14.75.75 0 1 0 .98-1.14 6.48 6.48 0 0 1 0-9.86Zm9.44-1.14a.75.75 0 1 0-.98 1.14 6.48 6.48 0 0 1 0 9.86.75.75 0 1 0 .98 1.14 7.98 7.98 0 0 0 0-12.14ZM6.75 9.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z"
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