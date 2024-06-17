/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BorderAll",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v3.5h5.5V4H6Zm4.5 0v5.5H16V6a2 2 0 0 0-2-2h-3.5Zm5.5 6.5h-5.5V16H14a2 2 0 0 0 2-2v-3.5ZM9.5 16v-5.5H4V14c0 1.1.9 2 2 2h3.5Z",
    FILLED : "M6.25 4.5c-.97 0-1.75.78-1.75 1.75v3h4.75V4.5h-3Zm4.5 0v4.75h4.75v-3c0-.97-.78-1.75-1.75-1.75h-3Zm4.75 6.25h-4.75v4.75h3c.97 0 1.75-.78 1.75-1.75v-3ZM9.25 15.5v-4.75H4.5v3c0 .97.78 1.75 1.75 1.75h3ZM3 6.25C3 4.45 4.46 3 6.25 3h7.5C15.55 3 17 4.46 17 6.25v7.5c0 1.8-1.46 3.25-3.25 3.25h-7.5A3.25 3.25 0 0 1 3 13.75v-7.5Z"
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