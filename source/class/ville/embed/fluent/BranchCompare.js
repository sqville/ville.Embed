/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BranchCompare",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.15 6.85a.5.5 0 0 0 .7-.7L10.71 5h1.79A2.5 2.5 0 0 1 15 7.5V12a3 3 0 1 0 1 .17V7.5A3.5 3.5 0 0 0 12.5 4h-1.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2ZM17 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a3 3 0 0 1-3 3v4.5A2.5 2.5 0 0 0 7.5 15h1.8l-1.15-1.15a.5.5 0 0 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L9.29 16H7.5A3.5 3.5 0 0 1 4 12.5V7.83A3 3 0 1 1 8 5ZM7 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z",
    FILLED : "M11.15 6.85a.5.5 0 0 0 .7-.7L10.71 5h1.79A2.5 2.5 0 0 1 15 7.5V12a3 3 0 1 0 1 .17V7.5A3.5 3.5 0 0 0 12.5 4h-1.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2ZM5 8a3 3 0 1 0-1-.17v4.67A3.5 3.5 0 0 0 7.5 16h1.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 .15-.35.5.5 0 0 0-.15-.35l-2-2a.5.5 0 0 0-.7.7L9.29 15H7.5A2.5 2.5 0 0 1 5 12.5V8Z"
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