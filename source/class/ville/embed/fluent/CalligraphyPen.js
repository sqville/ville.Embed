/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalligraphyPen",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 2.5a.5.5 0 0 0-1 0v2C5 5.33 5.67 6 6.5 6h.21L5.25 9.08a2.5 2.5 0 0 0 .1 2.33l3.47 5.91a1.37 1.37 0 0 0 2.36 0l3.47-5.9a2.5 2.5 0 0 0 .1-2.34L13.29 6h.21c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2ZM12.18 6l1.67 3.5c.2.46.18.98-.07 1.4l-3.28 5.61v-5.64a1 1 0 1 0-1 0v5.64l-3.28-5.6a1.5 1.5 0 0 1-.07-1.4L7.82 6h4.36Z",
    FILLED : "M6 2.5a.5.5 0 0 0-1 0v2C5 5.33 5.67 6 6.5 6h.2L5.24 9.08a2.5 2.5 0 0 0 .1 2.33l3.47 5.91c.16.27.4.48.69.59v-7.04a1 1 0 1 1 1 0v7.03c.28-.11.52-.31.67-.58l3.47-5.9a2.5 2.5 0 0 0 .1-2.34L13.28 6h.22c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2Z"
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