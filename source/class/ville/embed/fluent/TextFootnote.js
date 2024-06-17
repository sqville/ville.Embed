/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextFootnote",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M18 3.5a.5.5 0 0 0-1 0c0 .47-.1.84-.3 1.17-.2.33-.52.65-.99.97a.5.5 0 1 0 .58.83c.26-.19.5-.38.71-.59V9.5a.5.5 0 0 0 1 0v-6Zm-7.5 11.54a.5.5 0 0 0 .36-.14.5.5 0 0 0 .15-.38v-.66h.02a2.3 2.3 0 0 0 2.07 1.18c.8 0 1.46-.3 1.95-.89.5-.6.74-1.39.74-2.38 0-1-.25-1.79-.74-2.38-.49-.6-1.14-.9-1.93-.9a2.23 2.23 0 0 0-2.03 1.17h-.03V6.61c0-.17-.05-.3-.15-.41a.49.49 0 0 0-.38-.16.51.51 0 0 0-.38.16c-.1.1-.15.24-.15.4v7.92c0 .16.04.28.13.38.1.1.21.14.36.14Zm3.72-1.56c-.33.42-.77.63-1.33.63-.54 0-.98-.21-1.33-.64-.34-.43-.5-1-.5-1.7s.16-1.26.5-1.7c.35-.43.8-.65 1.33-.65.56 0 1 .22 1.33.64.32.42.48.99.48 1.7 0 .73-.16 1.3-.48 1.72ZM2.16 14.87c.1.09.25.13.41.13.27 0 .46-.14.56-.42l.8-2.2h3.63l.81 2.2c.1.28.29.42.56.42a.6.6 0 0 0 .4-.13c.12-.1.17-.21.17-.35a.9.9 0 0 0-.07-.3l-2.95-7.7C6.34 6.19 6.11 6 5.76 6c-.36 0-.61.18-.75.53l-2.94 7.68a.9.9 0 0 0-.07.3c0 .15.05.26.16.36Zm5.07-3.42H4.27l1.46-4.02h.04l1.46 4.02Z",
    FILLED : "M17.3 3c.4.03.7.35.7.75v5.5a.75.75 0 0 1-1.5 0V6.11l-.31.23a.75.75 0 0 1-.83-1.25 2.84 2.84 0 0 0 1.16-1.5.75.75 0 0 1 .79-.59Zm-7.1 12.07a.79.79 0 0 1-.2-.55V6.61c0-.22.07-.42.21-.58a.76.76 0 0 1 .57-.24c.22 0 .41.08.56.24.15.16.22.36.22.58v2.35a2.6 2.6 0 0 1 1.8-.71c.88 0 1.6.32 2.13.98.54.65.8 1.5.8 2.54 0 1.03-.26 1.89-.8 2.54-.54.66-1.26.98-2.14.98a2.5 2.5 0 0 1-1.84-.72.74.74 0 0 1-.77.72c-.2 0-.4-.06-.54-.22Zm1.8-1.76c.3.37.68.55 1.14.55.49 0 .86-.18 1.13-.53.28-.36.43-.88.43-1.56s-.15-1.2-.43-1.56a1.33 1.33 0 0 0-1.13-.54c-.46 0-.83.19-1.13.56-.3.38-.46.88-.46 1.54s.16 1.16.46 1.54Zm-10.25 1.2c0 .22.08.4.24.54H2c.16.14.36.2.57.2a.8.8 0 0 0 .5-.16c.14-.1.23-.25.3-.43l.74-2.02h3.27l.76 2.02a.8.8 0 0 0 .8.59c.2 0 .4-.06.56-.2a.69.69 0 0 0 .25-.53c0-.13-.03-.26-.09-.4L6.71 6.44a1.1 1.1 0 0 0-.36-.51.97.97 0 0 0-.59-.18c-.22 0-.43.06-.6.18-.18.12-.3.3-.38.51l-2.94 7.68c-.06.14-.09.27-.09.4Zm5.13-3.3H4.62l1.13-3.1 1.13 3.1Z"
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