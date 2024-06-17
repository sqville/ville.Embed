/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MicSparkle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m13.23 8.35-.35-1.07a.42.42 0 0 0-.8 0l-.35 1.07a2.2 2.2 0 0 1-1.38 1.4l-1.07.35a.42.42 0 0 0 0 .8l1.07.34a2.2 2.2 0 0 1 1.4 1.4l.35 1.08a.42.42 0 0 0 .8 0l.35-1.07a2.2 2.2 0 0 1 1.4-1.4l1.07-.35a.42.42 0 0 0 0-.8h-.02l-1.08-.35a2.2 2.2 0 0 1-1.4-1.4ZM10 14.5c.45 0 .88-.06 1.28-.19a1.42 1.42 0 0 0 1.04.68c-.56.26-1.18.43-1.82.49v2.02a.5.5 0 0 1-1 0v-2.02a5.5 5.5 0 0 1-5-5.48.5.5 0 0 1 1 0 4.5 4.5 0 0 0 4.5 4.5Zm0-1.5a3 3 0 0 0 .78-.1 1.2 1.2 0 0 0-.74-.7l-1.08-.36h-.01a1.42 1.42 0 0 1-.93-1.57A2.02 2.02 0 0 1 8 10V5a2 2 0 1 1 4 0v1.08a1.42 1.42 0 0 1 1 .02V5a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm8.02 1.96.76.25h.02a.3.3 0 0 1 0 .58l-.77.25a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.58 1.58 0 0 0-1-1l-.77-.25a.3.3 0 0 1 0-.57l.77-.25a1.58 1.58 0 0 0 .98-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.58 1.58 0 0 0 1 1Z",
    FILLED : "M5 9.5c.28 0 .5.22.5.5a4.5 4.5 0 0 0 5.78 4.31 1.42 1.42 0 0 0 1.04.68c-.56.26-1.18.43-1.82.49v2.02a.5.5 0 0 1-1 0v-2.02a5.5 5.5 0 0 1-5-5.48c0-.28.22-.5.5-.5Zm7.1 4.22a.42.42 0 0 0 .8 0l.35-1.07a2.2 2.2 0 0 1 1.4-1.4l1.07-.35a.42.42 0 0 0 0-.8h-.02l-1.08-.35a2.2 2.2 0 0 1-1.4-1.4l-.34-1.07a.42.42 0 0 0-.8 0l-.35 1.07a2.2 2.2 0 0 1-1.38 1.4l-1.07.35a.42.42 0 0 0 0 .8l1.07.34a2.2 2.2 0 0 1 1.4 1.4l.35 1.08ZM12.48 6c.18 0 .35.03.52.1V5a3 3 0 1 0-6 0v5a3 3 0 0 0 3.78 2.9 1.2 1.2 0 0 0-.74-.7l-1.08-.36h-.01a1.42 1.42 0 0 1 0-2.68h.01l1.08-.36a1.2 1.2 0 0 0 .74-.76l.35-1.08v-.01A1.42 1.42 0 0 1 12.49 6Zm5.54 8.96.76.25h.02a.3.3 0 0 1 .14.47.3.3 0 0 1-.14.1l-.77.26a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.57 1.57 0 0 0-1-1l-.77-.25a.3.3 0 0 1-.14-.46.3.3 0 0 1 .14-.1l.77-.26a1.58 1.58 0 0 0 .98-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.58 1.58 0 0 0 1 1Z"
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