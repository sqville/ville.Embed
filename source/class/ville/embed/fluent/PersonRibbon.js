/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonRibbon",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c1.06 0 2.08-.13 3-.39v-1.04c-.87.28-1.9.43-3 .43a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 4 13a1 1 0 0 1 1-1h7.13c.09-.35.23-.7.4-1H5.01Zm11 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1c.73 0 1.41-.2 2-.54v2.29c0 .2-.21.31-.38.21L16 18l-1.62.96a.25.25 0 0 1-.38-.21v-2.29c.59.34 1.27.54 2 .54Z",
    FILLED : "M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18c1.06 0 2.08-.13 3-.39v-1.96a3.98 3.98 0 0 1-.47-4.65H5.01Zm11 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1c.73 0 1.41-.2 2-.54v2.29c0 .2-.21.31-.38.21L16 18l-1.62.96a.25.25 0 0 1-.38-.21v-2.29c.59.34 1.27.54 2 .54Z"
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