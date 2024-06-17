/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FullScreenMaximize",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 5c0-1.1.9-2 2-2h2a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v2a.5.5 0 0 1-1 0V5Zm9.5-1.5c0-.28.22-.5.5-.5h2a2 2 0 0 1 2 2v2a.5.5 0 0 1-1 0V5a1 1 0 0 0-1-1h-2a.5.5 0 0 1-.5-.5Zm-9 9c.28 0 .5.22.5.5v2a1 1 0 0 0 1 1h2a.5.5 0 0 1 0 1H5a2 2 0 0 1-2-2v-2c0-.28.22-.5.5-.5Zm13 0c.28 0 .5.22.5.5v2a2 2 0 0 1-2 2h-2a.5.5 0 0 1 0-1h2a1 1 0 0 0 1-1v-2c0-.28.22-.5.5-.5Z",
    FILLED : "M3 5.25C3 4.01 4 3 5.25 3h1.87a.75.75 0 1 1 0 1.5H5.25a.75.75 0 0 0-.75.75v1.87a.75.75 0 1 1-1.5 0V5.25Zm9.13-1.5c0-.41.34-.75.75-.75h1.87C15.99 3 17 4 17 5.25v1.87a.75.75 0 0 1-1.5 0V5.25a.75.75 0 0 0-.75-.75h-1.87a.75.75 0 0 1-.75-.75Zm-8.38 8.38c.41 0 .75.34.75.75v1.87c0 .41.34.75.75.75h1.87a.75.75 0 0 1 0 1.5H5.25C4.01 17 3 16 3 14.75v-1.87c0-.41.34-.75.75-.75Zm12.5 0c.41 0 .75.34.75.75v1.87c0 1.24-1 2.25-2.25 2.25h-1.87a.75.75 0 0 1 0-1.5h1.87c.41 0 .75-.34.75-.75v-1.87c0-.41.34-.75.75-.75Z"
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