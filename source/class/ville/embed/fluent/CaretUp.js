/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CaretUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.02 12.28a1 1 0 0 0 .78 1.63h8.4a1 1 0 0 0 .78-1.63l-3.81-4.72a1.5 1.5 0 0 0-2.34 0l-3.81 4.72Zm9.18.63H5.8L9.6 8.19a.5.5 0 0 1 .78 0l3.81 4.72Z",
    FILLED : "M5.8 13.9a1 1 0 0 1-.78-1.62l3.81-4.72a1.5 1.5 0 0 1 2.34 0l3.81 4.72a1 1 0 0 1-.78 1.63H5.8Z"
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