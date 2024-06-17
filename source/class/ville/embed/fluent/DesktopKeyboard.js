/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DesktopKeyboard",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v7.1c-.24-.06-.49-.1-.75-.1H17V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5v3.25c0 .26.04.51.1.75H6.5a.5.5 0 0 1 0-1H8v-2H4a2 2 0 0 1-2-2V4Zm9.75 8h5.5c.97 0 1.75.78 1.75 1.75v3.5c0 .97-.78 1.75-1.75 1.75h-5.5c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.97.78-1.75 1.75-1.75Zm.25 5.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm.5-3.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.5 1.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm.5-1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.5 1.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm.5-1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    FILLED : "M2 4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v7.1a2.75 2.75 0 0 0-.75-.1h-5.5A2.75 2.75 0 0 0 9 13.75v3.5c0 .26.04.51.1.75H6.5a.5.5 0 0 1 0-1H8v-2H4a2 2 0 0 1-2-2V4Zm9.75 8c-.97 0-1.75.78-1.75 1.75v3.5c0 .97.78 1.75 1.75 1.75h5.5c.97 0 1.75-.78 1.75-1.75v-3.5c0-.97-.78-1.75-1.75-1.75h-5.5Zm.25 5.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5-3.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm1.5 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm.5-1.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm1.5 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm.5-1.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z"
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