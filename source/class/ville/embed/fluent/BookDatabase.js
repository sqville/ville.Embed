/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookDatabase",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5Zm1 0v1h6V5H7ZM4 4v12c0 1.1.9 2 2 2h3.5c-.21-.3-.37-.63-.45-1H6a1 1 0 0 1-1-1h4v-1H5V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4.01c.34.02.68.06 1 .12V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm13 5.42A7.86 7.86 0 0 0 14.5 9c-2.49 0-4.5 1.12-4.5 2.5s2.01 2.5 4.5 2.5 4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08Zm1.17 4.72c-1 .55-2.29.86-3.67.86s-2.68-.3-3.67-.86c-.29-.16-.58-.36-.83-.59v2.95c0 1.38 2.01 2.5 4.5 2.5s4.5-1.12 4.5-2.5a2959.09 2959.09 0 0 1 0-2.95c-.25.23-.54.43-.83.6Z",
    FILLED : "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v4.13A8.88 8.88 0 0 0 14.5 8c-1.38 0-2.68.3-3.67.86-.9.5-1.74 1.33-1.82 2.46L9 11.3V16H5a1 1 0 0 0 1 1h3.05c.08.37.24.7.45 1H6a2 2 0 0 1-2-2V4Zm2.75 0a.75.75 0 0 0-.75.75v.5c0 .41.34.75.75.75h6.5c.41 0 .75-.34.75-.75v-.5a.75.75 0 0 0-.75-.75h-6.5ZM17 9.42A7.86 7.86 0 0 0 14.5 9c-2.49 0-4.5 1.12-4.5 2.5s2.01 2.5 4.5 2.5 4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08Zm1.17 4.72c-1 .55-2.29.86-3.67.86s-2.68-.3-3.67-.86c-.29-.16-.58-.36-.83-.59v2.95c0 1.38 2.01 2.5 4.5 2.5s4.5-1.12 4.5-2.5a2959.09 2959.09 0 0 1 0-2.95c-.25.23-.54.43-.83.6Z"
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