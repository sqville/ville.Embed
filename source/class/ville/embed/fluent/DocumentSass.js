/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentSass",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06v3.64a2.51 2.51 0 0 0-1 0V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v9.4a2.5 2.5 0 0 0-1-1.9V4Zm7.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5Zm-9 6a.5.5 0 0 0-.5.5v.24c0 .27.16.53.4.65l.64.32c.59.3.96.9.96 1.55v.24a1.5 1.5 0 0 1-3 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0v-.24a.74.74 0 0 0-.4-.65l-.64-.32c-.59-.3-.96-.9-.96-1.55v-.24a1.5 1.5 0 0 1 3 0 .5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5Zm4.97-.67a.5.5 0 0 0-.94 0l-1.75 5a.5.5 0 1 0 .94.34l.23-.67h2.1l.23.67a.5.5 0 1 0 .94-.34l-1.75-5ZM7.7 16H6.3l.7-1.99.7 1.99Zm3.3-2.5a.5.5 0 0 1 1 0 .5.5 0 0 0 1 0 1.5 1.5 0 0 0-3 0v.24c0 .65.37 1.25.96 1.55l.63.32c.25.12.41.38.41.65v.24a.5.5 0 0 1-1 0 .5.5 0 0 0-1 0 1.5 1.5 0 0 0 3 0v-.24c0-.65-.37-1.25-.96-1.55l-.63-.32a.74.74 0 0 1-.41-.65v-.24Zm4.5-.5a.5.5 0 0 0-.5.5v.24c0 .27.16.53.4.65l.64.32c.59.3.96.9.96 1.55v.24a1.5 1.5 0 0 1-3 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0v-.24a.74.74 0 0 0-.4-.65l-.64-.32c-.59-.3-.96-.9-.96-1.55v-.24a1.5 1.5 0 0 1 3 0 .5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5Z",
    FILLED : "M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v8a2.5 2.5 0 0 1 .98 2.22l.6-1.72a1.5 1.5 0 0 1 2.84 0L9 13.67v-.17a2.5 2.5 0 0 1 4.5-1.5 2.5 2.5 0 0 1 2.5-.95V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5ZM2.5 13a.5.5 0 0 0-.5.5v.24c0 .27.16.53.4.65l.64.32c.59.3.96.9.96 1.55v.24a1.5 1.5 0 0 1-3 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0v-.24a.74.74 0 0 0-.4-.65l-.64-.32c-.59-.3-.96-.9-.96-1.55v-.24a1.5 1.5 0 0 1 3 0 .5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5Zm4.97-.67a.5.5 0 0 0-.94 0l-1.75 5a.5.5 0 1 0 .94.34l.23-.67h2.1l.23.67a.5.5 0 1 0 .94-.34l-1.75-5ZM7.7 16H6.3l.7-1.99.7 1.99Zm3.3-2.5a.5.5 0 0 1 1 0 .5.5 0 0 0 1 0 1.5 1.5 0 0 0-3 0v.24c0 .65.37 1.25.96 1.55l.63.32c.25.12.41.38.41.65v.24a.5.5 0 0 1-1 0 .5.5 0 0 0-1 0 1.5 1.5 0 0 0 3 0v-.24c0-.65-.37-1.25-.96-1.55l-.63-.32a.74.74 0 0 1-.41-.65v-.24Zm4.5-.5a.5.5 0 0 0-.5.5v.24c0 .27.16.53.4.65l.64.32c.59.3.96.9.96 1.55v.24a1.5 1.5 0 0 1-3 0 .5.5 0 0 1 1 0 .5.5 0 0 0 1 0v-.24a.74.74 0 0 0-.4-.65l-.64-.32c-.59-.3-.96-.9-.96-1.55v-.24a1.5 1.5 0 0 1 3 0 .5.5 0 0 1-1 0 .5.5 0 0 0-.5-.5Z"
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