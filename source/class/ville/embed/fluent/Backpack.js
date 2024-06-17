/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Backpack",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.7 7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.4c.72 0 1.3-.58 1.3-1.3 0-.94-.76-1.7-1.7-1.7H8.7ZM8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3ZM10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5a6 6 0 0 0-3.5-5.46V4.5A2.5 2.5 0 0 0 10 2Zm5 10H5v-2a5 5 0 0 1 10 0v2Zm-8 2.5a.5.5 0 0 0 1 0V13h7v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h2v1.5ZM10 4c-.5 0-1 .06-1.47.18a1.5 1.5 0 0 1 2.94 0A6.01 6.01 0 0 0 10 4Z",
    FILLED : "M8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3ZM10 2a2.5 2.5 0 0 0-2.5 2.5v.04A6 6 0 0 0 4 10v2h12v-2a6 6 0 0 0-3.5-5.46V4.5A2.5 2.5 0 0 0 10 2Zm0 2c.5 0 1 .06 1.47.18a1.5 1.5 0 0 0-2.94 0C9 4.06 9.5 4 10 4ZM8.7 7h2.6c.94 0 1.7.76 1.7 1.7 0 .72-.58 1.3-1.3 1.3H8.3A1.3 1.3 0 0 1 7 8.7C7 7.76 7.76 7 8.7 7ZM7 14.5V13H4v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2H8v1.5a.5.5 0 0 1-1 0Z"
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