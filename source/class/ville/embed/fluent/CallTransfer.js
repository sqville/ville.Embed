/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CallTransfer",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.54 2.12a4.1 4.1 0 0 0-2.99.32 2.87 2.87 0 0 0-1.5 2.5c-.06 1.8.36 4.22 2.02 7.06A16.28 16.28 0 0 0 9 17.48c.94.63 1.99.65 2.88.24a3.9 3.9 0 0 0 1.96-2.22c.2-.5.15-1.06-.12-1.53l-.95-1.7a2.5 2.5 0 0 0-3.07-1.12l-.67.25c-.32.13-.62.07-.79-.1A4.32 4.32 0 0 1 7.1 9.19c-.06-.25.06-.55.34-.77l.6-.45a2.5 2.5 0 0 0 .67-3.24l-.97-1.7c-.26-.45-.7-.78-1.2-.9Zm-3.5 2.85c.02-.77.41-1.33 1-1.66a3.1 3.1 0 0 1 2.25-.22c.24.06.45.22.58.43l.97 1.7c.38.65.2 1.49-.4 1.94l-.6.46c-.52.39-.88 1.06-.71 1.78.22.99.7 1.92 1.42 2.62.52.51 1.27.54 1.85.32l.66-.26a1.5 1.5 0 0 1 1.85.67l.95 1.7c.12.22.14.47.06.7a2.91 2.91 0 0 1-1.45 1.66 1.9 1.9 0 0 1-1.9-.16 15.3 15.3 0 0 1-4.64-5.15 12.28 12.28 0 0 1-1.89-6.53ZM12 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1-1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1-1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM17.5 8a.5.5 0 0 1-.5-.5V3.7l-2.15 2.15a.5.5 0 1 1-.7-.7L16.29 3H12.5a.5.5 0 1 1 0-1h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5Z",
    FILLED : "M3.55 2.44a4.1 4.1 0 0 1 2.99-.32c.5.12.94.45 1.2.9l.97 1.7a2.5 2.5 0 0 1-.67 3.24l-.6.45c-.28.22-.4.52-.34.77.18.82.59 1.57 1.15 2.13.17.16.47.22.8.1l.66-.26a2.5 2.5 0 0 1 3.07 1.11l.95 1.7c.27.48.31 1.04.12 1.54a3.9 3.9 0 0 1-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 0 1-2.03-7.06 2.87 2.87 0 0 1 1.51-2.5ZM12 8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm.5-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM14 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm3 1a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.8l-2.15 2.15a.5.5 0 0 0 .7.7L17 3.71V7.5Z"
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