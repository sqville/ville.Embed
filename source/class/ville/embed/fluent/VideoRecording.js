/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoRecording",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 4A2.5 2.5 0 0 0 2 6.5v2.84c.31-.15.65-.25 1-.3V6.5C3 5.67 3.67 5 4.5 5h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H11v1h.5a2.5 2.5 0 0 0 2.5-2.5v-1l2.4 1.8a1 1 0 0 0 1.6-.8v-7a1 1 0 0 0-1.6-.8L14 7.5v-1A2.5 2.5 0 0 0 11.5 4h-7ZM14 8.75l3-2.25v7l-3-2.25v-2.5ZM1 12.5A2.5 2.5 0 0 1 3.5 10h4a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 7.5 19h-4A2.5 2.5 0 0 1 1 16.5v-4Zm4.02.03a.45.45 0 0 0-.45-.03.5.5 0 0 0-.15.1.5.5 0 0 0-.14.36v3.08a.5.5 0 0 0 .14.35.45.45 0 0 0 .48.13.52.52 0 0 0 .13-.06l2.3-1.57c.06-.04.12-.1.16-.18a.54.54 0 0 0 0-.49.49.49 0 0 0-.17-.18l-2.3-1.5Z",
    FILLED : "M10.5 4A2.5 2.5 0 0 1 13 6.5v7a2.5 2.5 0 0 1-2 2.45V12.5A3.5 3.5 0 0 0 7.5 9h-4c-.54 0-1.05.12-1.5.34V6.5A2.5 2.5 0 0 1 4.5 4h6Zm3.5 8.08V7.93l2.77-2.31a.75.75 0 0 1 1.23.57v7.67c0 .64-.75.99-1.24.57L14 12.08ZM1 12.5A2.5 2.5 0 0 1 3.5 10h4a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 7.5 19h-4A2.5 2.5 0 0 1 1 16.5v-4Zm4.02.03a.45.45 0 0 0-.45-.03.5.5 0 0 0-.15.1.5.5 0 0 0-.14.36v3.08a.5.5 0 0 0 .14.35.45.45 0 0 0 .48.13.52.52 0 0 0 .13-.06l2.3-1.57c.06-.04.12-.1.16-.18a.54.54 0 0 0 0-.49.49.49 0 0 0-.17-.18l-2.3-1.5Z"
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