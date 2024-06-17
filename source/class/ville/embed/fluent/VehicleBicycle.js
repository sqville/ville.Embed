/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleBicycle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.5 2a.5.5 0 0 0 0 1h1.59l.6 3H7V4.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1H6v1.46L5.58 9H5.5A3.5 3.5 0 1 0 9 12.67l3.97-5.3.36 1.83a3.5 3.5 0 1 0 .98-.2L13 2.4a.5.5 0 0 0-.49-.4h-2ZM3 12.5A2.5 2.5 0 0 1 5.41 10l-.4 2.42a.5.5 0 0 0 .49.58h2.45A2.5 2.5 0 0 1 3 12.5Zm3.09-.5.3-1.83c.8.3 1.39.99 1.56 1.83H6.09Zm.47-2.84L6.92 7H12l-3.22 4.29a3.5 3.5 0 0 0-2.22-2.13Zm6.97 1.04.48 2.4a.5.5 0 0 0 .98-.2l-.48-2.4a2.5 2.5 0 1 1-.98.2Z",
    FILLED : "M10.75 2a.75.75 0 0 0 0 1.5h1.13l.36 2H7.25v-.75A.75.75 0 0 0 6.5 4h-2a.75.75 0 0 0 0 1.5h1.25v.7L5.4 9.02a3.75 3.75 0 1 0 4.06 3.2l3.23-4.3.24 1.32A3.75 3.75 0 1 0 14.41 9l-1.17-6.39A.75.75 0 0 0 12.5 2h-1.75Zm-3.6 5.13A.75.75 0 0 0 7.2 7h4.29l-2.69 3.58a3.76 3.76 0 0 0-1.92-1.4l.26-2.05ZM3.5 12.75c0-1.05.73-1.94 1.7-2.18L5 12.16a.75.75 0 0 0 .75.84h2.24a2.25 2.25 0 0 1-4.49-.25Zm3.1-1.25.1-.8c.37.18.7.46.92.8H6.6Zm6.61-.75.3 1.64A.75.75 0 0 0 15 12.1l-.3-1.57a2.25 2.25 0 1 1-1.48.21Z"
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