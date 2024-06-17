/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentBorderPrint",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.5 2A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18H11a2 2 0 0 1-1.73-1H6.5A1.5 1.5 0 0 1 5 15.5v-11C5 3.67 5.67 3 6.5 3h7c.83 0 1.5.67 1.5 1.5V9h.5c.17 0 .34.02.5.05V4.5A2.5 2.5 0 0 0 13.5 2h-7ZM14 4.75V9h-.5c-.17 0-.34.02-.5.05V5H7v10h2v1H6.75a.75.75 0 0 1-.75-.75V4.75c0-.41.34-.75.75-.75h6.5c.41 0 .75.34.75.75ZM13.5 10c-.83 0-1.5.67-1.5 1.5v.5h-.5c-.83 0-1.5.67-1.5 1.5V16a1 1 0 0 0 1 1h1v.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V17h1a1 1 0 0 0 1-1v-2.5c0-.83-.67-1.5-1.5-1.5H17v-.5c0-.83-.67-1.5-1.5-1.5h-2Zm2.5 2h-3v-.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v.5Zm-2.5 4h2c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1c0-.28.22-.5.5-.5Z",
    FILLED : "M6.5 2A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18H11a2 2 0 0 1-1.73-1H6.5A1.5 1.5 0 0 1 5 15.5v-11C5 3.67 5.67 3 6.5 3h7c.83 0 1.5.67 1.5 1.5V9h.5c.17 0 .34.02.5.05V4.5A2.5 2.5 0 0 0 13.5 2h-7Zm7 7h.5V4.75a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0-.75.75v10.5c0 .41.34.75.75.75H9v-2.5a2.5 2.5 0 0 1 2.04-2.46A2.5 2.5 0 0 1 13.5 9Zm0 1c-.83 0-1.5.67-1.5 1.5v.5h-.5c-.83 0-1.5.67-1.5 1.5V16a1 1 0 0 0 1 1h1v.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V17h1a1 1 0 0 0 1-1v-2.5c0-.83-.67-1.5-1.5-1.5H17v-.5c0-.83-.67-1.5-1.5-1.5h-2Zm2.5 2h-3v-.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v.5Zm-2.5 4h2c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1c0-.28.22-.5.5-.5Z"
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