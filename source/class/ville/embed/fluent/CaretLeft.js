/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CaretLeft",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.37 14.98A1 1 0 0 0 13 14.2V5.8a1 1 0 0 0-1.63-.78L6.65 8.83a1.5 1.5 0 0 0 0 2.34l4.72 3.81ZM12 5.8v8.4L7.28 10.4a.5.5 0 0 1 0-.78L12 5.8Z",
    FILLED : "M13 14.2a1 1 0 0 1-1.63.78l-4.72-3.81a1.5 1.5 0 0 1 0-2.34l4.72-3.81A1 1 0 0 1 13 5.8v8.4Z"
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