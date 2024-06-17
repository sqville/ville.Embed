/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextUnderline",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3.5a.5.5 0 0 0-1 0v6.45A5.02 5.02 0 0 0 10 15c2.77 0 5-2.26 5-5.05V3.5a.5.5 0 0 0-1 0v6.45C14 12.2 12.2 14 10 14s-4-1.8-4-4.05V3.5Zm-1 13c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z",
    FILLED : "M6.5 3.75a.75.75 0 0 0-1.5 0V9c0 1.37.34 2.74 1.16 3.78A4.67 4.67 0 0 0 10 14.5c1.7 0 3-.65 3.84-1.72A6.09 6.09 0 0 0 15 9V3.75a.75.75 0 0 0-1.5 0V9a4.6 4.6 0 0 1-.84 2.85C12.13 12.53 11.3 13 10 13c-1.3 0-2.13-.47-2.66-1.15A4.6 4.6 0 0 1 6.5 9V3.75ZM5.75 15.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"
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