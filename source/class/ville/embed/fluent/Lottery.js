/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Lottery",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 3.67a2 2 0 0 1 3 0c.3-.17.6-.31.94-.42a3 3 0 0 0-4.88 0c.33.1.65.25.95.42ZM3 8a3 3 0 0 1 5.4-1.8c.35-.09.7-.15 1.08-.18a4 4 0 1 0-5.85 5.2c.07-.36.17-.71.3-1.05A3 3 0 0 1 3 8Zm11-4a4 4 0 0 0-3.48 2.02c.37.03.73.09 1.08.18a3 3 0 1 1 4.47 3.97c.13.34.23.69.3 1.05A4 4 0 0 0 14 4Zm-8.5 8.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM10 7a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm-1.5 3a.5.5 0 0 0 0 1h2.24l-.32.48a7.65 7.65 0 0 0-1.17 2.96.5.5 0 1 0 1 .12c.1-.9.56-1.82 1.02-2.54a11.1 11.1 0 0 1 .84-1.17l.01-.02a.5.5 0 0 0-.37-.83H8.5Z",
    FILLED : "M12.44 3.25c-.98.32-1.83.94-2.44 1.75a5.01 5.01 0 0 0-2.44-1.75 3 3 0 0 1 4.88 0Zm-8.81 7.97a6.5 6.5 0 0 1 5.85-5.2 4 4 0 1 0-5.85 5.2Zm12.74 0a4 4 0 1 0-5.85-5.2 6.5 6.5 0 0 1 5.85 5.2Zm-.87 1.28a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.5-2c0 .28.22.5.5.5h2.24l-.32.48a7.65 7.65 0 0 0-1.17 2.96.5.5 0 1 0 1 .12c.1-.9.56-1.82 1.02-2.54a11.1 11.1 0 0 1 .84-1.17l.01-.02a.5.5 0 0 0-.37-.83H8.5a.5.5 0 0 0-.5.5Z"
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