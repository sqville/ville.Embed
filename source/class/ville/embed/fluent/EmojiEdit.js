/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EmojiEdit",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 10a8 8 0 0 0 7 7.94c.02-.1.03-.2.06-.29l.17-.7a7 7 0 1 1 7.7-7.94c.34-.03.69.01 1.02.1A8 8 0 0 0 2 10Zm8.27 4.67.82-.82a4 4 0 0 1-4.2-1.34.5.5 0 1 0-.78.63A5 5 0 0 0 10 15c.08-.12.18-.23.28-.33ZM13.5 8.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2.48 6.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z",
    FILLED : "M2 10a8 8 0 0 0 7 7.94c.02-.1.03-.2.06-.29l.37-1.5c.1-.41.3-.8.56-1.15a5 5 0 0 1-3.88-1.86.5.5 0 1 1 .78-.63 4 4 0 0 0 4.2 1.34l4.01-4a2.87 2.87 0 0 1 2.85-.73A8 8 0 0 0 2 10Zm9.5-1.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-5 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4.48 6.88 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z"
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