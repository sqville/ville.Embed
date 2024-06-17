/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TrophyOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7L3.59 4.3c-.36.28-.6.71-.6 1.2V7a3 3 0 0 0 2.62 2.97 4.5 4.5 0 0 0 3.9 3.5v1.5h-2a2 2 0 0 0-2 2v.5c0 .27.22.5.5.5h8a.5.5 0 0 0 .5-.5v-.5a2 2 0 0 0-2-2h-2v-1.5c.6-.07 1.19-.26 1.7-.55l4.94 4.93a.5.5 0 0 0 .7-.7l-15-15Zm8.62 10.03A3.5 3.5 0 0 1 6.5 9.16V7.2l4.97 4.97ZM5.5 6.2v2.72A2 2 0 0 1 4 7V5.5c0-.22.13-.4.32-.47L5.5 6.21Zm8 2.79c0 .68-.2 1.31-.53 1.85l.72.72c.33-.47.58-1.01.7-1.6A3 3 0 0 0 17 7V5.5c0-.83-.67-1.5-1.5-1.5h-.99a2 2 0 0 0-2-2h-5a2 2 0 0 0-1.92 1.46l.92.92V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5Zm1-4h1c.27 0 .5.22.5.5V7a2 2 0 0 1-1.5 1.94V5Zm-8 11.97a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1h-7Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7L3.59 4.3c-.36.28-.6.71-.6 1.2V7a3 3 0 0 0 2.62 2.97 4.5 4.5 0 0 0 3.9 3.5v1.5h-2a2 2 0 0 0-2 2v.5c0 .27.22.5.5.5h8a.5.5 0 0 0 .5-.5v-.5a2 2 0 0 0-2-2h-2v-1.5c.6-.07 1.19-.26 1.7-.55l4.94 4.93a.5.5 0 0 0 .7-.7l-15-15ZM5.5 6.2v2.72A2 2 0 0 1 4 7V5.5c0-.22.13-.4.32-.47L5.5 6.21Zm8.9 3.76a4.48 4.48 0 0 1-.7 1.6L5.57 3.46A2 2 0 0 1 7.5 2h5a2 2 0 0 1 2 2h1c.82 0 1.5.67 1.5 1.5V7a3 3 0 0 1-2.6 2.97Zm.1-1.03A2 2 0 0 0 16 7V5.5a.5.5 0 0 0-.5-.5h-1v3.94Z"
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