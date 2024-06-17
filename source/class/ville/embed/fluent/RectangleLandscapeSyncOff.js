/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.RectangleLandscapeSyncOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7l1.48 1.48A3 3 0 0 0 2 7v6a3 3 0 0 0 3 3h4.6c-.16-.32-.3-.65-.4-1H5a2 2 0 0 1-2-2V7a2 2 0 0 1 1.39-1.9l6.2 6.19a4.5 4.5 0 0 0 6.13 6.13l.43.43a.5.5 0 0 0 .7-.7l-15-15ZM15.4 16.1a3 3 0 0 1-2.4-.26V16a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5h.8l.93.94A.5.5 0 0 1 14 15h-.47a1.97 1.97 0 0 0 1.01.25l.86.86ZM19 13.5c0 .96-.3 1.84-.8 2.57L15.11 13h1.38a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-1 0v.15a3.01 3.01 0 0 0-2.82-.1l-1.25-1.24A4.5 4.5 0 0 1 19 13.5ZM15 12a.5.5 0 0 0-.49.4l-.56-.57a2 2 0 0 1 1.52.17H15ZM6.12 4l1 1H15a2 2 0 0 1 2 2v1.6c.36.18.7.4 1 .66V7a3 3 0 0 0-3-3H6.12Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7l1.48 1.48A3 3 0 0 0 2 7v6a3 3 0 0 0 3 3h4.6a5.48 5.48 0 0 1 .25-5.44l.73.73a4.5 4.5 0 0 0 6.13 6.13l.44.43a.5.5 0 0 0 .7-.7l-15-15ZM15.4 16.1a3 3 0 0 1-2.4-.26V16a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5h.8l.93.94A.5.5 0 0 1 14 15h-.47a1.97 1.97 0 0 0 1.01.25l.86.86ZM19 13.5c0 .96-.3 1.84-.8 2.57L15.11 13h1.38a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-1 0v.15a3.01 3.01 0 0 0-2.82-.1l-1.25-1.24A4.5 4.5 0 0 1 19 13.5ZM15 12a.5.5 0 0 0-.49.4l-.56-.57a2 2 0 0 1 1.52.17H15ZM6.12 4l5.1 5.1a5.48 5.48 0 0 1 6.78.16V7a3 3 0 0 0-3-3H6.12Z"
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