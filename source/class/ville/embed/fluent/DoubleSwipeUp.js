/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DoubleSwipeUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.85 2.15a.5.5 0 0 0-.7 0l-3 3a.5.5 0 1 0 .7.7L5 3.71V14.5a.5.5 0 0 0 1 0V3.7l2.15 2.15a.5.5 0 1 0 .7-.7l-3-3Zm9 0a.5.5 0 0 0-.7 0l-3 3a.5.5 0 0 0 .7.7L14 3.71V14.5a.5.5 0 0 0 1 0V3.7l2.15 2.15a.5.5 0 0 0 .7-.7l-3-3ZM11 14.5c0-1.4.82-2.6 2-3.16v1.16a2.5 2.5 0 1 0 3 0v-1.16a3.5 3.5 0 1 1-5 3.16Zm-7-3.16a3.5 3.5 0 1 0 3 0v1.16a2.5 2.5 0 1 1-3 0v-1.16Z",
    FILLED : "M6.28 2.22a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06L5 4.56v9.69a.75.75 0 0 0 1.5 0V4.56l1.22 1.22a.75.75 0 0 0 1.06-1.06l-2.5-2.5ZM2 14.25c0-1.44.81-2.69 2-3.32v1.9a2.25 2.25 0 1 0 3.5 0v-1.9A3.75 3.75 0 1 1 2 14.25Zm10.5-3.32a3.75 3.75 0 1 0 3.5 0v1.9a2.25 2.25 0 1 1-3.5 0v-1.9Zm2.28-8.71a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v9.69a.75.75 0 0 0 1.5 0V4.56l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5Z"
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