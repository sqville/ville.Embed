/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ContentViewGalleryLightning",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7Zm4 0H6v2h3V7Zm-3.5 4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4ZM5 13.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 .04 0l-.4.86-.06.14H5.5a.5.5 0 0 1-.5-.5ZM6 16a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h5v5.9l.96-2.04.04-.08V4h2a2 2 0 0 1 2 2v1h1V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h5.97l.25-1H6Zm7.32-8h4.82a.5.5 0 0 1 .44.75L16.75 12h1.5c.64 0 .98.76.56 1.24l-4.82 5.51c-.5.58-1.45.09-1.26-.66L13.5 15h-3a.5.5 0 0 1-.46-.71l2.82-6a.5.5 0 0 1 .46-.29Z",
    FILLED : "M9 7H6v2h3V7ZM3 6a3 3 0 0 1 3-3h6v4.78l-.04.08L9.54 13a.5.5 0 0 0-.04 0h-4a.5.5 0 0 0 0 1h3.58c-.34.96.37 2 1.42 2H12v.88l-.03.12H6a3 3 0 0 1-3-3V6Zm14 1h-4V3h1a3 3 0 0 1 3 3v1ZM5 7v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Zm.5 4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm7.82-3h4.82a.5.5 0 0 1 .44.75L16.75 12h1.5c.64 0 .98.76.56 1.24l-4.82 5.51c-.5.58-1.45.09-1.26-.66L13.5 15h-3a.5.5 0 0 1-.46-.71l2.82-6a.5.5 0 0 1 .46-.29Z"
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