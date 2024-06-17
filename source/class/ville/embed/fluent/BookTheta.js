/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookTheta",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8ZM7 9c0-1.06.3-2.04.83-2.77A2.7 2.7 0 0 1 10 5c.9 0 1.66.5 2.17 1.23.52.73.83 1.71.83 2.77s-.3 2.04-.83 2.77A2.7 2.7 0 0 1 10 13c-.9 0-1.66-.5-2.17-1.23A4.79 4.79 0 0 1 7 9Zm4.97.5H8.03c.07.67.3 1.25.6 1.68.4.54.88.82 1.37.82.49 0 .97-.28 1.36-.82.31-.43.54-1.01.61-1.68Zm0-1a3.62 3.62 0 0 0-.6-1.68C10.96 6.28 10.48 6 10 6c-.49 0-.97.28-1.36.82a3.62 3.62 0 0 0-.61 1.68h3.94Z",
    FILLED : "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm1 7c0-1.06.3-2.04.83-2.77A2.7 2.7 0 0 1 10 5c.9 0 1.66.5 2.17 1.23.52.73.83 1.71.83 2.77s-.3 2.04-.83 2.77A2.7 2.7 0 0 1 10 13c-.9 0-1.66-.5-2.17-1.23A4.79 4.79 0 0 1 7 9Zm4.97.5c-.07.67-.3 1.25-.6 1.68-.4.54-.88.82-1.37.82-.49 0-.97-.28-1.36-.82a3.62 3.62 0 0 1-.61-1.68h3.94Zm0-1a3.62 3.62 0 0 0-.6-1.68C10.96 6.28 10.48 6 10 6c-.49 0-.97.28-1.36.82a3.62 3.62 0 0 0-.61 1.68h3.94Z"
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