/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowMove",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.35 2.15a.5.5 0 0 0-.7 0l-2.5 2.5a.5.5 0 1 0 .7.7L9.5 3.71V7.5a.5.5 0 0 0 1 0V3.7l1.65 1.65a.5.5 0 0 0 .7-.7l-2.5-2.5Zm-8.2 7.5a.5.5 0 0 0 0 .7l2.5 2.5a.5.5 0 0 0 .7-.7L3.71 10.5H7.5a.5.5 0 0 0 0-1H3.7l1.65-1.65a.5.5 0 1 0-.7-.7l-2.5 2.5ZM10 18a.5.5 0 0 1-.35-.15l-2.5-2.5a.5.5 0 0 1 .7-.7l1.65 1.64V12.5a.5.5 0 0 1 1 0v3.8l1.65-1.65a.5.5 0 0 1 .7.7l-2.5 2.5A.5.5 0 0 1 10 18Zm7.85-7.65a.5.5 0 0 0 0-.7l-2.5-2.5a.5.5 0 0 0-.7.7l1.64 1.65H12.5a.5.5 0 0 0 0 1h3.8l-1.65 1.65a.5.5 0 0 0 .7.7l2.5-2.5Z",
    FILLED : "M10.53 2.22a.75.75 0 0 0-1.06 0L7.22 4.47a.75.75 0 0 0 1.06 1.06l.97-.97v2.69a.75.75 0 0 0 1.5 0V4.56l.97.97a.75.75 0 1 0 1.06-1.06l-2.25-2.25ZM2.22 9.47c-.3.3-.3.77 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h2.69a.75.75 0 0 0 0-1.5H4.56l.97-.97a.75.75 0 0 0-1.06-1.06L2.22 9.47Zm8.31 8.31 2.25-2.25a.75.75 0 1 0-1.06-1.06l-.97.97v-2.69a.75.75 0 0 0-1.5 0v2.69l-.97-.97a.75.75 0 0 0-1.06 1.06l2.25 2.25c.3.3.77.3 1.06 0Zm5-10.56 2.25 2.25c.3.3.3.77 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97h-2.69a.75.75 0 0 1 0-1.5h2.69l-.97-.97a.75.75 0 0 1 1.06-1.06Z"
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