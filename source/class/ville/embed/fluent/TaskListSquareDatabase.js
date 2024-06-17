/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TaskListSquareDatabase",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.05a2.46 2.46 0 0 1-.05-.5V16H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v1.13c.35.06.68.14 1 .23V6a3 3 0 0 0-3-3H6Zm11 5.42A7.81 7.81 0 0 0 14.5 8C12.01 8 10 9.12 10 10.5s2.01 2.5 4.5 2.5 4.5-1.12 4.5-2.5c0-.87-.8-1.63-2-2.08Zm-8 2.83a.5.5 0 0 0-.35.15l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9 12.45v-1.2Zm.35-4.15a.5.5 0 0 0-.7-.7L7.23 7.8l-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1ZM14.5 14c1.38 0 2.68-.3 3.67-.86.29-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S10 17.88 10 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85Z",
    FILLED : "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.05a2.46 2.46 0 0 1-.05-.5v-4.04l-1.4 1.4a.5.5 0 0 1-.69 0l-.75-.68a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41a.5.5 0 0 1 .36-.15v-.75c0-1.22.88-2.11 1.83-2.64A7.68 7.68 0 0 1 14.5 7c.89 0 1.74.13 2.5.36V6a3 3 0 0 0-3-3H6Zm11 5.42A7.25 7.25 0 0 0 14.5 8C12.01 8 10 9.12 10 10.5s2.02 2.5 4.5 2.5c2.49 0 4.5-1.12 4.5-2.5 0-.87-.8-1.63-2-2.08ZM9.35 6.4c.2.2.2.5 0 .7L7.6 8.85a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 1 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0ZM14.5 14c1.38 0 2.68-.3 3.67-.86.29-.16.58-.36.83-.59v3.95c0 1.38-2.01 2.5-4.5 2.5S10 17.88 10 16.5v-3.95c.25.23.54.43.83.6 1 .54 2.29.85 3.67.85Z"
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