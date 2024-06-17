/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EmojiSmileSlight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.5 8.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-.03 4.55a.5.5 0 1 0-.44.9c.58.29 1.28.43 1.97.43s1.39-.14 1.97-.43a.5.5 0 1 0-.44-.9c-.42.21-.97.32-1.53.32a3.5 3.5 0 0 1-1.53-.32ZM18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0ZM3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    FILLED : "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM8.5 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4.03 5.55c.42.21.97.32 1.53.32a3.5 3.5 0 0 0 1.53-.32.5.5 0 1 1 .44.9c-.58.29-1.28.43-1.97.43s-1.39-.14-1.97-.43a.5.5 0 1 1 .44-.9Z"
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