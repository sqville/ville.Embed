/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ZoomOut",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11 8a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1h5Zm3 .5a5.5 5.5 0 1 0-1.98 4.23l4.13 4.12.07.06a.5.5 0 0 0 .63-.76l-4.12-4.13A5.48 5.48 0 0 0 14 8.5Zm-10 0a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z",
    FILLED : "M14 8.5a5.5 5.5 0 1 0-2.18 4.38l4.15 4.15.08.07a.75.75 0 0 0 .98-1.13l-4.15-4.15A5.48 5.48 0 0 0 14 8.5Zm-3-.75a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h5Z"
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