/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WindowInprivate",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM16 5.5V6h-1.3l1.15-1.14c.1.2.15.41.15.64Zm-.85-1.35L13.29 6h-2.82l2-2h2.03c.23 0 .45.05.65.15ZM11.05 4l-2 2H6.22l2-2h2.83ZM6.81 4l-2 2H4v-.5C4 4.67 4.67 4 5.5 4h1.3ZM4 8.23 5.22 7h2.83L4 11.05V8.23ZM9.47 7h2.82l-8.14 8.15A1.5 1.5 0 0 1 4 14.5v-2.03L9.47 7Zm4.24 0H16v.54L7.54 16H5.5a1.5 1.5 0 0 1-.65-.14L13.71 7ZM16 8.95v2.83L11.78 16H8.95L16 8.95Zm0 4.25v1.3c0 .83-.67 1.5-1.5 1.5h-1.3l2.8-2.8Z",
    FILLED : "M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9Zm10 3v.5h-1.29l1.14-1.15c.1.2.15.42.15.65Zm-.85-1.35L12.8 6.5H9.97l2-2H14c.23 0 .45.05.65.15Zm-4.1-.15-2 2H5.72l2-2h2.83Zm-4.24 0L4.5 6.31V6c0-.83.67-1.5 1.5-1.5h.31ZM7.05 8 4.5 10.55V8h2.55ZM4.5 11.97 8.47 8h2.83l-6.65 6.65A1.5 1.5 0 0 1 4.5 14v-2.03ZM12.7 8h2.8v.04L8.04 15.5H6a1.5 1.5 0 0 1-.64-.15L12.7 8Zm2.8 1.45v2.83l-3.22 3.22H9.45l6.05-6.05Zm0 4.24V14c0 .83-.67 1.5-1.5 1.5h-.3l1.8-1.8Z"
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