/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowJoin",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 2.5a.5.5 0 0 0-1 0 7.45 7.45 0 0 0 4.78 7 7.45 7.45 0 0 0-4.78 7 .5.5 0 0 0 1 0c0-3.62 2.88-6.5 6.5-6.5h.8l-1.15 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L12.29 9h-.79A6.46 6.46 0 0 1 5 2.5ZM8.5 4a.5.5 0 0 0 0 1H15c.52 0 1 .48 1 1v7c0 .52-.48 1-1 1H8.5a.5.5 0 0 0 0 1H15c1.08 0 2-.92 2-2V6c0-1.08-.92-2-2-2H8.5Z",
    FILLED : "M4.5 2c.28 0 .5.22.5.5C5 6.12 7.88 9 11.5 9h.8l-1.15-1.15a.5.5 0 0 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L12.29 10h-.79A6.46 6.46 0 0 0 5 16.5a.5.5 0 0 1-1 0 7.45 7.45 0 0 1 4.78-7A7.45 7.45 0 0 1 4 2.5c0-.28.22-.5.5-.5Zm5.53 9.2A5.43 5.43 0 0 0 7 13.3v.7c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v.7a5.43 5.43 0 0 0 3.03 2.1 1.5 1.5 0 0 1 2.53-1.36l2 2a1.5 1.5 0 0 1 0 2.12l-2 2a1.5 1.5 0 0 1-2.53-1.37Z"
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