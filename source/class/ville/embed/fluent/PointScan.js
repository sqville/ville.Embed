/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PointScan",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 2c.28 0 .5.22.5.5v4.02A5 5 0 0 1 13.48 11h4.02a.5.5 0 0 1 0 1h-4.02A5 5 0 0 1 9 16.48v1.02a.5.5 0 0 1-1 0v-1.02A5 5 0 0 1 3.52 12H2.5a.5.5 0 0 1 0-1h1.02A5 5 0 0 1 8 6.52V2.5c0-.28.22-.5.5-.5ZM4.53 12A4 4 0 0 0 8 15.47V12H4.53ZM8 11V7.53A4 4 0 0 0 4.53 11H8Zm1 1v3.47A4 4 0 0 0 12.47 12H9Zm3.47-1A4 4 0 0 0 9 7.53V11h3.47Z",
    FILLED : "M9 2.5a.5.5 0 0 0-1 0v4.02A5 5 0 0 0 3.52 11H8V6.52a5.07 5.07 0 0 1 1 0V2.5ZM2.5 11h1.02a5.06 5.06 0 0 0 0 1H2.5a.5.5 0 0 1 0-1ZM8 17.5v-1.02a5.07 5.07 0 0 0 1 0v1.02a.5.5 0 0 1-1 0Zm5.48-5.5h4.02a.5.5 0 0 0 0-1h-4.02a5.07 5.07 0 0 1 0 1H9v4.48A5 5 0 0 0 13.48 12ZM8 16.48A5 5 0 0 1 3.52 12H8v4.48ZM9 11h4.48A5 5 0 0 0 9 6.52V11Z"
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