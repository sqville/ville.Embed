/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Prohibited",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1 0c0-1.75-.64-3.36-1.7-4.58l-9.88 9.87A7 7 0 0 0 17 10ZM4.7 14.58l9.88-9.87a7 7 0 0 0-9.87 9.87Z",
    FILLED : "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1.5 0c0-1.52-.53-2.93-1.4-4.04L5.96 15.1A6.5 6.5 0 0 0 16.5 10ZM4.9 14.04l9.14-9.14a6.5 6.5 0 0 0-9.13 9.13Z"
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