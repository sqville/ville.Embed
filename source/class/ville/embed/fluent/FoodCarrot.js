/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FoodCarrot",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17.85 2.85a.5.5 0 0 0-.7-.7L14 5.29V2.5a.5.5 0 0 0-1 0v2.88a3.66 3.66 0 0 0-4.64 1.2l-6.09 8.95c-.42.63-.34 1.47.2 2 .55.55 1.41.62 2.05.18l8.93-6.18A3.57 3.57 0 0 0 14.63 7h2.87a.5.5 0 0 0 0-1h-2.8l3.15-3.15ZM9.2 7.14a2.64 2.64 0 0 1 4.04-.39 2.58 2.58 0 0 1-.35 3.96L3.95 16.9a.6.6 0 0 1-.77-.07.59.59 0 0 1-.07-.75l6.08-8.94Z",
    FILLED : "M17.85 2.85a.5.5 0 0 0-.7-.7L14 5.29V2.5a.5.5 0 1 0-1 0v2.88a3.66 3.66 0 0 0-4.64 1.2l-6.09 8.95c-.42.63-.34 1.47.2 2 .55.55 1.42.62 2.05.18l8.93-6.18A3.57 3.57 0 0 0 14.63 7h2.87a.5.5 0 1 0 0-1h-2.8l3.15-3.15Z"
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