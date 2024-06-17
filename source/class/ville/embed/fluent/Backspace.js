/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Backspace",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.15 7.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 0 1 .7.7L12.71 10l2.14 2.15a.5.5 0 0 1-.7.7L12 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L11.29 10 9.15 7.85a.5.5 0 0 1 0-.7ZM6.59 4.66A2.5 2.5 0 0 1 8.29 4h7.21A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5H8.28a2.5 2.5 0 0 1-1.7-.66l-3.78-3.5a2.5 2.5 0 0 1 0-3.68l3.79-3.5Zm1.7.34c-.38 0-.75.14-1.03.4L3.48 8.9a1.5 1.5 0 0 0 0 2.2l3.78 3.5c.28.26.65.4 1.02.4h7.22c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5H8.28Z",
    FILLED : "M8.28 4a2.5 2.5 0 0 0-1.7.66L2.8 8.16a2.5 2.5 0 0 0 0 3.68l3.79 3.5a2.5 2.5 0 0 0 1.7.66h7.21a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4H8.28Zm.87 3.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 0 1 .7.7L12.71 10l2.14 2.15a.5.5 0 0 1-.7.7L12 10.71l-2.15 2.14a.5.5 0 0 1-.7-.7L11.29 10 9.15 7.85a.5.5 0 0 1 0-.7Z"
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