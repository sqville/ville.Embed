/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextEffectsSparkle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m13.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM8.38 4.1c.13-.32.35-.6.63-.78a1.46 1.46 0 0 0 .25 1l.07.1a.76.76 0 0 0-.02.06l-3.03 7.48-.02.03-1.2 2.99a.75.75 0 0 0 1.39.56L7.47 13h5.06l1.03 2.53a.75.75 0 0 0 1.39-.56l-1.21-2.99-.02-.03-1.95-4.83c.37.42.8.74 1.35.85a1.3 1.3 0 0 0 .77 1.77h.02l.73 1.82.03.07 1.2 2.96a1.75 1.75 0 0 1-3.24 1.32L11.86 14H8.14l-.77 1.9a1.75 1.75 0 1 1-3.24-1.3l1.2-2.97.03-.07 3.02-7.47Zm3.54 7.41H8.08L10 6.75l1.92 4.75Z",
    FILLED : "m13.88.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02Zm-9.47-5.6c-.62.2-1.14.67-1.4 1.3L4.9 11.36l-.04.1-1.2 2.95a2.25 2.25 0 0 0 4.18 1.68l.64-1.59h3.04l.64 1.6a2.25 2.25 0 0 0 4.18-1.7l-1.2-2.95a2.27 2.27 0 0 0-.04-.1l-.57-1.4-.64-.21c-.27-.1-.49-.26-.65-.48a1.3 1.3 0 0 1-.13-1.29c-.53-.11-.97-.43-1.34-.85l1.96 4.83v.03l1.22 2.99a.75.75 0 0 1-1.4.56L12.54 13H7.47l-1.02 2.53a.75.75 0 0 1-1.4-.56l1.21-2.99.02-.03L9.3 4.47l.02-.06A1.4 1.4 0 0 1 9 3.5a1.4 1.4 0 0 1 .31-.9ZM8.08 11.5h3.84L10 6.75 8.08 11.5Z"
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