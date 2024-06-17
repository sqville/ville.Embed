/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowSyncCircle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm8 7a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm-8-2.5c1.02 0 1.9.62 2.3 1.5h-.8a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.7a3.5 3.5 0 0 0-5.6-.53.5.5 0 0 0 .74.66A2.5 2.5 0 0 1 10 7.5Zm-3 4.3v.7a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.8a2.5 2.5 0 0 0 4.16.67.5.5 0 0 1 .75.66A3.5 3.5 0 0 1 7 11.8Z",
    FILLED : "M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm3.5-8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.7a3.5 3.5 0 0 0-5.6-.53.5.5 0 1 0 .74.66 2.5 2.5 0 0 1 4.15.67h-.79a.5.5 0 1 0 0 1h2Zm-7.5.5v2a.5.5 0 0 0 1 0v-.7a3.5 3.5 0 0 0 5.6.53.5.5 0 0 0-.74-.66A2.5 2.5 0 0 1 7.71 11h.79a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z"
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