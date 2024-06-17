/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CaretDown",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.02 8.63A1 1 0 0 1 5.8 7h8.4a1 1 0 0 1 .78 1.63l-3.81 4.72a1.5 1.5 0 0 1-2.34 0L5.02 8.63ZM14.2 8H5.8l3.81 4.72c.2.25.58.25.78 0L14.2 8Z",
    FILLED : "M5.8 7a1 1 0 0 0-.78 1.63l3.81 4.72c.6.74 1.74.74 2.34 0l3.81-4.72A1 1 0 0 0 14.2 7H5.8Z"
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