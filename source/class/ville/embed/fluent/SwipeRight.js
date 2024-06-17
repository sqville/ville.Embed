/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SwipeRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 6a4 4 0 0 1 3.7 2.5H8.6a3 3 0 1 0 0 3h1.1A4 4 0 1 1 6 6Zm8.85 7.35 3-3a.5.5 0 0 0 0-.7l-3-3a.5.5 0 1 0-.7.7l2.14 2.15H5.5a.5.5 0 0 0 0 1h10.8l-2.15 2.15a.5.5 0 0 0 .7.7Z",
    FILLED : "M6 6a4 4 0 0 1 3.6 2.25H8.44a3 3 0 1 0 0 3.5H9.6A4 4 0 1 1 6 6Zm9.28 7.03 2.5-2.5c.3-.3.3-.77 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H5.75a.75.75 0 1 0 0 1.5h9.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06Z"
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