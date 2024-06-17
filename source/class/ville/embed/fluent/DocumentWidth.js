/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentWidth",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.88 7.42a.5.5 0 0 1-.05.7l-1 .88H5.5a.5.5 0 0 1 0 1H2.83l1 .88a.5.5 0 1 1-.66.75l-2-1.75a.5.5 0 0 1 0-.75l2-1.75a.5.5 0 0 1 .7.04ZM17.17 10l-1 .88a.5.5 0 0 0 .66.75l2-1.75a.5.5 0 0 0 0-.75l-2-1.75a.5.5 0 0 0-.66.75l1 .87H14.5a.5.5 0 0 0 0 1h2.67ZM5 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.5h.02A1.5 1.5 0 0 1 16 6.34V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2.34a1.5 1.5 0 0 1 .98 1.16H5V4Zm-.37 8.24c.19-.22.3-.48.35-.74H5V16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4.5h.02a1.5 1.5 0 0 0 .98 1.16V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.34c.24-.08.45-.22.63-.42Z",
    FILLED : "M6 2h8a2 2 0 0 1 2 2v2.34A1.5 1.5 0 0 0 15.02 8h-.52a1.5 1.5 0 0 0 0 3h.52a1.5 1.5 0 0 0 .98 1.66V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.34A1.5 1.5 0 0 0 4.98 11h.52a1.5 1.5 0 0 0 0-3h-.52A1.5 1.5 0 0 0 4 6.34V4c0-1.1.9-2 2-2ZM3.88 7.42a.5.5 0 0 1-.05.7l-1 .88H5.5a.5.5 0 1 1 0 1H2.83l1 .87a.5.5 0 0 1-.66.76l-2-1.75a.5.5 0 0 1 0-.76l2-1.75a.5.5 0 0 1 .7.05ZM17.17 10l-1 .87a.5.5 0 0 0 .66.76l2-1.75a.5.5 0 0 0 0-.76l-2-1.75a.5.5 0 0 0-.66.76l1 .87H14.5a.5.5 0 0 0 0 1h2.67Z"
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