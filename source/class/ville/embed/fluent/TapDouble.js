/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TapDouble",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.5 3a5.5 5.5 0 0 0-5.04 7.7c-.3.16-.57.36-.82.61A6.5 6.5 0 1 1 15.9 9.67a3.7 3.7 0 0 0-.93-.57l.03-.6A5.5 5.5 0 0 0 9.5 3Zm4.49 5.83L14 8.5a4.5 4.5 0 1 0-8.62 1.82 4.2 4.2 0 0 1 1.05-.13A3.5 3.5 0 1 1 13 8.66l1 .17ZM9.5 6C8.67 6 8 6.67 8 7.5v4.25a4.46 4.46 0 0 0-1.87-.25c-.45.05-.91.2-1.3.52s-.67.77-.82 1.36a.5.5 0 0 0 .43.62c2.6.28 3.92 1.7 4.56 2.72.48.78 1.4 1.41 2.43 1.23l1.52-.26a2.5 2.5 0 0 0 1.92-1.6l.98-2.67a2.5 2.5 0 0 0-1.91-3.33L11 9.58V7.5c0-.83-.67-1.5-1.5-1.5ZM9 7.5a.5.5 0 0 1 1 0V10c0 .24.17.45.41.5l3.35.58a1.5 1.5 0 0 1 1.15 2l-.98 2.67c-.19.5-.62.86-1.15.95l-1.52.27c-.5.09-1.07-.23-1.41-.77a6.77 6.77 0 0 0-4.65-3.1c.08-.13.17-.23.26-.3.2-.17.47-.27.78-.3.64-.07 1.42.14 2.04.45A.5.5 0 0 0 9 12.5v-5Z",
    FILLED : "M4 8.5a5.5 5.5 0 1 1 10.97.6c.34.15.65.34.93.57A6.5 6.5 0 1 0 3.64 11.3c.25-.25.53-.45.82-.61A5.48 5.48 0 0 1 4 8.5Zm10 0-.01.33-1-.17.01-.16a3.5 3.5 0 1 0-6.57 1.69 4.4 4.4 0 0 0-1.05.13A4.48 4.48 0 0 1 9.5 4 4.5 4.5 0 0 1 14 8.5Zm-6-1a1.5 1.5 0 1 1 3 0v2.08l2.94.51a2.5 2.5 0 0 1 1.91 3.33l-.98 2.67a2.5 2.5 0 0 1-1.92 1.6l-1.52.26c-1.02.18-1.95-.45-2.43-1.23A5.87 5.87 0 0 0 4.44 14a.5.5 0 0 1-.43-.62c.15-.6.43-1.04.82-1.36.39-.32.85-.47 1.3-.52.63-.06 1.29.05 1.87.25V7.5Z"
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