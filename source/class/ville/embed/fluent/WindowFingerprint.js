/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WindowFingerprint",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.09a1.5 1.5 0 0 1-.09-.5V16H6a2 2 0 0 1-2-2V7h12v2.6c.36.18.7.4 1 .66V6a3 3 0 0 0-3-3H6ZM4 6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H4Zm8 4.59c0 .35.37.58.7.5a3.51 3.51 0 0 1 3.8 1.62c.11.17.3.29.5.29.36 0 .61-.36.44-.68a4.5 4.5 0 0 0-5.12-2.16.44.44 0 0 0-.32.43Zm-1 1.23c0-.45-.5-.7-.8-.37-.75.8-1.2 1.87-1.2 3.05v2a.5.5 0 0 0 1 0v-2c0-.87.32-1.67.84-2.28.1-.11.16-.25.16-.4Zm7 2.62a.46.46 0 0 0-.47-.44h-.06c-.27 0-.47.23-.47.5v2a.5.5 0 0 0 1 0v-2.06ZM13.5 13c-.83 0-1.5.67-1.5 1.5a.5.5 0 0 1-1 0 2.5 2.5 0 0 1 5 0V18a.5.5 0 0 1-1 0v-3.5c0-.83-.67-1.5-1.5-1.5Zm-2 3c.28 0 .5.22.5.5V18a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5Zm2.5-1.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-4Z",
    FILLED : "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4.26a5.5 5.5 0 0 0-1-.66V7H4v7c0 1.1.9 2 2 2h2v.5c0 .18.03.34.09.5H6a3 3 0 0 1-3-3V6Zm9 4.59c0 .35.37.58.7.5a3.51 3.51 0 0 1 3.8 1.62c.11.17.3.29.5.29.36 0 .61-.36.44-.68a4.5 4.5 0 0 0-5.12-2.16.44.44 0 0 0-.32.43Zm-1 1.23c0-.45-.5-.7-.8-.37-.75.8-1.2 1.87-1.2 3.05v2a.5.5 0 0 0 1 0v-2c0-.87.32-1.67.84-2.28.1-.11.16-.25.16-.4Zm7 2.62a.46.46 0 0 0-.47-.44h-.06c-.27 0-.47.23-.47.5v2a.5.5 0 0 0 1 0v-2.06ZM13.5 13c-.83 0-1.5.67-1.5 1.5a.5.5 0 0 1-1 0 2.5 2.5 0 0 1 5 0V18a.5.5 0 0 1-1 0v-3.5c0-.83-.67-1.5-1.5-1.5Zm-2 3c.28 0 .5.22.5.5V18a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5Zm2.5-1.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-4Z"
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