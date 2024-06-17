/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookGlobe",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 16V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2ZM15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10V4ZM7.04 8h.97c.05-.77.2-1.49.42-2.06A3 3 0 0 0 7.04 8ZM6 8.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm6.96-.5a3 3 0 0 0-1.4-2.06c.23.57.38 1.29.43 2.06h.97Zm-.97 1c-.05.77-.2 1.49-.42 2.06A3 3 0 0 0 12.96 9h-.97Zm-1-1a5.56 5.56 0 0 0-.39-1.78 1.88 1.88 0 0 0-.37-.59c-.11-.11-.2-.13-.23-.13-.04 0-.12.02-.23.13-.12.12-.25.31-.37.6-.2.45-.34 1.06-.38 1.77h1.96ZM9.01 9c.04.7.18 1.32.38 1.78.12.28.25.47.37.59.11.11.2.13.23.13.04 0 .12-.02.23-.13.12-.12.25-.31.37-.6.2-.45.34-1.06.38-1.77H9.02Zm-1 0h-.98a3 3 0 0 0 1.4 2.06A6.75 6.75 0 0 1 8 9Z",
    FILLED : "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6Zm4 10.5-.04-.02a.62.62 0 0 1-.15-.14 2.76 2.76 0 0 1-.4-.82A9.4 9.4 0 0 1 9.01 9h1.98a9.4 9.4 0 0 1-.4 2.52c-.13.38-.27.65-.4.82a.62.62 0 0 1-.15.14.15.15 0 0 1-.03.02H10ZM13.97 9a4 4 0 0 1-2.6 3.26l.17-.42c.25-.76.41-1.75.45-2.84h1.98Zm0-1h-1.98a10.43 10.43 0 0 0-.61-3.26A4 4 0 0 1 13.97 8Zm-5.35 4.26A4 4 0 0 1 6.03 9h1.98a10.43 10.43 0 0 0 .61 3.26ZM6.03 8a4 4 0 0 1 2.6-3.26l-.17.42c-.25.76-.41 1.75-.45 2.84H6.03ZM10 4.5l.04.02c.04.02.09.06.15.14.13.17.27.44.4.82.21.64.36 1.52.4 2.52H9.01c.04-1 .19-1.88.4-2.52.13-.38.27-.65.4-.82a.62.62 0 0 1 .15-.14.15.15 0 0 1 .03-.02H10Z"
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