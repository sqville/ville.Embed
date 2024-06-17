/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DoubleTapSwipeUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.35 2.15a.5.5 0 0 0-.7 0l-3 3a.5.5 0 1 0 .7.7L9.5 3.71v8.79a.5.5 0 0 0 1 0V3.7l2.15 2.15a.5.5 0 0 0 .7-.7l-3-3ZM4.5 12.5a5.5 5.5 0 0 1 4-5.3v1.06a4.5 4.5 0 1 0 3 0V7.2a5.5 5.5 0 1 1-7 5.29Zm2 0c0-1.4.82-2.6 2-3.16v1.16a2.5 2.5 0 1 0 3 0V9.34a3.5 3.5 0 1 1-5 3.16Z",
    FILLED : "M10.53 2.22a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v7.69a.75.75 0 0 0 1.5 0V4.56l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5ZM4.25 12.5a5.75 5.75 0 0 1 4-5.48v1.6a4.25 4.25 0 1 0 3.5 0v-1.6a5.75 5.75 0 1 1-7.5 5.48Zm2.5 0c0-1.15.6-2.16 1.5-2.74v2.74a1.75 1.75 0 1 0 3.5 0V9.76a3.25 3.25 0 1 1-5 2.74Z"
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