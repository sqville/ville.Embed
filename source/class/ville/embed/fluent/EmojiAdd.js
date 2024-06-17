/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EmojiAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 9a8 8 0 1 0-7.41 7.98A5.46 5.46 0 0 1 9.2 16H9a7 7 0 1 1 7-6.8c.34.1.67.23.98.39L17 9Zm-7.98 5c.03-.34.1-.68.19-1H9a4 4 0 0 1-3.11-1.49.5.5 0 1 0-.78.63A5 5 0 0 0 9 14h.02Zm3.48-6.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    FILLED : "M17 9a8 8 0 1 0-7.41 7.98A5.48 5.48 0 0 1 9.02 14H9a5 5 0 0 1-3.89-1.86.5.5 0 1 1 .78-.63A4 4 0 0 0 9.2 13a5.5 5.5 0 0 1 7.77-3.41L17 9Zm-6.5-1.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-5 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm13.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
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