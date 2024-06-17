/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BackpackAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v5a3 3 0 0 0 3 3h3.26a5.5 5.5 0 0 1-.66-1H7a2 2 0 0 1-2-2v-2h2v1.5a.5.5 0 0 0 1 0V13h1.2c.1-.35.24-.68.4-1H5v-2a5 5 0 0 1 9.9-.99c.36.03.71.1 1.05.18a6 6 0 0 0-3.45-4.65V4.5A2.5 2.5 0 0 0 10 2Zm0 2c-.5 0-1 .06-1.47.18a1.5 1.5 0 0 1 2.94 0A6.01 6.01 0 0 0 10 4Zm1.34 6c.46-.33.98-.59 1.54-.76.08-.16.12-.35.12-.54 0-.94-.76-1.7-1.7-1.7H8.7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.04ZM8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3Zm11 5.8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    FILLED : "M7.5 4.5a2.5 2.5 0 0 1 5 0v.04a6 6 0 0 1 3.45 4.65 5.5 5.5 0 0 0-3.07.05c.08-.16.12-.35.12-.54 0-.94-.76-1.7-1.7-1.7H8.7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.04a5.53 5.53 0 0 0-1.74 2H4v-2a6 6 0 0 1 3.5-5.46V4.5Zm3.97-.32a1.5 1.5 0 0 0-2.94 0 6.01 6.01 0 0 1 2.94 0ZM9 14.5c0-.52.07-1.02.2-1.5H8v1.5a.5.5 0 0 1-1 0V13H4v2a3 3 0 0 0 3 3h3.26A5.48 5.48 0 0 1 9 14.5ZM8.7 8a.7.7 0 0 0-.7.7c0 .17.13.3.3.3h3.4a.3.3 0 0 0 .3-.3.7.7 0 0 0-.7-.7H8.7ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
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