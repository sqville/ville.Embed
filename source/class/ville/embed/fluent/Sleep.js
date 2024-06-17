/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Sleep",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.59 2.61a.5.5 0 0 0-.59.55c.4 3.58-.5 6.1-1.85 7.75a6.94 6.94 0 0 1-4.69 2.6.5.5 0 0 0-.37.78 7.96 7.96 0 0 0 6.4 3.21A7.5 7.5 0 0 0 18 10c0-3.72-2.9-6.78-6.4-7.39Zm-1.66 8.93c1.43-1.77 2.36-4.34 2.13-7.8A6.65 6.65 0 0 1 17 10a6.5 6.5 0 0 1-6.5 6.5 7.1 7.1 0 0 1-5.06-2.14 8.1 8.1 0 0 0 4.49-2.82ZM3.5 10C4.33 10 5 9.33 5 8.5V4.89l3-.75v1.94A1.5 1.5 0 1 0 9 7.5v-4a.5.5 0 0 0-.62-.49l-4 1A.5.5 0 0 0 4 4.5v2.58A1.5 1.5 0 1 0 3.5 10Z",
    FILLED : "M11.16 2.74a.5.5 0 0 1 .43-.13c3.5.6 6.4 3.67 6.4 7.4a7.5 7.5 0 0 1-7.5 7.5 7.96 7.96 0 0 1-6.4-3.22.5.5 0 0 1 .37-.79 6.94 6.94 0 0 0 4.69-2.59c1.34-1.65 2.24-4.17 1.85-7.75a.5.5 0 0 1 .16-.42ZM3.5 10C4.33 10 5 9.33 5 8.5V4.9l3-.76V6.1A1.5 1.5 0 1 0 9 7.5v-4a.5.5 0 0 0-.62-.48l-4 1A.5.5 0 0 0 4 4.5v2.59A1.5 1.5 0 1 0 3.5 10Z"
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