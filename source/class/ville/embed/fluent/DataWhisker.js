/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DataWhisker",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 2a.5.5 0 0 0 0 1h1v1h-.5C4.67 4 4 4.67 4 5.5v7c0 .83.67 1.5 1.5 1.5H6v1H5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H7v-1h.5c.83 0 1.5-.67 1.5-1.5v-7C9 4.67 8.33 4 7.5 4H7V3h1a.5.5 0 0 0 0-1H5Zm0 10.5V11h3v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5Zm0-7c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V10H5V5.5ZM12 4a.5.5 0 0 0 0 1h1v1h-.5c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5h.5v1h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-1v-1h.5c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5H14V5h1a.5.5 0 0 0 0-1h-3Zm3 5h-3V7.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V9Zm-3 1h3v4.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V10Z",
    FILLED : "M5 2a.5.5 0 0 0 0 1h1v1h-.5C4.67 4 4 4.67 4 5.5V10h5V5.5C9 4.67 8.33 4 7.5 4H7V3h1a.5.5 0 0 0 0-1H5Zm7 2a.5.5 0 0 0 0 1h1v1h-.5c-.83 0-1.5.67-1.5 1.5V9h5V7.5c0-.83-.67-1.5-1.5-1.5H14V5h1a.5.5 0 0 0 0-1h-3ZM4.5 15.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1H7v-1h.5c.83 0 1.5-.67 1.5-1.5V11H4v1.5c0 .83.67 1.5 1.5 1.5H6v1H5a.5.5 0 0 0-.5.5ZM12 18a.5.5 0 0 1 0-1h1v-1h-.5a1.5 1.5 0 0 1-1.5-1.5V10h5v4.5c0 .83-.67 1.5-1.5 1.5H14v1h1a.5.5 0 0 1 0 1h-3Z"
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