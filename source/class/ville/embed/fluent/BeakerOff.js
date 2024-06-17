/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BeakerOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7L6.99 7.7v.99a3.5 3.5 0 0 1-.41 1.66l-2.4 4.44A1.5 1.5 0 0 0 5.5 17h9c.5 0 .93-.24 1.2-.6l1.45 1.45a.5.5 0 0 0 .7-.7l-15-15Zm12.12 13.52a.5.5 0 0 1-.47.33h-9a.5.5 0 0 1-.44-.74L6.28 13h6.01l2.68 2.67ZM11.29 12H6.82l.64-1.18a4.5 4.5 0 0 0 .53-2.12l3.3 3.3ZM12 8.68c0 .5.08.98.24 1.44l2.3 2.3-1.12-2.08A3.5 3.5 0 0 1 13 8.68V4h1a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.49.4l.61.6H7v.87l1 1V4H12v4.68Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7L6.99 7.7v.99a3.5 3.5 0 0 1-.41 1.66L5.68 12h5.61l1 1H5.15l-.97 1.79A1.5 1.5 0 0 0 5.5 17h9c.5 0 .93-.24 1.2-.6l1.45 1.45a.5.5 0 0 0 .7-.7l-15-15ZM7 4.87 14.12 12h.2l-.9-1.66A3.5 3.5 0 0 1 13 8.68V4h1a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.49.4l.61.6H7v.87Z"
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