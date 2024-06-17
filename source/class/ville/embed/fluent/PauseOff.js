/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PauseOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m3 3.7-.85-.85a.5.5 0 1 1 .7-.7l15 15a.5.5 0 0 1-.7.7l-.45-.45c-.28.37-.71.6-1.2.6h-2a1.5 1.5 0 0 1-1.5-1.5v-3.8l-4-4v7.8c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 0 1 3 16.5V3.7Zm4 4-3-3v11.8c0 .28.22.5.5.5h2a.5.5 0 0 0 .5-.5V7.7Zm6 6v2.8c0 .28.22.5.5.5h2a.5.5 0 0 0 .47-.32L13 13.7ZM7 3.5v1.38l1 1V3.5C8 2.67 7.33 2 6.5 2h-2c-.12 0-.23.01-.34.04l.96.96H6.5c.28 0 .5.22.5.5Zm5 6.38 1 1V3.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v10.38l1 1V3.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v6.38Z",
    FILLED : "M3 3.7v12.8c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V8.7l4 4v3.8c0 .83.67 1.5 1.5 1.5h2c.49 0 .92-.23 1.2-.6l.45.45a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7l.85.86Zm9 6.18 5 5V3.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v6.38ZM4.16 2.04 8 5.88V3.5C8 2.67 7.33 2 6.5 2h-2c-.12 0-.23.01-.34.04Z"
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