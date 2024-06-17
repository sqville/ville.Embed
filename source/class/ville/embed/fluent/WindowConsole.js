/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WindowConsole",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.65 9.15c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1 0 .7l-2 2a.5.5 0 0 1-.7-.7l1.64-1.65-1.64-1.65a.5.5 0 0 1 0-.7ZM14.5 13h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1ZM3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM16 6v-.5c0-.83-.68-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5V6h12ZM4 7v7.5c0 .83.67 1.5 1.5 1.5h9c.82 0 1.5-.67 1.5-1.5V7H4Z",
    FILLED : "M5.65 9.15c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1 0 .7l-2 2a.5.5 0 0 1-.7-.7l1.64-1.65-1.64-1.65a.5.5 0 0 1 0-.7ZM14.5 13h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1ZM3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9ZM4 7v7.5c0 .83.67 1.5 1.5 1.5h9c.82 0 1.5-.67 1.5-1.5V7H4Z"
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