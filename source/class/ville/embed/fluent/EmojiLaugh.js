/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EmojiLaugh",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.5 8.08c.04-.3.33-.58.75-.58.41 0 .7.28.75.58A.5.5 0 1 0 9 7.92 1.73 1.73 0 0 0 7.25 6.5c-.86 0-1.62.59-1.74 1.42a.5.5 0 1 0 .98.16Zm6.25-.58c-.42 0-.71.28-.76.58a.5.5 0 0 1-.98-.16c.12-.83.88-1.42 1.74-1.42.85 0 1.61.59 1.74 1.42a.5.5 0 0 1-.99.16c-.04-.3-.34-.58-.75-.58ZM5.5 10a.5.5 0 0 0-.5.55A4.86 4.86 0 0 0 10 15c2.84 0 4.75-2 5-4.45a.5.5 0 0 0-.5-.55h-9Zm4.5 4a3.85 3.85 0 0 1-3.92-3h7.83c-.4 1.7-1.83 3-3.91 3Zm0-12a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    FILLED : "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM6.5 8.08a.5.5 0 1 1-1-.16c.13-.83.9-1.42 1.75-1.42s1.61.59 1.74 1.42a.5.5 0 1 1-.99.16c-.04-.3-.34-.58-.75-.58-.42 0-.71.28-.76.58Zm5.5 0a.5.5 0 0 1-1-.16c.13-.83.9-1.42 1.75-1.42s1.61.59 1.74 1.42a.5.5 0 0 1-.99.16c-.04-.3-.34-.58-.75-.58-.42 0-.71.28-.76.58ZM5.5 10.5h9c-.22 2.2-1.93 4-4.5 4a4.36 4.36 0 0 1-4.5-4Z"
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