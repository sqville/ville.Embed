/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Wifi2",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.6 9.36c.47.47.88 1.04 1.2 1.65a.5.5 0 1 1-.9.46 5.45 5.45 0 0 0-9.73-.01.5.5 0 0 1-.89-.46A6.45 6.45 0 0 1 14.6 9.35Zm-1.71 2.5c.35.35.64.78.85 1.25a.5.5 0 1 1-.92.4 3.03 3.03 0 0 0-5.56-.01.5.5 0 1 1-.92-.4 4.03 4.03 0 0 1 6.54-1.24Zm-1.93 1.93a1.3 1.3 0 1 1-1.83 1.83 1.3 1.3 0 0 1 1.83-1.83Z",
    FILLED : "M14.59 9.45c.47.47.88 1.05 1.2 1.65a.75.75 0 0 1-1.34.69 4.94 4.94 0 0 0-8.82-.02.75.75 0 1 1-1.34-.67 6.44 6.44 0 0 1 10.3-1.64Zm-1.64 2.4c.37.35.67.8.87 1.27a.75.75 0 0 1-1.37.6 2.63 2.63 0 0 0-4.82-.01.75.75 0 1 1-1.38-.6 4.13 4.13 0 0 1 6.7-1.27Zm-2.03 2.03a1.24 1.24 0 1 1-1.76 1.76 1.24 1.24 0 0 1 1.76-1.76Z"
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