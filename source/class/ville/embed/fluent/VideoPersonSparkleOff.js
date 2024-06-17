/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoPersonSparkleOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.3 4.01 2.16 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L15.29 16H3.5A1.5 1.5 0 0 1 2 14.5v-9c0-.76.57-1.4 1.3-1.49Zm9 8.99H7.5a.5.5 0 0 0-.5.5V15h6v-1.3l-.7-.7Zm-1-1-1.02-1.02L10 11a2.5 2.5 0 0 1-2.48-2.78L4.29 5H3.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h3.8ZM8.56 6.45l.73.72a1.5 1.5 0 0 1 2.03 2.03l.72.73a2.5 2.5 0 0 0-3.48-3.48Zm9.05 9.05-.71-.71a.5.5 0 0 0 .09-.29v-1.6a1.45 1.45 0 0 0 1 .02v1.58c0 .38-.14.73-.38 1ZM6.12 4l1 1h2.97a1.42 1.42 0 0 1 0-1H6.12Zm9.1-1.65-.34-1.07a.42.42 0 0 0-.8 0l-.35 1.07a2.2 2.2 0 0 1-1.38 1.4l-1.07.35a.42.42 0 0 0 0 .8l1.07.34a2.2 2.2 0 0 1 1.4 1.4l.35 1.08a.42.42 0 0 0 .8 0l.35-1.07a2.2 2.2 0 0 1 1.4-1.4l1.07-.35a.42.42 0 0 0 0-.8h-.02l-1.08-.35a2.2 2.2 0 0 1-1.4-1.4Zm3.8 6.61.76.25h.02a.3.3 0 0 1 0 .58l-.77.25a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.57 1.57 0 0 0-1-1l-.77-.25a.3.3 0 0 1 0-.57l.77-.25a1.58 1.58 0 0 0 .98-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.57 1.57 0 0 0 1 1Z",
    FILLED : "M3.3 4.01 2.16 2.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7L15.29 16H3.5A1.5 1.5 0 0 1 2 14.5v-9c0-.76.57-1.4 1.3-1.49Zm8 7.99-1.02-1.02L10 11a2.5 2.5 0 0 1-2.48-2.78L4.29 5H3.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5H6v-1.5c0-.83.67-1.5 1.5-1.5h3.8ZM8.56 6.45l3.48 3.48a2.5 2.5 0 0 0-3.48-3.48Zm9.05 9.05-.71-.71a.5.5 0 0 0 .09-.29v-1.6a1.45 1.45 0 0 0 1 .02v1.58c0 .38-.14.73-.38 1ZM6.12 4l1 1h2.97a1.42 1.42 0 0 1 0-1H6.12Zm9.1-1.65-.34-1.07a.42.42 0 0 0-.8 0l-.35 1.07a2.2 2.2 0 0 1-1.38 1.4l-1.07.35a.42.42 0 0 0 0 .8l1.07.34a2.2 2.2 0 0 1 1.4 1.4l.35 1.08a.42.42 0 0 0 .8 0l.35-1.07a2.2 2.2 0 0 1 1.4-1.4l1.07-.35a.42.42 0 0 0 0-.8h-.02l-1.08-.35a2.2 2.2 0 0 1-1.4-1.4Zm3.8 6.61.76.25h.02a.3.3 0 0 1 0 .58l-.77.25a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.57 1.57 0 0 0-1-1l-.77-.25a.3.3 0 0 1 0-.57l.77-.25a1.58 1.58 0 0 0 .98-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.57 1.57 0 0 0 1 1Z"
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