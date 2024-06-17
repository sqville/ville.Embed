/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowClockwiseDashes",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.65 3.2c.2.05.35.24.35.45 0 .34-.33.57-.66.5a6.02 6.02 0 0 0-2.68 0c-.33.07-.66-.16-.66-.5 0-.21.14-.4.35-.45a7.02 7.02 0 0 1 3.3 0Zm-.31 12.65c.33-.07.66.16.66.5 0 .21-.14.4-.35.45a7.02 7.02 0 0 1-3.3 0 .47.47 0 0 1-.35-.45c0-.34.33-.57.66-.5a6.02 6.02 0 0 0 2.68 0ZM13 15.5c0 .38.4.63.72.43a7.04 7.04 0 0 0 2.2-2.2c.21-.33-.04-.73-.42-.73-.19 0-.36.1-.46.26a6.03 6.03 0 0 1-1.78 1.78.55.55 0 0 0-.26.46Zm0-11c0 .19.1.36.26.46.45.3.86.64 1.21 1.04H12.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.6a7.03 7.03 0 0 0-1.28-1.03c-.32-.2-.72.05-.72.43Zm-6.72-.43c.32-.2.72.05.72.43 0 .19-.1.36-.26.46a6.03 6.03 0 0 0-1.78 1.78.55.55 0 0 1-.46.26c-.38 0-.63-.4-.43-.72a7.04 7.04 0 0 1 2.2-2.2ZM3.2 8.35a7.02 7.02 0 0 0 0 3.3c.05.2.24.35.45.35.34 0 .57-.33.5-.66a6.02 6.02 0 0 1 0-2.68c.07-.33-.16-.66-.5-.66-.21 0-.4.14-.45.35Zm3.08 7.58c.32.2.72-.05.72-.43 0-.19-.1-.36-.26-.46a6.03 6.03 0 0 1-1.78-1.78.55.55 0 0 0-.46-.26c-.38 0-.63.4-.43.72a7.04 7.04 0 0 0 2.2 2.2Zm10.7-5.43a.47.47 0 0 0-.48-.5c-.28 0-.5.22-.52.5a6 6 0 0 1-.13.84c-.07.33.16.66.5.66.21 0 .4-.14.45-.35.1-.37.15-.76.18-1.15Z",
    FILLED : "M11.46 2.64c.32.07.54.35.54.68 0 .5-.5.85-.99.77a6.04 6.04 0 0 0-2.02 0c-.5.08-.99-.27-.99-.77 0-.33.22-.61.54-.68a7.54 7.54 0 0 1 2.92 0Zm-.45 13.27c.5-.08.99.27.99.77 0 .33-.22.61-.54.68a7.54 7.54 0 0 1-2.92 0 .68.68 0 0 1-.54-.68c0-.5.5-.85.99-.77a6.04 6.04 0 0 0 2.02 0Zm1.99-.25c0 .57.59.95 1.07.64a7.54 7.54 0 0 0 2.23-2.23c.31-.48-.07-1.07-.64-1.07a.86.86 0 0 0-.7.39 6.03 6.03 0 0 1-1.57 1.56.86.86 0 0 0-.39.7Zm0-11.32c0 .29.15.55.39.7.2.15.4.3.58.46h-1.22a.75.75 0 0 0 0 1.5h3c.41 0 .75-.34.75-.75v-3a.75.75 0 0 0-1.5 0v1.16c-.29-.26-.6-.5-.93-.7-.48-.32-1.07.06-1.07.63ZM5.93 3.7C6.4 3.4 7 3.77 7 4.34c0 .29-.15.55-.39.7C6 5.48 5.47 6 5.05 6.62a.86.86 0 0 1-.7.39c-.58 0-.96-.59-.65-1.07A7.54 7.54 0 0 1 5.93 3.7ZM2.64 8.54a7.54 7.54 0 0 0 0 2.92c.07.32.35.54.68.54.5 0 .85-.5.77-.99a6.04 6.04 0 0 1 0-2.02c.08-.5-.27-.99-.77-.99a.68.68 0 0 0-.68.54Zm3.29 7.76c.48.31 1.07-.07 1.07-.64a.86.86 0 0 0-.39-.7 6.03 6.03 0 0 1-1.56-1.57.86.86 0 0 0-.7-.39c-.58 0-.96.59-.65 1.07a7.54 7.54 0 0 0 2.23 2.23Zm11.53-5.55c.04-.41-.3-.75-.71-.75s-.75.34-.8.75c0 .09-.02.17-.04.26-.08.5.27.99.77.99.33 0 .61-.22.68-.54.04-.23.08-.47.1-.71Z"
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