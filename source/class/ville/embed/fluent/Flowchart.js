/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Flowchart",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 3C3.67 3 3 3.67 3 4.5v2C3 7.33 3.67 8 4.5 8H5v3.84a1 1 0 0 0-.2.16L3 13.8a1 1 0 0 0 0 1.4L4.8 17a1 1 0 0 0 1.4 0L8 15.2a1 1 0 0 0 .16-.2H12v.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v.5H8.16a1 1 0 0 0-.16-.2L6.2 12a1 1 0 0 0-.2-.16V8h.5C7.33 8 8 7.33 8 6.5v-2C8 3.67 7.33 3 6.5 3h-2ZM4 4.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2Zm-.3 10 1.8-1.8 1.8 1.8-1.8 1.8-1.8-1.8Zm9.8-1.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5Z",
    FILLED : "M3 4.5C3 3.67 3.67 3 4.5 3h2C7.33 3 8 3.67 8 4.5v2C8 7.33 7.33 8 6.5 8H6v3.84a1 1 0 0 1 .2.16L8 13.8a1 1 0 0 1 .16.2H12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5V15H8.16a1 1 0 0 1-.16.2L6.2 17a1 1 0 0 1-1.4 0L3 15.2a1 1 0 0 1 0-1.4L4.8 12a1 1 0 0 1 .2-.16V8h-.5A1.5 1.5 0 0 1 3 6.5v-2Z"
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