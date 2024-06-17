/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DatabaseArrowUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 5c0-1 .88-1.76 1.9-2.22 1.3-.54 2.7-.8 4.1-.78 1.4-.03 2.8.24 4.1.78C15.13 3.24 16 3.99 16 5v4.2c-.32-.08-.66-.15-1-.18V6.7c-.28.2-.58.38-.9.52-1.3.54-2.7.8-4.1.78-1.4.03-2.8-.24-4.1-.78A4.92 4.92 0 0 1 5 6.7V15c0 .37.36.87 1.32 1.31A9.2 9.2 0 0 0 9.6 17c.18.36.4.7.66 1H10c-1.4.03-2.8-.24-4.1-.78C4.87 16.75 4 16.01 4 15V5Zm1 0c0 .37.36.87 1.32 1.31A9.2 9.2 0 0 0 10 7a9.2 9.2 0 0 0 3.68-.69C14.64 5.87 15 5.37 15 5c0-.37-.36-.88-1.32-1.31A9.2 9.2 0 0 0 10 3a9.2 9.2 0 0 0-3.68.69C5.36 4.12 5 4.63 5 5Zm5 9.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm4.85-2.35a.5.5 0 0 0-.35-.15.5.5 0 0 0-.35.15l-2 2a.5.5 0 0 0 .7.7L14 13.71v2.79a.5.5 0 0 0 1 0v-2.8l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2Z",
    FILLED : "M10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3Zm4.69.02c.47-.24.93-.54 1.31-.9v2.09A5.5 5.5 0 0 0 10.26 18H10c-3.31 0-6-1.34-6-3V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98ZM10 14.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Zm4.85-2.35a.5.5 0 0 0-.35-.15.5.5 0 0 0-.35.15l-2 2a.5.5 0 0 0 .7.7L14 13.71v2.79a.5.5 0 0 0 1 0v-2.8l1.15 1.15a.5.5 0 0 0 .7-.7l-2-2Z"
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