/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LocationRipple",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 3a5 5 0 0 0-5 5c0 1.13.67 2.44 1.61 3.71a22.92 22.92 0 0 0 2.82 3.07c.33.3.81.3 1.14 0 .77-.71 1.9-1.82 2.82-3.07C14.33 10.44 15 9.13 15 8a5 5 0 0 0-5-5ZM4 8a6 6 0 1 1 12 0c0 1.47-.84 3-1.8 4.3a23.92 23.92 0 0 1-2.95 3.21c-.71.66-1.79.66-2.5 0a23.9 23.9 0 0 1-2.94-3.2C4.84 11 4 9.47 4 8Zm6-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM7.5 8a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm6.92 5.64c-.24.29-.48.56-.72.82.26.08.5.15.72.24.55.21.97.45 1.23.7.27.24.35.44.35.6 0 .16-.08.36-.35.6-.26.25-.68.49-1.23.7-1.1.43-2.67.7-4.42.7s-3.31-.27-4.42-.7a3.99 3.99 0 0 1-1.23-.7c-.27-.24-.35-.44-.35-.6 0-.16.08-.36.35-.6.26-.25.68-.49 1.23-.7.22-.09.46-.16.72-.24-.24-.26-.48-.53-.72-.82l-.36.13c-.62.23-1.15.53-1.55.89C3.28 15 3 15.46 3 16c0 .53.28.99.67 1.34.4.36.93.66 1.55.9 1.25.47 2.94.76 4.78.76 1.84 0 3.53-.29 4.78-.77a4.96 4.96 0 0 0 1.55-.89c.39-.35.67-.8.67-1.34 0-.53-.28-.99-.67-1.34a4.96 4.96 0 0 0-1.91-1.02Z",
    FILLED : "M10 2a6 6 0 0 0-6 6c0 1.47.84 3 1.8 4.3a23.9 23.9 0 0 0 2.95 3.21c.71.66 1.79.66 2.5 0 .8-.72 1.96-1.89 2.94-3.2C15.16 11 16 9.47 16 8a6 6 0 0 0-6-6Zm2 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm2.42 5.64c-.24.29-.48.56-.72.82.26.08.5.15.72.24.55.21.97.45 1.23.7.27.24.35.44.35.6 0 .16-.08.36-.35.6-.26.25-.68.49-1.23.7-1.1.43-2.67.7-4.42.7s-3.31-.27-4.42-.7a3.99 3.99 0 0 1-1.23-.7c-.27-.24-.35-.44-.35-.6 0-.16.08-.36.35-.6.26-.25.68-.49 1.23-.7.22-.09.46-.16.72-.24-.24-.26-.48-.53-.72-.82l-.36.13c-.62.23-1.15.53-1.55.89C3.28 15 3 15.46 3 16c0 .53.28.99.67 1.34.4.36.93.66 1.55.9 1.25.47 2.94.76 4.78.76 1.84 0 3.53-.29 4.78-.77a4.96 4.96 0 0 0 1.55-.89c.39-.35.67-.8.67-1.34 0-.53-.28-.99-.67-1.34a4.96 4.96 0 0 0-1.91-1.02Z"
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