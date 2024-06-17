/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleTruck",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 .5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4 2a2 2 0 0 0-2 2v10.5c0 .83.67 1.5 1.5 1.5H4v.5c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V16h4v.5c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V16h.5c.83 0 1.5-.67 1.5-1.5V4a2 2 0 0 0-2-2H4Zm9 14.5V16h2v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5ZM7 16v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V16h2ZM3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10.5a.5.5 0 0 1-.5.5H16V9.75c0-.2-.03-.41-.07-.61l-.76-3A1.5 1.5 0 0 0 13.72 5H6.28a1.5 1.5 0 0 0-1.45 1.14l-.76 3c-.04.2-.07.4-.07.6V15h-.5a.5.5 0 0 1-.5-.5V4Zm2 11v-5h10v5H5Zm.14-6 .66-2.62A.5.5 0 0 1 6.28 6h7.44a.5.5 0 0 1 .48.38L14.86 9H5.14Z",
    FILLED : "M4 2a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1V9.8c0-.25.04-.5.1-.72L4.16 5.6A2.25 2.25 0 0 1 6.3 4h7.4c1 0 1.87.65 2.15 1.6l1.04 3.48c.07.23.11.47.11.71V16a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H4Zm12 7.8v6.7c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V16H8v.5c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 0 1 4 16.5V9.8c0-.15.02-.3.06-.44L5.1 5.9c.16-.53.65-.89 1.2-.89h7.4c.55 0 1.04.36 1.2.9l1.04 3.46c.04.14.06.29.06.43ZM5 16.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V16H5v.5ZM14.86 9l-.66-2.62a.5.5 0 0 0-.48-.38H6.28a.5.5 0 0 0-.48.38L5.14 9h9.72ZM13 16.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V16h-2v.5ZM7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-5.5 1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"
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