/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TimeAndWeather",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.5 2.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm-.5 6a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5H11a.5.5 0 0 0 0-1h-1V8.5Zm0-3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM6.5 10a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm3.5 6c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5ZM2.5 9.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM16 10c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM4.15 15.15a.5.5 0 0 0 .7.7l1-1a.5.5 0 0 0-.7-.7l-1 1Zm10-10 1-1a.5.5 0 0 1 .7.7l-1 1a.5.5 0 0 1-.7-.7Zm-9.3-1a.5.5 0 1 0-.7.7l1 1a.5.5 0 1 0 .7-.7l-1-1Zm10 10 1 1a.5.5 0 0 1-.7.7l-1-1a.5.5 0 0 1 .7-.7Z",
    FILLED : "M10.5 2.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Zm-5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM10 8.5a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5H11a.5.5 0 0 0 0-1h-1V8.5Zm0 7.5c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5ZM2.5 9.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM16 10c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM4.15 15.15a.5.5 0 0 0 .7.7l1-1a.5.5 0 0 0-.7-.7l-1 1Zm10-10 1-1a.5.5 0 0 1 .7.7l-1 1a.5.5 0 0 1-.7-.7Zm-9.3-1a.5.5 0 1 0-.7.7l1 1a.5.5 0 1 0 .7-.7l-1-1Zm10 10 1 1a.5.5 0 0 1-.7.7l-1-1a.5.5 0 0 1 .7-.7Z"
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