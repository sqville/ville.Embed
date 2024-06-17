/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GlobeSurface",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 3a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 11c.25 0 .74-.23 1.23-1.2.24-.5.45-1.1.58-1.8H8.2c.13.7.34 1.3.58 1.8.5.97.98 1.2 1.23 1.2Zm-1.95-4h3.9a10.93 10.93 0 0 0 0-2h-3.9a10.94 10.94 0 0 0 0 2Zm3.86 3.62A5.02 5.02 0 0 0 14.58 11h-1.75a7.76 7.76 0 0 1-.92 2.62ZM12.96 10h1.94a5.02 5.02 0 0 0 0-2h-1.94a11.96 11.96 0 0 1 0 2ZM11.9 4.38c.42.68.74 1.59.92 2.62h1.75a5.02 5.02 0 0 0-2.67-2.62Zm-.68.82C10.73 4.23 10.25 4 10 4s-.74.23-1.23 1.2c-.24.5-.45 1.1-.58 1.8h3.62c-.13-.7-.34-1.3-.58-1.8Zm-3.14-.82A5.02 5.02 0 0 0 5.42 7h1.75c.18-1.03.5-1.94.92-2.62ZM5 9c0 .34.03.68.1 1h1.94a11.97 11.97 0 0 1 0-2H5.1c-.07.32-.1.66-.1 1Zm.42 2a5.02 5.02 0 0 0 2.67 2.62A7.76 7.76 0 0 1 7.17 11H5.42ZM3.5 13h.75c.26.36.54.7.85 1H3.9l-.75 3h13.72l-.75-3H14.9c.31-.3.6-.64.85-1h.75a.5.5 0 0 1 .49.38l1 4a.5.5 0 0 1-.49.62h-15a.5.5 0 0 1-.49-.62l1-4A.5.5 0 0 1 3.5 13Z",
    FILLED : "M8.12 7c.12-.93.32-1.76.58-2.42.21-.55.45-.97.7-1.23.24-.27.44-.35.6-.35.16 0 .36.08.6.35.25.26.49.68.7 1.23.26.66.46 1.49.58 2.42H8.12Zm-.35-2.78c.13-.34.28-.67.45-.95A6.02 6.02 0 0 0 4.34 7h2.78c.12-1.05.35-2 .65-2.78Zm4.46 0a6.18 6.18 0 0 0-.45-.95A6.02 6.02 0 0 1 15.66 7h-2.78c-.12-1.05-.35-2-.65-2.78ZM12.97 8h2.95a6.04 6.04 0 0 1 0 2h-2.95a17.34 17.34 0 0 0 0-2Zm-.09 3h2.78a6.02 6.02 0 0 1-3.88 3.73c.17-.28.32-.6.45-.95.3-.78.53-1.73.65-2.78Zm-2.28 3.65c-.24.27-.44.35-.6.35-.16 0-.36-.08-.6-.35a3.99 3.99 0 0 1-.7-1.23c-.26-.66-.46-1.49-.58-2.42h3.76c-.12.93-.32 1.76-.58 2.42-.21.55-.45.97-.7 1.23ZM4.34 11a6.02 6.02 0 0 0 3.88 3.73c-.17-.28-.32-.6-.45-.95-.3-.78-.53-1.73-.65-2.78H4.34Zm2.69-1H4.08a6.04 6.04 0 0 1 0-2h2.95a17.4 17.4 0 0 0 0 2Zm1-2a16.36 16.36 0 0 0 0 2h3.94a16.37 16.37 0 0 0 0-2H8.03ZM3.5 13h.75c.25.36.53.69.84 1A.5.5 0 0 1 5 14H3.89l-.75 3h13.72l-.75-3H15a.5.5 0 0 1-.1 0c.32-.31.6-.64.85-1h.75a.5.5 0 0 1 .49.38l1 4a.5.5 0 0 1-.49.62h-15a.5.5 0 0 1-.49-.62l1-4A.5.5 0 0 1 3.5 13Z"
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