/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.News",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 6.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM10.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-.5 3.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM5.5 9a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm.5 3v-2h2v2H6ZM2 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v1a2 2 0 0 1 2 2v5.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5V5Zm13 0a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8.5c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V8a1 1 0 0 0-1-1v6.5a.5.5 0 0 1-1 0V5Z",
    FILLED : "M5 12v-2h2v2H5Zm10-7.5c0-.83-.67-1.5-1.5-1.5H3.42c-.83 0-1.5.67-1.5 1.5v9a2.5 2.5 0 0 0 2.5 2.5h11.16a2.5 2.5 0 0 0 2.5-2.5v-6c0-.83-.67-1.5-1.5-1.5H16v7.23a.5.5 0 0 1-1 0V4.5Zm-11 2c0-.28.22-.5.5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5ZM9.5 9h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1ZM9 12.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4.5 9h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5Z"
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