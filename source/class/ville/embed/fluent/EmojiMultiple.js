/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EmojiMultiple",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7 2a5 5 0 0 1 4.9 4.03c-.33.03-.66.08-.98.16a4 4 0 1 0-4.73 4.73c-.08.32-.13.65-.16.99A5 5 0 0 1 7 2Zm.7 6.12c.24-.26.5-.5.78-.73a3 3 0 0 0-3.76.66.5.5 0 1 0 .76.65 2 2 0 0 1 2.21-.58ZM6.24 5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm1.25 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm4.6 1.82c.21.18.24.5.06.7a3.5 3.5 0 0 1-5.32.01.5.5 0 1 1 .76-.65 2.5 2.5 0 0 0 3.8 0 .5.5 0 0 1 .7-.06Zm-.6-1.82a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-2 5.75a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0-1a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z",
    FILLED : "M2 7a5 5 0 0 0 4.03 4.9 6.48 6.48 0 0 1 1.66-3.78 2 2 0 0 0-2.21.58.5.5 0 1 1-.76-.65 3 3 0 0 1 3.76-.66 6.47 6.47 0 0 1 3.43-1.36A5 5 0 0 0 2 7Zm4.25-1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm8.75 7a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-6.75-1a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm3.86 2.57a.5.5 0 0 0-.71.05 2.5 2.5 0 0 1-3.8 0 .5.5 0 1 0-.76.66 3.5 3.5 0 0 0 5.32 0 .5.5 0 0 0-.05-.71Zm-.61-1.82a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
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