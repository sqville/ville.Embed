/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PenSparkle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m4.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4L4.9 6.72a.42.42 0 0 1-.8 0l-.35-1.07a2.2 2.2 0 0 0-1.4-1.4L1.28 3.9a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4L4.08.28a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02Zm-3.76 2.14.2.63-1.97 1.97c-.2.2-.32.44-.38.7l-.71 3.2 3.16-.71c.28-.06.54-.2.74-.41l9.36-9.36a1.97 1.97 0 0 0-2.8-2.79L9.98 7.24l-.64-.2a.68.68 0 0 1-.23-.15.42.42 0 0 1-.09-.1l3.91-3.92a2.97 2.97 0 0 1 4.2 4.2l-.66.68.33.34a2 2 0 0 1 0 2.82l-.94.94a.5.5 0 0 1-.7-.7l.94-.94a1 1 0 0 0 0-1.42l-.34-.33-7.98 7.98c-.34.34-.77.57-1.24.67L2.61 18a.5.5 0 0 1-.6-.6l.88-3.95c.1-.45.33-.87.66-1.2l2.2-2.2a.6.6 0 0 1 .27.3Z",
    FILLED : "m4.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4L4.9 6.72a.42.42 0 0 1-.8 0l-.35-1.07a2.2 2.2 0 0 0-1.4-1.4L1.28 3.9a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4L4.08.28a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM7.5 12c-.27 0-.53-.08-.74-.23a1.4 1.4 0 0 1-.48-.62l-.26-.8a.6.6 0 0 0-.26-.31l-2.21 2.2c-.33.34-.56.75-.66 1.2l-.88 3.95a.5.5 0 0 0 .6.6l3.92-.87c.47-.1.9-.34 1.24-.68l7.98-7.98.34.33a1 1 0 0 1 0 1.42l-.94.94a.5.5 0 0 0 .7.7l.94-.94a2 2 0 0 0 0-2.82l-.33-.34.67-.67a2.97 2.97 0 0 0-4.21-4.2l-3.91 3.9c.02.04.05.08.09.11.07.06.14.11.23.14l.76.25c.29.1.51.27.67.5a1.3 1.3 0 0 1-.63 1.97l-.8.26a.52.52 0 0 0-.21.14.68.68 0 0 0-.14.23l-.25.76c-.1.28-.26.49-.48.65-.22.16-.48.2-.75.21Z"
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