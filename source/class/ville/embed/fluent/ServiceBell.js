/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ServiceBell",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.5 8.5c.42 0 .84 0 1.27.16.41.15.87.45 1.31 1.12a.5.5 0 0 0 .84-.56 3.66 3.66 0 0 0-1.81-1.5 4.51 4.51 0 0 0-1.59-.22h-.02a.5.5 0 0 0 0 1ZM8 5v.79a7 7 0 0 0-5 6.71c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5 7 7 0 0 0-5-6.71V5a2 2 0 1 0-4 0Zm2-1a1 1 0 0 1 1 1v.57a7.06 7.06 0 0 0-2 0V5a1 1 0 0 1 1-1Zm0 2.5a6 6 0 0 1 5.98 5.5H4.02A6 6 0 0 1 10 6.5ZM3.5 14a1.5 1.5 0 0 0 0 3h13a1.5 1.5 0 0 0 0-3h-13ZM3 15.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Z",
    FILLED : "M8 5a2 2 0 1 1 4 0v.79a7 7 0 0 1 5 6.71.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5 7 7 0 0 1 5-6.71V5Zm2.5 3.5c.42 0 .84 0 1.27.16.41.15.87.45 1.31 1.12a.5.5 0 0 0 .84-.56 3.66 3.66 0 0 0-1.81-1.5 4.51 4.51 0 0 0-1.59-.22h-.02a.5.5 0 0 0 0 1Zm-7 5.5a1.5 1.5 0 0 0 0 3h13a1.5 1.5 0 0 0 0-3h-13Z"
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