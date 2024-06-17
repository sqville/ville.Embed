/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SubGrid",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 14v-3.5h2v2c0 .83.67 1.5 1.5 1.5h2v2H6a2 2 0 0 1-2-2Zm6.5 0h2c.83 0 1.5-.67 1.5-1.5v-2h2V14a2 2 0 0 1-2 2h-3.5v-2Zm2.5-3.5v2a.5.5 0 0 1-.5.5h-2v-2.5H13Zm1-1v-2c0-.83-.67-1.5-1.5-1.5h-2V4H14a2 2 0 0 1 2 2v3.5h-2ZM10.5 7h2c.28 0 .5.22.5.5v2h-2.5V7Zm-1-1h-2C6.67 6 6 6.67 6 7.5v2H4V6c0-1.1.9-2 2-2h3.5v2ZM7 9.5v-2c0-.28.22-.5.5-.5h2v2.5H7Zm0 1h2.5V13h-2a.5.5 0 0 1-.5-.5v-2Z",
    FILLED : "M6 10.5v2c0 .83.67 1.5 1.5 1.5h2v-3.5H6Zm0-1v-2C6 6.67 6.67 6 7.5 6h2v3.5H6ZM10.5 6v3.5H14v-2c0-.83-.67-1.5-1.5-1.5h-2Zm3.5 4.5h-3.5V14h2c.83 0 1.5-.67 1.5-1.5v-2ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm-2 7.5h2v-1H4V6c0-1.1.9-2 2-2h3.5v2h1V4H14a2 2 0 0 1 2 2v3.5h-2v1h2V14a2 2 0 0 1-2 2h-3.5v-2h-1v2H6a2 2 0 0 1-2-2v-3.5Z"
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