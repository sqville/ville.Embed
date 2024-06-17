/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ConvertRange",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 2a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5ZM4 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4Zm3 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H7Zm4.88-3.5H5a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1.09a1.5 1.5 0 0 1-1 0V16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6.09c.07-.2.19-.4.35-.56l.44-.44ZM18 7.5a.5.5 0 0 0-1 0v2c0 .83-.67 1.5-1.5 1.5h-1.8l1.15-1.15a.5.5 0 0 0-.7-.7l-2 2a.5.5 0 0 0 0 .7l2 2a.5.5 0 0 0 .7-.7L13.71 12h1.79A2.5 2.5 0 0 0 18 9.5v-2Z",
    FILLED : "M5 2a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm12.5 5c.28 0 .5.22.5.5v2a2.5 2.5 0 0 1-2.5 2.5h-1.8l1.15 1.15a.5.5 0 0 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 0 1 .7.7L13.71 11h1.79c.83 0 1.5-.67 1.5-1.5v-2c0-.28.22-.5.5-.5Zm-5.62 3H5a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1.09a1.5 1.5 0 0 1-1.56-.35l-2-2a1.5 1.5 0 0 1 0-2.12l.44-.44ZM6.5 14c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5Z"
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