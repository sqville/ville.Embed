/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonSupport",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 14.5a2 2 0 0 1-2-1.84 6 6 0 1 1 7.98-6.16c.02.28-.2.5-.48.5a.54.54 0 0 1-.52-.5 5 5 0 1 0-6.8 5.16A2 2 0 1 1 10 14.5ZM5 12h.1c.39.38.82.72 1.3 1H5a1 1 0 0 0-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 10 18c1.74 0 3.26-.36 4.33-1.05A3.36 3.36 0 0 0 16 14a1 1 0 0 0-1-1h-2.04a3.02 3.02 0 0 0 0-1H15a2 2 0 0 1 2 2c0 1.7-.83 2.97-2.13 3.8A9.14 9.14 0 0 1 10 19a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 14a2 2 0 0 1 2-2Zm9-5a4 4 0 0 1-1.87 3.39 3 3 0 0 0-.93-.64 3 3 0 1 0-2.4 0 3 3 0 0 0-.93.64A4.01 4.01 0 0 1 6 7a4 4 0 1 1 8 0Z",
    FILLED : "M10 14.5a2 2 0 0 1-2-1.84 6 6 0 1 1 7.98-6.16c.02.28-.2.5-.48.5a.54.54 0 0 1-.52-.5 5 5 0 1 0-6.8 5.16A2 2 0 1 1 10 14.5ZM5 12h.1a7.01 7.01 0 0 0 2.03 1.39A3 3 0 0 0 12.96 12H15a2 2 0 0 1 2 2c0 1.7-.83 2.97-2.13 3.8A9.14 9.14 0 0 1 10 19a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 14a2 2 0 0 1 2-2Zm9-5a4 4 0 0 1-1.87 3.39 3 3 0 0 0-4.26 0A4.01 4.01 0 0 1 6 7a4 4 0 1 1 8 0Z"
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