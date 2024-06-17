/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShapeOrganic",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.5 7.83c.42.32.89.33 1.35.53.25.1.57.3.9.6.66.63 1.25 1.72 1.25 3.54a4.73 4.73 0 0 1-2.54 4.33C13.97 17.68 12 18 10 18c-2.19 0-4.21-.38-5.68-1.62-1.91-1.6-2.35-4.35-2.32-6.7 0-.66.09-2.12.67-3.61.4-1 1.02-2.02 2.01-2.8A6.65 6.65 0 0 1 8.86 2c.25 0 1.23.05 2.26.4 1.15.4 2.48 1.28 2.48 3.1 0 1.36.49 2 .9 2.33Zm-9.54 7.79C6.16 16.62 7.89 17 10 17c1.92 0 3.7-.31 4.97-1.04 2.04-1.15 2.93-4.5 1.09-6.27a2.14 2.14 0 0 0-.62-.42c-.5-.22-1.1-.3-1.54-.65-.69-.53-1.3-1.48-1.3-3.12 0-1.18-.82-1.8-1.81-2.15A6.94 6.94 0 0 0 8.96 3 5.59 5.59 0 0 0 5.3 4.07a5.48 5.48 0 0 0-1.7 2.36A9.62 9.62 0 0 0 3 9.68c-.02 2.1.26 4.5 1.96 5.94Z",
    FILLED : "M14.5 7.83c.42.32.89.33 1.35.53.25.1.57.3.9.6.66.63 1.25 1.72 1.25 3.54a4.73 4.73 0 0 1-2.54 4.33C13.97 17.68 12 18 10 18c-2.19 0-4.21-.38-5.68-1.62-1.91-1.6-2.35-4.35-2.32-6.7 0-.66.09-2.12.67-3.61.4-1 1.02-2.02 2.01-2.8A6.65 6.65 0 0 1 8.86 2c.25 0 1.23.05 2.26.4 1.15.4 2.48 1.28 2.48 3.1 0 1.36.49 2 .9 2.33Z"
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