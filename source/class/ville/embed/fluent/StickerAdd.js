/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StickerAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6c-.32-.16-.65-.3-1-.4V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h3.2c.1.35.24.68.4 1H6a3 3 0 0 1-3-3V6Zm4.97 6.55c.3.15.72.31 1.25.4-.09.3-.16.64-.19.97a5.22 5.22 0 0 1-2.14-.86 2.93 2.93 0 0 1-.22-.18l-.01-.02h-.01a.5.5 0 0 1 .7-.72 1 1 0 0 0 .14.12c.1.07.26.18.48.3ZM7.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    FILLED : "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6a5.5 5.5 0 0 0-7.78 3.34 4.23 4.23 0 0 1-1.73-.68 1.97 1.97 0 0 1-.14-.11.5.5 0 0 0-.7.7v.01l.02.02a2 2 0 0 0 .22.18 5.22 5.22 0 0 0 2.14.87A5.56 5.56 0 0 0 9.6 17H6a3 3 0 0 1-3-3V6Zm4.5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm5.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
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