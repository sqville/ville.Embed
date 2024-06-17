/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Headset",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 8a6 6 0 1 1 12 0v3a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2A5 5 0 0 0 5 8h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5v1c0 1.1.9 2 2 2h1a2 2 0 1 1 .27 1H7a3 3 0 0 1-3-3V8Zm11 1h-2v3h1a1 1 0 0 0 1-1V9ZM5 12h2V9H5v3Zm4 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z",
    FILLED : "M10 2a6 6 0 0 0-6 6v6a3 3 0 0 0 3 3h1.27A2 2 0 1 0 8 16H7a2 2 0 0 1-2-2v-1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5a5 5 0 0 1 10 0h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2V8a6 6 0 0 0-6-6Z"
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