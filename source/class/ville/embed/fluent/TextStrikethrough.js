/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextStrikethrough",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.53 4.03A6.15 6.15 0 0 1 10 3a6.16 6.16 0 0 1 4.9 2.2.5.5 0 0 1-.8.6A5.17 5.17 0 0 0 10 4c-1.15 0-2.18.35-2.9.85C6.36 5.35 6 5.98 6 6.5c0 .9.43 1.48 1.17 1.93.36.22.78.4 1.25.57H6.23A3.02 3.02 0 0 1 5 6.5c0-.98.64-1.86 1.53-2.47ZM16.5 10a.5.5 0 0 1 0 1h-2.73A3.02 3.02 0 0 1 15 13.5c0 1.23-.72 2.12-1.68 2.68-.94.56-2.16.82-3.32.82a7.27 7.27 0 0 1-2.9-.48 4.55 4.55 0 0 1-2.02-1.74.5.5 0 0 1 .84-.56c.45.68.96 1.11 1.58 1.38.64.28 1.44.4 2.5.4 1.03 0 2.06-.24 2.82-.68.74-.44 1.18-1.05 1.18-1.82 0-.9-.43-1.48-1.17-1.93-.36-.22-.78-.4-1.25-.57H3.5a.5.5 0 0 1 0-1h13Z",
    FILLED : "M6.25 3.7c1-.7 2.33-1.2 3.75-1.2a6.4 6.4 0 0 1 5.1 2.3.75.75 0 0 1-1.2.9A4.92 4.92 0 0 0 10 4c-1.08 0-2.12.38-2.88.92C6.33 5.5 6 6.1 6 6.5c0 .78.38 1.29 1.11 1.71.18.1.38.2.59.29H5.16a3.16 3.16 0 0 1-.66-2c0-1.1.8-2.11 1.75-2.8ZM16.5 10a.75.75 0 0 1 0 1.5h-1.66c.4.52.66 1.18.66 2 0 1.36-.87 2.38-1.91 3.01a7.06 7.06 0 0 1-3.59.99 7.52 7.52 0 0 1-3-.5 4.8 4.8 0 0 1-2.12-1.83.75.75 0 1 1 1.24-.84c.43.65.9 1.05 1.48 1.3.6.25 1.35.37 2.4.37.97 0 2.02-.28 2.8-.76.8-.5 1.2-1.1 1.2-1.74 0-.78-.38-1.29-1.11-1.71a5.4 5.4 0 0 0-.59-.29H3.5a.75.75 0 0 1 0-1.5h13Z"
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