/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ChatBubblesQuestion",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 4.9c-.37.07-.76.3-1.07.85a.5.5 0 1 1-.87-.5A2.57 2.57 0 0 1 8.3 3.92c.65-.13 1.3.04 1.8.36.48.32.87.84.88 1.47.01.66-.39 1.25-1.12 1.68-.5.3-.7.5-.77.63-.07.11-.1.21-.1.44a.5.5 0 0 1-1 0c0-.27.02-.61.25-.97.2-.34.56-.64 1.11-.96.54-.32.63-.62.63-.8 0-.2-.14-.46-.44-.65-.3-.2-.68-.3-1.05-.22Zm.25 6.6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.5 1a6.5 6.5 0 0 0-5.68 9.67l-.8 2.08a1 1 0 0 0 1.21 1.32l2.49-.7A6.5 6.5 0 1 0 8.5 1ZM3 7.5a5.5 5.5 0 1 1 3 4.9l-.18-.09-2.86.8.97-2.53-.13-.21A5.47 5.47 0 0 1 3 7.5Zm8.46 9.5a6.49 6.49 0 0 1-4.92-2.26 7.5 7.5 0 0 0 1.75.26 5.47 5.47 0 0 0 5.67.4l.18-.09 2.86.8-.97-2.53.13-.21A5.47 5.47 0 0 0 16 7.39c-.01-.6-.1-1.2-.24-1.76a6.48 6.48 0 0 1 1.38 8.04l.8 2.08a1 1 0 0 1-1.21 1.32l-2.49-.7c-.84.4-1.78.63-2.78.63Z",
    FILLED : "M8.5 1a6.5 6.5 0 0 0-5.68 9.67l-.8 2.08a1 1 0 0 0 1.21 1.32l2.49-.7A6.5 6.5 0 1 0 8.5 1Zm0 3.9c-.37.07-.76.3-1.07.85a.5.5 0 1 1-.87-.5A2.57 2.57 0 0 1 8.3 3.92c.65-.13 1.3.04 1.8.36.48.32.87.84.88 1.47.01.66-.39 1.25-1.12 1.68-.5.3-.7.5-.77.63-.07.11-.1.21-.1.44a.5.5 0 0 1-1 0c0-.27.02-.61.25-.97.2-.34.56-.64 1.11-.96.54-.32.63-.62.63-.8 0-.2-.14-.46-.44-.65-.3-.2-.68-.3-1.05-.22Zm.25 6.6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm-2.21 3.24a6.49 6.49 0 0 0 7.7 1.64l2.49.7a1 1 0 0 0 1.2-1.33l-.8-2.08a6.47 6.47 0 0 0-1.37-8.04c.15.56.23 1.15.24 1.76a5.47 5.47 0 0 1 .16 5.98l-.13.2.97 2.54-2.86-.8-.18.09A5.47 5.47 0 0 1 8.3 15a7.5 7.5 0 0 1-1.75-.26Z"
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