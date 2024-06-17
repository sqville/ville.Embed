/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NumberCircle1",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11 6.5a.5.5 0 0 0-.98-.12c-.1.4-.38.91-.73 1.38-.36.47-.75.86-1.07 1.07a.5.5 0 0 0 .56.84c.4-.27.84-.7 1.22-1.2v5.03a.5.5 0 1 0 1 0v-7ZM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-7 8a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
    FILLED : "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1-11.5v7a.5.5 0 0 1-1 0V8.48c-.38.48-.82.92-1.22 1.19a.5.5 0 1 1-.56-.84c.32-.2.71-.6 1.07-1.07.35-.47.62-.97.73-1.38a.5.5 0 0 1 .98.12Z"
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