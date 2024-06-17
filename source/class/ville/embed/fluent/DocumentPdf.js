/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentPdf",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-.17h.33a1.17 1.17 0 0 0 0-2.33H6.5Zm.83 1.33H7V12h.33a.17.17 0 0 1 0 .33ZM12 11.5c0-.28.23-.5.5-.5h1a.5.5 0 0 1 0 1H13v.33h.5a.5.5 0 1 1 0 1H13v.17a.5.5 0 0 1-1 0v-2ZM9.5 11a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h.5a1.5 1.5 0 0 0 0-3h-.5Zm.5 2v-1a.5.5 0 0 1 0 1ZM4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06v1.67c.58.2 1 .76 1 1.42v4c0 .65-.42 1.2-1 1.41V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-.09c-.58-.2-1-.76-1-1.41v-4c0-.66.42-1.21 1-1.42V4Zm11 4h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v5h10V8ZM5 16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1H5Zm6-12.8v3.3c0 .28.22.5.5.5h3.3L11 3.2ZM4.5 10a.5.5 0 0 0-.5.5v4c0 .28.23.5.5.5h11a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-11Z",
    FILLED : "M6.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-.17h.33a1.17 1.17 0 0 0 0-2.33H6.5Zm.83 1.33H7V12h.33a.17.17 0 0 1 0 .33ZM12 11.5c0-.28.23-.5.5-.5h1a.5.5 0 1 1 0 1H13v.33h.5a.5.5 0 1 1 0 1H13v.17a.5.5 0 1 1-1 0v-2ZM9.5 11a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5h.5a1.5 1.5 0 0 0 0-3h-.5Zm.5 2v-1a.5.5 0 0 1 0 1Zm0-6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.58c-.58.2-1 .76-1 1.42v4c0 .65.42 1.2 1 1.41v.59c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-.59c.58-.2 1-.76 1-1.41v-4c0-.66-.42-1.21-1-1.42V8h-4.5A1.5 1.5 0 0 1 10 6.5ZM4.5 10h11c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-4c0-.28.23-.5.5-.5ZM11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Z"
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