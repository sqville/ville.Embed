/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CalculatorMultiple",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6Zm0 1h6v2H6V5Zm2 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM11 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM5.5 2A2.5 2.5 0 0 0 3 4.5v9A2.5 2.5 0 0 0 5.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 12.5 2h-7ZM4 4.5C4 3.67 4.67 3 5.5 3h7c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 4 13.5v-9ZM7.5 18a2.5 2.5 0 0 1-2-1h7a3.5 3.5 0 0 0 3.5-3.5v-9c.6.46 1 1.18 1 2v7a4.5 4.5 0 0 1-4.5 4.5h-5Z",
    FILLED : "M5.5 2A2.5 2.5 0 0 0 3 4.5v9A2.5 2.5 0 0 0 5.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 12.5 2h-7ZM5 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 2.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM11 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM7.5 18a2.5 2.5 0 0 1-2-1h7a3.5 3.5 0 0 0 3.5-3.5v-9c.6.46 1 1.18 1 2v7a4.5 4.5 0 0 1-4.5 4.5h-5Z"
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