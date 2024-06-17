/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MathFormatProfessional",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.85 4.35c.2-.19.25-.24.35-.3a.9.9 0 0 1 .92.17c.07.04.13.1.2.21l.1.17.01.03.14.22.3.54v.03l-1.72 1.73a.5.5 0 0 0 .7.7l1.56-1.55.17.28.18.29.11.18c.1.16.23.36.38.5a1.6 1.6 0 0 0 2 .28c.26-.13.4-.28.59-.46l.01-.02a.5.5 0 1 0-.7-.7 1.28 1.28 0 0 1-.43.33c-.13.1-.46.17-.77-.13a8.08 8.08 0 0 1-.81-1.28l1.71-1.72a.5.5 0 0 0-.7-.7L13.6 4.68a7.66 7.66 0 0 1-.2-.36 3.42 3.42 0 0 1-.11-.2l-.02-.02a5.29 5.29 0 0 0-.12-.2c-.1-.17-.25-.36-.47-.5a1.9 1.9 0 0 0-1.91-.25c-.28.14-.43.29-.62.48l-.01.02a.5.5 0 0 0 .7.7ZM8.31 7c.46 0 .88.23 1.18.54.3.32.5.75.5 1.24.07.77-.2 1.4-.67 1.86-.45.46-1.07.76-1.7.96-1.17.37-2.52.44-3.42.41a3.54 3.54 0 0 0-.2 1.6 1.46 1.46 0 0 0 .52.94c.27.27.6.35 1.1.46 1.34.16 2.64-.61 3.46-1.72a.5.5 0 0 1 .8.6c-.95 1.3-2.6 2.34-4.4 2.1H5.4c-.46-.1-1.08-.23-1.58-.73-.42-.38-.7-.87-.8-1.49a4.56 4.56 0 0 1 .25-2.13l.13-.35a.5.5 0 0 1 .02-.04v-.02c.07-.2.44-1.23 1.2-2.23.75-1 1.96-2.05 3.69-2Zm-3.72 4.02c.8 0 1.84-.1 2.72-.37.55-.18 1-.41 1.3-.71A1.32 1.32 0 0 0 9 8.8c0-.2-.1-.41-.24-.57A.67.67 0 0 0 8.3 8h-.02c-1.26-.04-2.2.71-2.87 1.6-.38.5-.65 1.04-.82 1.42Z",
    FILLED : "M10.25 3.6c.44-.33 1-.65 1.65-.65l.12.01c.43.07.77.23 1.06.5.25.23.44.52.62.78l1.07-1.07a.75.75 0 1 1 1.06 1.06L14.5 5.57l.38.7c.08.16.18.24.38.3h.19l.1-.07.23-.23a.75.75 0 0 1 1.06 1.06l-.03.03c-.17.17-.4.4-.69.55a1.78 1.78 0 0 1-1.2.12 2.02 2.02 0 0 1-1.38-1.1l-.14-.26-1.06 1.06a.75.75 0 1 1-1.06-1.06l1.35-1.35a3.01 3.01 0 0 0-.14-.2 3.34 3.34 0 0 0-.42-.56.42.42 0 0 0-.22-.1c-.15.01-.37.1-.7.34a.75.75 0 0 1-.9-1.2ZM5.4 16.3H6c1.4-.1 2.8-.7 3.9-2 .3-.4.2-.8-.1-1.1-.3-.2-.8-.2-1.2.1-.9.7-1.9 1.4-3.1 1.4-.6 0-1.2-.5-1.3-1.1-.1-.5 0-1.1.2-1.6 1.6.1 3.8-.1 4.8-1.3.8-.9 1-2.4 0-3.3-.4-.4-.9-.5-1.4-.5-.9 0-1.8.5-2.6 1.3-1.3 1.3-2.6 3.5-2.4 5.6.1 1.5 1.4 2.4 2.6 2.5Zm.8-7.1c.6-.5 1.1-.8 1.6-.8.2 0 .5.1.6.3.2.3 0 .8-.2 1-.5.5-1.8.8-3 .8.3-.5.6-.9 1-1.3Z"
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