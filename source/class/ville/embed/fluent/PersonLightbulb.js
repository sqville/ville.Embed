/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonLightbulb",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM3 13a2 2 0 0 1 2-2h6.54c-.18.3-.32.65-.41 1H5A1 1 0 0 0 4 13c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 10 17c.91 0 1.76-.1 2.52-.3l.2.99c-.85.2-1.77.31-2.72.31a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 13Zm15 0a3 3 0 0 1-1.3 2.47l-.1.53h-3.2l-.1-.53A3 3 0 1 1 18 13Zm-4.4 4 .24 1.2c.1.46.5.8.98.8h.36a1 1 0 0 0 .98-.8l.24-1.2h-2.8Z",
    FILLED : "M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-3 7a2 2 0 0 1 2-2h6.54a3.98 3.98 0 0 0 .85 5.03l.33 1.66c-.85.2-1.77.31-2.72.31a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 13Zm15 0a3 3 0 0 1-1.3 2.47l-.1.53h-3.2l-.1-.53A3 3 0 1 1 18 13Zm-4.4 4 .24 1.2c.1.46.5.8.98.8h.36a1 1 0 0 0 .98-.8l.24-1.2h-2.8Z"
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