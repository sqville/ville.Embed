/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalendarVideo",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14H5v-1h-.5A1.5 1.5 0 0 1 3 11.5V6h10v2h1V4.5A2.5 2.5 0 0 0 11.5 2h-7Zm7 1c.83 0 1.5.67 1.5 1.5V5H3v-.5C3 3.67 3.67 3 4.5 3h7ZM6 11.5A2.5 2.5 0 0 1 8.5 9h5a2.5 2.5 0 0 1 2.5 2.5v.13l2.04-1.4c.82-.58 1.96.01 1.96 1.02v5.5c0 1-1.14 1.6-1.96 1.03L16 16.38v.12a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 6 16.5v-5Zm12.6-.45-2.6 1.8v2.3l2.6 1.8c.17.12.4 0 .4-.2v-5.5c0-.2-.23-.32-.4-.2ZM8.5 10c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5Z",
    FILLED : "M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V5H2v-.5ZM2 6h12v2H8.5A3.5 3.5 0 0 0 5 11.5V14h-.5A2.5 2.5 0 0 1 2 11.5V6Zm4 5.5A2.5 2.5 0 0 1 8.5 9h5a2.5 2.5 0 0 1 2.5 2.5v.13l2.04-1.4c.82-.58 1.96.01 1.96 1.02v5.5c0 1-1.14 1.6-1.96 1.03L16 16.38v.12a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 6 16.5v-5Z"
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