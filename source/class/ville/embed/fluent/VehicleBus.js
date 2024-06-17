/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleBus",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9Zm-1 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 5.5A3.5 3.5 0 0 1 6.5 2h7A3.5 3.5 0 0 1 17 5.5V8h1a.5.5 0 0 1 0 1h-1v7.5c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V16H7v.5c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 3 16.5V9H2a.5.5 0 0 1 0-1h1V5.5Zm13 0A2.5 2.5 0 0 0 13.5 3h-7A2.5 2.5 0 0 0 4 5.5V10h12V5.5ZM14 16v.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V16h-2ZM4 16v.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V16H4Zm0-1h12v-4H4v4Z",
    FILLED : "M9 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9ZM3 5.5A3.5 3.5 0 0 1 6.5 2h7A3.5 3.5 0 0 1 17 5.5V8h1a.5.5 0 0 1 0 1h-1v7.5c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V16H7v.5c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 3 16.5V9H2a.5.5 0 0 1 0-1h1V5.5Zm13 0A2.5 2.5 0 0 0 13.5 3h-7A2.5 2.5 0 0 0 4 5.5V10h12V5.5ZM14 16v.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V16h-2ZM4 16v.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V16H4Zm4-3a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
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