/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PlayCircleHint",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2c-.53 0-1.06.05-1.56.15a.5.5 0 0 0 .2.98 7.04 7.04 0 0 1 2.73 0 .5.5 0 0 0 .2-.98C11.05 2.05 10.52 2 10 2Zm4.45 1.35a.5.5 0 0 0-.56.83 7.04 7.04 0 0 1 1.93 1.93.5.5 0 1 0 .83-.56 8.04 8.04 0 0 0-2.2-2.2Zm-8.34.83a.5.5 0 1 0-.56-.83 8.04 8.04 0 0 0-2.2 2.2.5.5 0 1 0 .83.56A7.04 7.04 0 0 1 6.1 4.18ZM3.13 8.63a.5.5 0 0 0-.98-.2 8.04 8.04 0 0 0 0 3.13.5.5 0 0 0 .98-.2 7.04 7.04 0 0 1 0-2.73Zm14.72-.2a.5.5 0 1 0-.98.2 7.04 7.04 0 0 1 0 2.74.5.5 0 1 0 .98.2 8.03 8.03 0 0 0 0-3.13ZM4.18 13.9a.5.5 0 1 0-.83.56 8.04 8.04 0 0 0 2.2 2.2.5.5 0 1 0 .56-.83 7.04 7.04 0 0 1-1.93-1.93Zm12.47.56a.5.5 0 0 0-.83-.56 7.04 7.04 0 0 1-1.93 1.93.5.5 0 1 0 .56.83 8.04 8.04 0 0 0 2.2-2.2Zm-8.02 2.42a.5.5 0 1 0-.2.98 8.03 8.03 0 0 0 3.13 0 .5.5 0 0 0-.2-.98 7.04 7.04 0 0 1-2.73 0ZM8 7.83c0-.57.63-.94 1.13-.65l4.12 2.39a.5.5 0 0 1 0 .86l-4.12 2.39A.75.75 0 0 1 8 12.17V7.83Z",
    FILLED : "M10 2c-.53 0-1.06.05-1.56.15a.5.5 0 0 0 .2.98 7.04 7.04 0 0 1 2.73 0 .5.5 0 0 0 .2-.98C11.05 2.05 10.52 2 10 2Zm4.45 1.35a.5.5 0 0 0-.56.83 7.04 7.04 0 0 1 1.93 1.93.5.5 0 1 0 .83-.56 8.04 8.04 0 0 0-2.2-2.2Zm-8.34.83a.5.5 0 1 0-.56-.83 8.04 8.04 0 0 0-2.2 2.2.5.5 0 1 0 .83.56A7.04 7.04 0 0 1 6.1 4.18ZM3.13 8.63a.5.5 0 0 0-.98-.2 8.04 8.04 0 0 0 0 3.13.5.5 0 0 0 .98-.2 7.04 7.04 0 0 1 0-2.73Zm14.72-.2a.5.5 0 1 0-.98.2 7.04 7.04 0 0 1 0 2.74.5.5 0 1 0 .98.2 8.03 8.03 0 0 0 0-3.13ZM4.18 13.9a.5.5 0 1 0-.83.56 8.04 8.04 0 0 0 2.2 2.2.5.5 0 1 0 .56-.83 7.04 7.04 0 0 1-1.93-1.93Zm12.47.56a.5.5 0 0 0-.83-.56 7.04 7.04 0 0 1-1.93 1.93.5.5 0 1 0 .56.83 8.04 8.04 0 0 0 2.2-2.2Zm-8.02 2.42a.5.5 0 1 0-.2.98 8.03 8.03 0 0 0 3.13 0 .5.5 0 0 0-.2-.98 7.04 7.04 0 0 1-2.73 0ZM16 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM9.13 7.18A.75.75 0 0 0 8 7.83v4.34c0 .57.63.94 1.13.65l4.12-2.39a.5.5 0 0 0 0-.86L9.13 7.18Z"
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