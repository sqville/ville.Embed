/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PaintBrushArrowUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9 4v3.5a.5.5 0 0 1-.5.5H7a1 1 0 0 0-1 1v1h8V9a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1-.5-.5V4a1 1 0 1 0-2 0Zm6 5v1.47a.57.57 0 0 1 0 .06v1.56a1.5 1.5 0 0 0-1 0V11H6v.5A13.57 13.57 0 0 1 4.8 17h1.37l.02-.04a16.46 16.46 0 0 0 .66-1.7A3 3 0 0 0 7 14.5a.5.5 0 0 1 1 0c0 .32-.08.69-.18 1.03A10.96 10.96 0 0 1 7.28 17h1.24l.18-.42c.17-.4.3-.83.3-1.08a.5.5 0 0 1 1 0c0 .47-.2 1.05-.37 1.46L9.6 17H13v1H4a.5.5 0 0 1-.43-.76l.01-.02a3.9 3.9 0 0 0 .2-.38A12.57 12.57 0 0 0 5 11.5V9c0-1.1.9-2 2-2h1V4a2 2 0 0 1 4 0v3h1a2 2 0 0 1 2 2Zm0 5.7v3.8a.5.5 0 0 1-1 0v-3.8l-1.15 1.15a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1-.7.7L15 14.71Z",
    FILLED : "M3.57 17.24A.5.5 0 0 0 4 18h1.7l.02-.03c.26-.54.55-1.14.79-1.71.3-.73.49-1.35.49-1.76a.5.5 0 0 1 1 0c0 .63-.27 1.41-.57 2.14-.19.46-.4.92-.61 1.36H8c.2-.39.43-.8.61-1.21.24-.54.39-.99.39-1.29a.5.5 0 0 1 1 0c0 .53-.23 1.15-.48 1.7-.12.27-.25.54-.39.8H13v-1.09a1.5 1.5 0 0 1-1.56-2.47l2-2a1.5 1.5 0 0 1 1.56-.35V11H5v.5a12.57 12.57 0 0 1-1.42 5.72v.02ZM5 10h10V9a2 2 0 0 0-2-2h-1V4a2 2 0 1 0-4 0v3H7a2 2 0 0 0-2 2v1Zm10 4.7v3.8a.5.5 0 0 1-1 0v-3.8l-1.15 1.15a.5.5 0 0 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 0 1-.7.7L15 14.71Z"
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