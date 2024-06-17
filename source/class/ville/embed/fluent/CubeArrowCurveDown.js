/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CubeArrowCurveDown",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M1 5.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm6.4.89-.9.9V5.74A2.75 2.75 0 0 0 3.75 3H3.5a.5.5 0 1 0 0 1h.25c.97 0 1.75.78 1.75 1.74V7.3l-.9-.9a.5.5 0 0 0-.7.7l1.75 1.76a.5.5 0 0 0 .7 0L8.12 7.1a.5.5 0 1 0-.71-.71ZM2 9.73c.3.26.64.48 1 .66v3.42c0 .2.13.39.32.46l5.75 2.3c.6.24 1.26.24 1.86 0l5.76-2.3a.5.5 0 0 0 .31-.46V6.17a.5.5 0 0 0-.31-.46l-5.76-2.3a2.5 2.5 0 0 0-.4-.12 5.5 5.5 0 0 0-.6-1.06c.46-.01.93.07 1.37.25l5.76 2.3c.57.23.94.78.94 1.4v7.63a1.5 1.5 0 0 1-.94 1.39l-5.76 2.3a3.5 3.5 0 0 1-2.6 0l-5.76-2.3A1.5 1.5 0 0 1 2 13.8V9.74Zm8.54-2.02A5.5 5.5 0 0 1 9.5 9.27v4.22a.5.5 0 0 0 1 0V8.82l4.2-1.87a.5.5 0 1 0-.4-.91L10.54 7.7Z",
    FILLED : "M1 5.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm6.4.9-.9.89V5.74A2.75 2.75 0 0 0 3.75 3H3.5a.5.5 0 1 0 0 1h.25c.97 0 1.75.78 1.75 1.74V7.3l-.9-.9a.5.5 0 0 0-.7.7l1.75 1.76a.5.5 0 0 0 .7 0L8.12 7.1a.5.5 0 1 0-.71-.7Zm3.6-.9c0 .78-.16 1.53-.46 2.2l3.76-1.66a.5.5 0 0 1 .4.91l-4.2 1.87v4.67a.5.5 0 0 1-1 0V9.27a5.49 5.49 0 0 1-7.5.46v4.08c0 .61.37 1.16.94 1.39l5.76 2.3a3.5 3.5 0 0 0 2.6 0l5.76-2.3c.57-.23.94-.78.94-1.4V6.18a1.5 1.5 0 0 0-.94-1.39l-5.76-2.3a3.5 3.5 0 0 0-1.38-.25A5.47 5.47 0 0 1 11 5.5Z"
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