/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CurrencyDollarEuro",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 2a.5.5 0 0 0-.5.5v.54c-1.7.24-3 1.7-3 3.46v.13c0 1.43.84 2.73 2.14 3.31l.86.38v5.62a2.5 2.5 0 0 1-2-2.45v-.99a.5.5 0 1 0-1 0v.99a3.5 3.5 0 0 0 3 3.46v.55a.5.5 0 0 0 1 0v-.55c1.7-.24 3-1.7 3-3.46v-.12c0-1.43-.84-2.72-2.14-3.3L6 9.66V4.06A2.5 2.5 0 0 1 8 6.5v1a.5.5 0 0 0 1 0v-1a3.5 3.5 0 0 0-3-3.46V2.5a.5.5 0 0 0-.5-.5ZM3 6.5c0-1.2.86-2.22 2-2.45v5.18l-.45-.2A2.63 2.63 0 0 1 3 6.63V6.5Zm3 9.44v-5.17l.45.2A2.62 2.62 0 0 1 8 13.37v.12a2.5 2.5 0 0 1-2 2.45ZM12 10c0-.34.02-.68.06-1h1.44a.5.5 0 1 0 0-1h-1.26c.21-.89.57-1.67 1.01-2.3.77-1.1 1.78-1.7 2.85-1.7.39 0 .81.11 1.12.31a.5.5 0 1 0 .55-.84A3.15 3.15 0 0 0 16.1 3c-1.48 0-2.76.85-3.66 2.12-.57.8-1 1.79-1.23 2.88h-.71a.5.5 0 1 0 0 1h.55a9.7 9.7 0 0 0-.05 1h-.5a.5.5 0 0 0 0 1h.55c.16 1.5.65 2.84 1.39 3.88A4.55 4.55 0 0 0 16.1 17c.54 0 1.17-.13 1.68-.48a.5.5 0 0 0-.56-.82c-.3.2-.72.3-1.12.3-1.07 0-2.08-.6-2.85-1.7a7.19 7.19 0 0 1-1.2-3.3h1.45a.5.5 0 0 0 0-1H12Z",
    FILLED : "M5.5 2a.75.75 0 0 0-.75.75v.33A3.5 3.5 0 0 0 2 6.5v.28c0 1.47.85 2.8 2.17 3.42l.58.27v4.87a2 2 0 0 1-1.25-1.86V12.4a.75.75 0 0 0-1.5 0v1.08a3.5 3.5 0 0 0 2.75 3.42v.35a.75.75 0 0 0 1.5 0v-.35A3.5 3.5 0 0 0 9 13.48v-.27c0-1.46-.84-2.8-2.17-3.42l-.58-.27V4.64A2 2 0 0 1 7.5 6.5v1.1a.75.75 0 0 0 1.5 0V6.5a3.5 3.5 0 0 0-2.75-3.42v-.33A.75.75 0 0 0 5.5 2Zm-2 4.5a2 2 0 0 1 1.25-1.86v4.18A2.28 2.28 0 0 1 3.5 6.78V6.5Zm2.75 8.84v-4.16a2.27 2.27 0 0 1 1.25 2.03v.27a2 2 0 0 1-1.25 1.86ZM12.5 10c0-.34.02-.66.06-.98h1.7a.75.75 0 0 0 0-1.5h-1.38A6.1 6.1 0 0 1 13.61 6c.67-1 1.52-1.5 2.36-1.5.3 0 .63.1.86.25a.75.75 0 0 0 .84-1.24 3.1 3.1 0 0 0-1.7-.51c-1.49 0-2.75.9-3.6 2.16a7.8 7.8 0 0 0-1.05 2.36h-.57a.75.75 0 0 0 0 1.5h.3a10.02 10.02 0 0 0-.05 1h-.25a.75.75 0 1 0 0 1.5h.37a8.2 8.2 0 0 0 1.25 3.32c.85 1.26 2.11 2.16 3.6 2.16.54 0 1.2-.14 1.72-.52a.75.75 0 1 0-.87-1.22c-.21.15-.53.24-.85.24-.84 0-1.69-.5-2.36-1.5a6.6 6.6 0 0 1-.97-2.48h1.61a.75.75 0 1 0 0-1.5H12.5V10Z"
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